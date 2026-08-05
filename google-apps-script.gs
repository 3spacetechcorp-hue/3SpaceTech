function doPost(e) {
  try {
    const payload = typeof e.postData.contents === 'string'
      ? JSON.parse(e.postData.contents)
      : {};

    const spreadsheetId = 'PASTE_YOUR_GOOGLE_SHEET_ID_HERE';
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    let sheet = spreadsheet.getSheetByName('Contacts');

    if (!sheet) {
      sheet = spreadsheet.insertSheet('Contacts');
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Organization', 'Subject', 'Message']);
    }

    sheet.appendRow([
      new Date().toISOString(),
      payload.name || '',
      payload.email || '',
      payload.organization || '',
      payload.subject || 'General Inquiry',
      payload.message || ''
    ]);

    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
