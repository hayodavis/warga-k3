// Salin kode ini ke Google Apps Script (Code.gs)

// Nama Sheet
const SHEET_REPORTS = "Reports";
const SHEET_SETTINGS = "Settings";

function doGet(e) {
  return handleRequest(e);
}

function doPost(e) {
  return handleRequest(e);
}

function handleRequest(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheetReports = ss.getSheetByName(SHEET_REPORTS);
    let sheetSettings = ss.getSheetByName(SHEET_SETTINGS);
    
    // Setup Awal jika sheet belum ada
    if (!sheetReports) {
      sheetReports = ss.insertSheet(SHEET_REPORTS);
      sheetReports.appendRow(['id', 'category', 'location', 'description', 'status', 'userId', 'timestamp', 'imageUrl']);
    }
    if (!sheetSettings) {
      sheetSettings = ss.insertSheet(SHEET_SETTINGS);
      sheetSettings.appendRow(['key', 'value']);
      sheetSettings.appendRow(['admin_password', 'admin123']); // Default Password
    }

    // Parsing Input
    let action = e.parameter.action;
    let data = {};

    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
      if (data.action) action = data.action;
    }

    // --- LOGIC ---

    // 1. LOGIN ADMIN
    if (action === 'login') {
      const inputPass = e.parameter.password || data.password;
      const storedPass = sheetSettings.getRange(2, 2).getValue();
      if(inputPass == storedPass) {
        return responseJSON({ status: 'success' });
      } else {
        return responseJSON({ status: 'error', message: 'Invalid password' });
      }
    }

    // 2. GET DATA
    else if (action === 'get') {
      const rows = sheetReports.getDataRange().getValues();
      const headers = rows[0];
      const result = [];
      for (let i = 1; i < rows.length; i++) {
        let obj = {};
        rows[i].forEach((cell, idx) => obj[headers[idx]] = cell);
        result.push(obj);
      }
      return responseJSON({ status: 'success', data: result });
    }

    // 3. CREATE DATA (+ FOTO)
    else if (action === 'create') {
      const id = Utilities.getUuid();
      const timestamp = new Date().toISOString();
      let imageUrl = "";

      // Handle Image Upload ke Drive
      if (data.image && data.image.includes('base64')) {
        try {
          const folder = DriveApp.getRootFolder(); 
          const blob = Utilities.newBlob(
            Utilities.base64Decode(data.image.split(',')[1]), 
            'image/jpeg', 
            'laporan_' + id + '.jpg'
          );
          const file = folder.createFile(blob);
          file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
          imageUrl = file.getDownloadUrl();
        } catch(err) {
          imageUrl = "Error Upload: " + err.toString();
        }
      }

      sheetReports.appendRow([
        id, data.category, data.location, data.description, 'Open', data.userId, timestamp, imageUrl
      ]);
      return responseJSON({ status: 'success', id: id });
    }

    // 4. UPDATE STATUS
    else if (action === 'update') {
      const rows = sheetReports.getDataRange().getValues();
      for (let i = 1; i < rows.length; i++) {
        if (rows[i][0] == data.id) {
          sheetReports.getRange(i + 1, 5).setValue(data.status); // Kolom 5 = Status
          return responseJSON({ status: 'success' });
        }
      }
      return responseJSON({ status: 'error', message: 'ID not found' });
    }

    // 5. DELETE DATA
    else if (action === 'delete') {
      const rows = sheetReports.getDataRange().getValues();
      for (let i = 1; i < rows.length; i++) {
        if (rows[i][0] == data.id) {
          sheetReports.deleteRow(i + 1); // Hapus baris
          return responseJSON({ status: 'success' });
        }
      }
      return responseJSON({ status: 'error', message: 'ID not found' });
    }

    return responseJSON({ status: 'error', message: 'Unknown action' });

  } catch (err) {
    return responseJSON({ status: 'error', message: err.toString() });
  } finally {
    lock.releaseLock();
  }
}

function responseJSON(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}