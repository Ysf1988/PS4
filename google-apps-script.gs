// الصق هذا الكود في: Google Sheet > Extensions > Apps Script، ثم Deploy > New deployment > Web app
// Execute as: Me  |  Who has access: Anyone
function doPost(e) {
  const ss = SpreadsheetApp.getActive();
  const sh = ss.getSheetByName("Log") || ss.insertSheet("Log");
  let d = {};
  try { d = JSON.parse(e.postData.contents); } catch (err) {}
  if (d.game) sh.appendRow([new Date(), String(d.game).slice(0, 120), String(d.type || "single").slice(0, 10)]);
  return ContentService.createTextOutput("ok");
}
