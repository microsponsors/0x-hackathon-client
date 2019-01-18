const client = require('./../client.js')

const h = '0xc29a9d9b797f0071b80aacf66369d866f2ddabff1a91dddbfe5fcd954158ec25'
// const h = '0xd23e3670398479e50e6620c50bd6c4bf557750950edd0a65bf3b19df2a183cf9'

// CLI GET:
// curl http://localhost:3000/v2/order/:orderHash

console.log(`\n-- client.getOrderAsync('${h}')`)
client.getOrderAsync(h)
  .then(
    (r) => console.log(r),
    (e) => console.error(e)
  )
