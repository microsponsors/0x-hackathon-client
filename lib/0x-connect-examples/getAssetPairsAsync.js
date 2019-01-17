const client = require('./../client.js')

// CLI:
// curl 'http://localhost:3000/v2/asset_pairs'
client.getAssetPairsAsync()
  .then(
    (r) => {
      console.log('Asset Pairs: ')
      console.log(r)
      if (r.records) {
        r.records.forEach((record) => { console.log(record) })
      }
    },
    (e) => console.error(e)
  )
