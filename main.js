const { createNewSheetsClient } = require("./googleSheetsService");

// test get and write sheets value
async function printSheets() {
  const sheets = await createNewSheetsClient();

  sheets.spreadsheets.values
    .get({
      spreadsheetId: "1tSaCUdC1-ZeVEsGDQIPmht390tY3_4Z2DZ26ud_8NQU",
      range: "Sheet1!A:A",
    })
    .then((response) => {
      response.data.values.forEach((value) => {
        console.log(value);
      });
    })
    .catch((error) => {
      console.log(error);
    });

  sheets.spreadsheets.values.append({
    spreadsheetId: "1tSaCUdC1-ZeVEsGDQIPmht390tY3_4Z2DZ26ud_8NQU",
    range: "Sheet1!A:A",
    valueInputOption: "RAW",
    resource: {
      values: [[900]],
    },
  });
}

printSheets();
