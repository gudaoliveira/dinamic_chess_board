const ss = SpreadsheetApp.getActiveSpreadsheet() //Gets the active spreadsheet
const sheet = ss.getSheetByName('Board') //Gets the sheet by the name of 'Board'

let numRows = sheet.getRange('D2').getValue()
let numColumns = sheet.getRange('H2').getValue()

function start() {
  boardSizeSetup()
  constructBoard()
}
