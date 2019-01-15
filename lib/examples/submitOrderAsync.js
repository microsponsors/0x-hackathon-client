const client = require('./client.js')

console.log(`\n\n\n-- submitOrderAsync():`)
client.submitOrderAsync()
  .then(
    (r) => {
      console.log('Fee Receipients: ')
      console.log(r)
    },
    (e) => console.error(e)
  )

/**
 * CLI equivalent
 * JSON generated from Code Sandbox:
 * https://codesandbox.io/s/github/0xproject/0x-codesandbox

curl 'http://localhost:3000/v2/order' -H "Content-Type:application/json" -d '{
"makerAddress":"0xb78f09d705dedaca26dc99e9ee7d789be7b38fcc",
"takerAddress":"0x0000000000000000000000000000000000000000",
"makerAssetAmount":"1000000000000000000", // in wei - 1 ZRX
"takerAssetAmount":"500000000000000", // in wei - 0.0005 WETH
"expirationTimeSeconds":"1547520832904",
"makerFee":"0",
"takerFee":"0",
"feeRecipientAddress":"0x0000000000000000000000000000000000000000",
"senderAddress":"0x0000000000000000000000000000000000000000",
"salt":"72415515034324260176160843501923994603690094215705826698550996436309421190896",
"makerAssetData":"0xf47261b00000000000000000000000002002d3812f58e35f0ea1ffbf80a75a38c32175fa", // ZRX
"takerAssetData":"0xf47261b0000000000000000000000000d0a1e359811322d97991e03f863a0c30c2cf029c", // WETH
"exchangeAddress":"0x35dd2932454449b14cee11a94d3674a936d5d7b2",
"signature":"0x1bbae52ad8d535631c575ab0c06d64e7e50818160ecb87f5b85fec164cb4a889a655f78584027dd87312c16a5c42af44324e234248a25ab1e8565d89b03c84be3502"
}'

*/
