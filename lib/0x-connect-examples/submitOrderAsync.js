const client = require('./../client.js')

const orderJson = {
  "exchangeAddress": "0x48bacb9266a570d521063ef5dd96e61686dbe788",
  "makerAddress": "0x69b83d8c38dfeb7e6100c7b7ac3e2863bede5302",
  "takerAddress": "0x0000000000000000000000000000000000000000",
  "senderAddress": "0x0000000000000000000000000000000000000000",
  "feeRecipientAddress": "0x0000000000000000000000000000000000000000",
  "expirationTimeSeconds": "1549340092",
  "salt": "73899991150812589109128252527909146189188684770713892596295183888870065061292",
  "makerAssetAmount": "1",
  "takerAssetAmount": "1000000000000000000",
  "makerAssetData": "0x02571792000000000000000000000000e02a328a8456214fa51e750fcc4b8fc60955342d0000000000000000000000000000000000000000000000000000000000000000",
  "takerAssetData": "0xf47261b00000000000000000000000000b1ba0af832d7c05fd64161e0db78e85978e8082",
  "makerFee": "0",
  "takerFee": "0",
  "signature": "0x1ca751e2f2b9794c5824316c0bc7c12217cec0594da485993e337cee53d36f43151d89b412db4dcd1549d50a5cfd3a98f385caf0daa606320c45f833e7f829829802"
}

// CLI POST:
// curl 'http://localhost:3000/v2/order' -H "Content-Type:application/json" -d '{"makerAddress.. etc"}'
console.log(`\n-- client.submitOrderAsync():`)
client.submitOrderAsync(orderJson)
  .then(
    (r) => console.log(r),
    (e) => console.error(e)
  )
