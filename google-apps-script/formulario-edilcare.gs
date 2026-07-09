const SHEET_NAME = "Consultas";

function doPost(event) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = getOrCreateSheet_(spreadsheet);
  const payload = JSON.parse(event.postData.contents || "{}");
  const now = new Date();

  const row = [
    now,
    payload.nombre || "",
    payload.empresa || "",
    payload.telefono || "",
    payload.paisTelefono || "",
    payload.email || "",
    payload.mensaje || "",
    payload.origen || "",
  ];

  LockService.getScriptLock().waitLock(10000);

  try {
    sheet.appendRow(row);
  } finally {
    LockService.getScriptLock().releaseLock();
  }

  notifyOwner_(spreadsheet, payload, now);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet_(spreadsheet) {
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Fecha",
      "Nombre",
      "Empresa",
      "Teléfono",
      "País teléfono",
      "Email",
      "Mensaje",
      "Origen",
    ]);
  }

  return sheet;
}

function notifyOwner_(spreadsheet, payload, date) {
  const ownerEmail = DriveApp.getFileById(spreadsheet.getId()).getOwner().getEmail();
  const subject = "Nuevo registro en el formulario de Edilcare";
  const body = [
    "Se insertó un nuevo registro en la plantilla.",
    "",
    `Fecha: ${date}`,
    `Nombre: ${payload.nombre || "-"}`,
    `Empresa: ${payload.empresa || "-"}`,
    `Teléfono: ${payload.telefono || "-"}`,
    `País teléfono: ${payload.paisTelefono || "-"}`,
    `Email: ${payload.email || "-"}`,
    "",
    "Mensaje:",
    payload.mensaje || "-",
    "",
    `Origen: ${payload.origen || "-"}`,
    `Planilla: ${spreadsheet.getUrl()}`,
  ].join("\n");

  MailApp.sendEmail(ownerEmail, subject, body, {
    name: "Landing Page",
    replyTo: payload.email || ownerEmail,
  });
}
