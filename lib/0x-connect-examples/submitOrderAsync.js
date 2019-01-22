const client = require('./../client.js')

const orderJson = {
  "makerAddress": "0xb78f09d705dedaca26dc99e9ee7d789be7b38fcc",
  "takerAddress": "0x0000000000000000000000000000000000000000",
  "makerAssetAmount": "1000000000000000000",
  "takerAssetAmount": "11000000000000",
  "expirationTimeSeconds": "1547779712501",
  "makerFee": "0",
  "takerFee": "0",
  "feeRecipientAddress": "0x0000000000000000000000000000000000000000",
  "senderAddress": "0x0000000000000000000000000000000000000000",
  "salt": "50760547265114991326866617902303025186401614207423659842692529022319169293052",
  "makerAssetData": "0xf47261b00000000000000000000000002002d3812f58e35f0ea1ffbf80a75a38c32175fa",
  "takerAssetData": "0xf47261b0000000000000000000000000d0a1e359811322d97991e03f863a0c30c2cf029c",
  "exchangeAddress": "0x35dd2932454449b14cee11a94d3674a936d5d7b2",
  "signature": "0x1b4ab8d8d0f1fffd08fc96e8104bf9cdee3e364d08aa29cd629b9cbc51a2fd7b4e26f07d1cdcd3891b493958f1f2067992f0d52eef24bdf473d0facdb792c33a4302"
}

// CLI POST:
// curl 'http://localhost:3000/v2/order' -H "Content-Type:application/json" -d '{"makerAddress.. etc"}'

console.log(`\n-- client.submitOrderAsync():`)
client.submitOrderAsync(orderJson)
  .then(
    (r) => console.log(r),
    (e) => console.error(e)
  )
