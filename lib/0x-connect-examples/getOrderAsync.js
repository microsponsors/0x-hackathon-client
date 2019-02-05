const client = require('./../client.js')

// order hash:
const h = '0xc29a9d9b797f0071b80aacf66369d866f2ddabff1a91dddbfe5fcd954158ec25'

// CLI GET:
// curl http://localhost:3000/v2/order/:orderHash
console.log(`\n-- client.getOrderAsync('${h}')`)
client.getOrderAsync(h)
  .then(
    (r) => console.log(r),
    (e) => console.error(e)
  )
