const client = require('./../client.js')

// order hash:
// const h = '0xc29a9d9b797f0071b80aacf66369d866f2ddabff1a91dddbfe5fcd954158ec25'
// const h = '0x76dbd5eeb237aef3d4766afb0968a238bb49ff846da122bcab2564521dfc2145'
const h = '0xc2d8f14b392b53c8bf44e96be4af25f2e0caf12def9af94a534632ddd9e842e4';

// CLI GET:
// curl http://localhost:3000/v2/order/:orderHash
console.log(`\n-- client.getOrderAsync('${h}')`)
client.getOrderAsync(h)
  .then(
    (r) => console.log(r),
    (e) => console.error(e)
  )
