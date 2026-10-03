/**
 * Google Apps Script endpoint for the portfolio's Work With Me form.
 *
 * Add this file to the Apps Script project attached to your Google Sheet.
 * The script creates a "Work Requests" tab automatically when needed.
 */

const SHEET_NAME = "Work Requests";
const HEADERS = [
  "Timestamp",
  "Full Name",
  "Phone / WhatsApp Number",
  "Email Address",
  "Company / Brand Name",
  "Service Required",
  "Website / App URL",
  "Project Brief",
];

function doGet() {
  return jsonResponse({ status: "ok", message: "Work request endpoint is active." });
}

function doPost(event) {
  try {
    const rawBody = event && event.postData && event.postData.contents ? event.postData.contents : "{}";
    const data = JSON.parse(rawBody);
    const fullName = cleanValue(data.fullName);
    const phone = cleanValue(data.phone);
    const email = cleanValue(data.email);

    if (!fullName || !email) {
      return jsonResponse({ status: "error", message: "Full Name and Email Address are required." });
    }

    if (phone && !/^\d{10}$/.test(phone)) {
      return jsonResponse({ status: "error", message: "Phone / WhatsApp Number must contain 10 digits." });
    }

    const sheet = getWorkRequestsSheet();
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
    }

    sheet.appendRow([
      new Date(),
      fullName,
      phone,
      email,
      cleanValue(data.company),
      cleanValue(data.service),
      cleanValue(data.website),
      cleanValue(data.brief),
    ]);

    return jsonResponse({ status: "success", message: "Work request saved." });
  } catch (error) {
    return jsonResponse({ status: "error", message: error.message });
  }
}

function getWorkRequestsSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  return sheet;
}

function cleanValue(value) {
  const text = String(value || "").trim();

  // Prevent user-entered values from being interpreted as formulas in Sheets.
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
