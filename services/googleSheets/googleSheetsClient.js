import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

async function getAuthToken() {
  const auth = new google.auth.GoogleAuth({
    keyFile: "./service_account_secret.json",
    scopes: SCOPES,
  });
  const authToken = await auth.getClient();
  return authToken;
}

export async function createNewSheetsClient() {
  const auth = await getAuthToken();

  return google.sheets({ version: "v4", auth });
}
