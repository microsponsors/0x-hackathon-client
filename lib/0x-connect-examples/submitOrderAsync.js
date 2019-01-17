const client = require('./../client.js')

// order hash: 0x1def24a1dda850dc26717b2c699c07cf7cc25deff9a2322eeed32f1f9d2b4583
const orderJson = {
  "makerAddress": "0x063aaf1fbbf0238f1cb571a5e9a6d91304798887",
  "takerAddress": "0x0000000000000000000000000000000000000000",
  "makerAssetAmount": "1000000000000000000",
  "takerAssetAmount": "16000000000000",
  "expirationTimeSeconds": "1547696789696",
  "makerFee": "0",
  "takerFee": "0",
  "feeRecipientAddress": "0x0000000000000000000000000000000000000000",
  "senderAddress": "0x0000000000000000000000000000000000000000",
  "salt": "89417581329978246874860626984947643459086652777710993394716615279119907990176",
  "makerAssetData": "0xf47261b00000000000000000000000002002d3812f58e35f0ea1ffbf80a75a38c32175fa",
  "takerAssetData": "0xf47261b0000000000000000000000000d0a1e359811322d97991e03f863a0c30c2cf029c",
  "exchangeAddress": "0x35dd2932454449b14cee11a94d3674a936d5d7b2",
  "signature": "0x1b5947c5bed1fc3d99582fc86d02c768595ae974e9cbb95d260f9f48bf5dfab20a70e2fabc1b862263e3563e376173006f13d0ca8b3f6d79eb83ad90437fa68fe802"
}

// CLI POST:
// curl 'http://localhost:3000/v2/order' -H "Content-Type:application/json" -d '{"makerAddress.. etc"}'

console.log(`\n-- client.submitOrderAsync():`)
client.submitOrderAsync(orderJson)
  .then(
    (r) => console.log(r),
    (e) => console.error(e)
  )
