'use strict';
// Debug client on CLI
Object.defineProperty(exports, '__esModule', { value: true });
const Connect = require('@0x/connect');
const client = new Connect.HttpClient('http://localhost:3000/v2');

console.log(`\n\n\n-- Client Configuration:`)
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

