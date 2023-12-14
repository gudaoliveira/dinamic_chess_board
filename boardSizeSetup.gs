function boardSizeSetup() {
  let lastRow = sheet.getMaxRows()
  let lastColumn = sheet.getMaxColumns()

  sheet.getRange(1, 1, lastRow, lastColumn).setValue('').setBackground(null).setBorder(false,false, false, false, false, false)
  sheet.getRange(1, 1).setValue('Dinamic Chess Board').setHorizontalAlignment('center')
  sheet.getRange(2, 1).setValue('Number of Rows ->')
  sheet.getRange(2, 4).setValue(numRows)
  sheet.getRange(2, 5).setValue('Number of Columns ->')
  sheet.getRange(2, 8).setValue(numColumns)
  sheet.getRange('A1:L2').setBorder(true, true, true, true, true, true)

  sheet.setRowHeights(1, lastRow, 50)
  sheet.setRowHeight(1, 70) //Gives the first line a diferent height for the title
  sheet.setColumnWidths(1, lastColumn, 60)
}
