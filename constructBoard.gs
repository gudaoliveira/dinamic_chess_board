function constructBoard() {

  let boardIndex = 1

  for (let x = 4; x < 4 + numRows; x++) { //Rows
    for (let y = 2; y < 2 + numColumns; y++) {  //Collumn
      function paintInBlack() {
        sheet
          .getRange(x, y)
          .setBackground('black')
          .setValue(boardIndex)
          .setFontColor('white')
          .setVerticalAlignment('top')
          .setHorizontalAlignment('right')
          .setBorder(true, true, true, true, null, null)
      }
      function paintInWhite() {
        sheet
          .getRange(x, y)
          .setBackground('white')
          .setValue(boardIndex)
          .setFontColor('black')
          .setVerticalAlignment('top')
          .setHorizontalAlignment('right')
          .setBorder(true, true, true, true, null, null)
      }
      if (y % 2 == 0) {
        if (x % 2 == 0) {
          paintInWhite()
          boardIndex++
        } else {
          paintInBlack()
          boardIndex++
        }
      }
      if (y % 2 != 0) {
        if (x % 2 == 0) {
          paintInBlack()
          boardIndex++
        } else {
          paintInWhite()
          boardIndex++
        }
      }
    }
  }

  sheet.getRange(4, 2, numRows, numColumns).setBorder(true, true, true, true, false, false, 'black', null)
}




