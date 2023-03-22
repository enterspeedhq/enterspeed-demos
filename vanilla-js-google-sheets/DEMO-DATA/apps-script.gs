function ingestToEnterspeed() {
  const sheet = SpreadsheetApp.getActiveSheet()
  const sheetData = sheet.getDataRange().getValues()


  sheetData.forEach(function (row, i) {
    if (i !== 0) {

      const rowNumber = i +1

      const ingestUrl = 'https://api.enterspeed.com/ingest/v2/olsen-banden-' + sheet.getRange('A' + rowNumber).getValue()


      const payload = {
        'type': 'movie',
        'url': '/olsen-banden-' + sheet.getRange('A' + rowNumber).getValue(),
        'originParentId': 'movies',
        'properties': {
          'number': sheet.getRange('A' + rowNumber).getValue(),
          'name': sheet.getRange('B' + rowNumber).getValue(),
          'year': sheet.getRange('C' + rowNumber).getValue(),
          'image': sheet.getRange('d' + rowNumber).getValue(),
          'imdb': sheet.getRange('e' + rowNumber).getValue(),
          'description': sheet.getRange('f' + rowNumber).getValue()
        }
      };

      const options = {
        'method': 'post',
        'headers': {
          'x-api-key': 'YOUR-DATA-SOURCE-API-KEY'
        },
        'payload': JSON.stringify(payload)
      };

      Logger.log('Ingesting: ' + row)
      UrlFetchApp.fetch(ingestUrl, options);
    }
  })
    Logger.log('All done 🎉')
};
