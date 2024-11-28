import { createNewSheetsClient } from "../services/googleSheets/googleSheetsClient.js";
import { convertDateToColumns } from "../utils/convertDateToColumns.js";

export const getCell = async (req, res, next) => {
  const year = req.params.year;
  const month = req.params.month;
  const date = req.params.date;

  const sheets = await createNewSheetsClient();
  const range = `${year}-${month}!${convertDateToColumns(
    date
  )}:${convertDateToColumns(date)}`;

  console.log(range);

  // better to put this inside the google sheets service
  sheets.spreadsheets.values
    .get({
      spreadsheetId: "1tSaCUdC1-ZeVEsGDQIPmht390tY3_4Z2DZ26ud_8NQU",
      range,
    })
    .then((response) => {
      res.status(200).json(response.data.values);
    })
    .catch((error) => {
      return next(error);
    });
};
