const client = require('./../client.js')

const orderJson = {
  "exchangeAddress": "0x48bacb9266a570d521063ef5dd96e61686dbe788",
  "makerAddress": "0x69b83d8c38dfeb7e6100c7b7ac3e2863bede5302",
  "takerAddress": "0xba345fd0dcb7ff9c30feddeb794532820a57ac26",
  "senderAddress": "0x0000000000000000000000000000000000000000",
  "feeRecipientAddress": "0x0000000000000000000000000000000000000000",
  "expirationTimeSeconds": "1564953913305",
  "salt": "75693626714592836370565674922743952331350490971172724966220952551295602942860",
  "makerAssetAmount": "2000000000000000000",
  "takerAssetAmount": "1",
  "makerAssetData": "0xf47261b00000000000000000000000000b1ba0af832d7c05fd64161e0db78e85978e8082",
  "takerAssetData": "0x02571792000000000000000000000000e02a328a8456214fa51e750fcc4b8fc60955342d0000000000000000000000000000000000000000000000000000000000000000",
  "makerFee": "0",
  "takerFee": "0",
  "signature": "0x1b142208aae3da792e99bc983e75869e77c2eb8b4be1047eb32a2ef7cb00c91add4048ff47d9dbeacc7280cb883d552495c26a1e1c2a87de6cb4b09425d6e63aad02"
}

// CLI POST:
// curl 'http://localhost:3000/v2/order' -H "Content-Type:application/json" -d '{"makerAddress.. etc"}'
console.log(`\n-- client.submitOrderAsync():`)
client.submitOrderAsync(orderJson)
  .then(
    (r) => console.log(r),
    (e) => console.error(e)
  )
