// Debug.js: For debugging client via CLI
const client = require('./client.js')

console.log(`\n\n\n-- Launch Kit Configuration:`)
client.getFeeRecipientsAsync()
  .then(
    (r) => {
      console.log('Fee Receipients: ')
      console.log(r)
    },
    (e) => console.error(e)
  )

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

client.getOrdersAsync()
  .then(
    (r) => {
      console.log('\n\nCurrent Orders: ')
      console.log(r)
      if (r.records) {
        r.records.forEach((record) => {
          console.log('Order:')
          console.log(record)
        })
      }
    },
    (e) => console.error(e)
  )

