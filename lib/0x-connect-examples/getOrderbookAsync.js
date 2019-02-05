const client = require('./../client.js')

/**
 * Retrieve orderbook for a given asset pair.
 * Bids will be sorted in descending order by price.
 * Asks will be sorted in ascending order by price.
 * Docs:
 * http://sra-spec.s3-website-us-east-1.amazonaws.com/#operation/getOrderbook
 */

// ZRX:
// const baseAssetData = '0xf47261b00000000000000000000000002002d3812f58e35f0ea1ffbf80a75a38c32175fa'
// WETH:
// const quoteAssetData = '0xf47261b0000000000000000000000000d0a1e359811322d97991e03f863a0c30c2cf029c'

// Microsponsors NFT ERC721 token id 0:
const baseAssetData = '0x02571792000000000000000000000000e02a328a8456214fa51e750fcc4b8fc60955342d0000000000000000000000000000000000000000000000000000000000000000';
// WETH:
const quoteAssetData = '0xf47261b00000000000000000000000000b1ba0af832d7c05fd64161e0db78e85978e8082'

// CLI:
// curl 'http://localhost:3000/v2/orderbook?baseAssetData=0xf47261b00000000000000000000000002002d3812f58e35f0ea1ffbf80a75a38c32175fa&quoteAssetData=0xf47261b0000000000000000000000000d0a1e359811322d97991e03f863a0c30c2cf029c'
console.log(`\n-- client.getOrderbookAsync():`)
client.getOrderbookAsync(
  { "baseAssetData": baseAssetData,
    "quoteAssetData": quoteAssetData
  },
  {
    page: 1,
    perPage: 20
  })
  .then(
    (r) => {
      console.log(r)
      if (r.bids && r.bids.records) {
        r.bids.records.forEach((record) => {
          console.log('Bid record:')
          console.log(record)
        })
      }
      if (r.bids && r.asks.records) {
        r.asks.records.forEach((record) => {
          console.log('Ask record:')
          console.log(record)
        })
      }

    },
    (e) => console.log(e)
  )
