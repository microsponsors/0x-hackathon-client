const client = require('./../client.js')

const orderJson = {
  "exchangeAddress": "0x48bacb9266a570d521063ef5dd96e61686dbe788",
  "makerAddress": "0x69b83d8c38dfeb7e6100c7b7ac3e2863bede5302",
  "takerAddress": "0x0000000000000000000000000000000000000000",
  "senderAddress": "0x0000000000000000000000000000000000000000",
  "feeRecipientAddress": "0x0000000000000000000000000000000000000000",
  "expirationTimeSeconds": "1549354260",
  "salt": "79970299751270947139280450523405640180501610286342470438852906618033485873329",
  "makerAssetAmount": "1",
  "takerAssetAmount": "1000000000000000000",
  "makerAssetData": "0x02571792000000000000000000000000e02a328a8456214fa51e750fcc4b8fc60955342d0000000000000000000000000000000000000000000000000000000000000001",
  "takerAssetData": "0xf47261b00000000000000000000000000b1ba0af832d7c05fd64161e0db78e85978e8082",
  "makerFee": "0",
  "takerFee": "0",
  "signature": "0x1b7237795954ffc22f1f23f2f9ec4fb514fd61be97a5eef8c4bc8769dfc3ca6e682aab9a379a0ec3b3dd99b256320283c373a27a5700b78cca90123381a08ff44e02"
}

// CLI POST:
// curl 'http://localhost:3000/v2/order' -H "Content-Type:application/json" -d '{"makerAddress.. etc"}'
console.log(`\n-- client.submitOrderAsync():`)
client.submitOrderAsync(orderJson)
  .then(
    (r) => console.log(r),
    (e) => console.error(e)
  )
