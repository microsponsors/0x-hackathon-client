// HMMM... CLI query works BUT client query does not
// FILED BUG: https://github.com/0xProject/0x-launch-kit/issues/31
// records return empty from client queries, are populated from CLI queries

const client = require('./../client.js')

/**
 * Retrieve orderbook for a given asset pair.
 * Bids will be sorted in descending order by price.
 * Asks will be sorted in ascending order by price.
 */

// ZRX:
const baseAssetData = '0xf47261b00000000000000000000000002002d3812f58e35f0ea1ffbf80a75a38c32175fa'
// WETH:
const quoteAssetData = '0xf47261b0000000000000000000000000d0a1e359811322d97991e03f863a0c30c2cf029c'

// CLI:
// curl 'http://localhost:3000/v2/orderbook?baseAssetData=0xf47261b00000000000000000000000002002d3812f58e35f0ea1ffbf80a75a38c32175fa&quoteAssetData=0xf47261b0000000000000000000000000d0a1e359811322d97991e03f863a0c30c2cf029c'

console.log(`\n-- client.getOrderbookAsync():`)
client.getOrderbookAsync(
  { "baseAssetData": baseAssetData,
    "quoteAssetData": quoteAssetData
  })
  .then(
    (r) => console.log(r),
    (e) => console.log(e)
  )
