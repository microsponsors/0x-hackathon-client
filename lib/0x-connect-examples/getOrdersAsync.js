const client = require('./../client.js')

// CLI:
// curl 'http://localhost:3000/v2/orders'
client.getOrdersAsync()
  .then(
    (r) => {
      console.log('\n\nCurrent Orders: ')
      console.log(r)
      if (r.records) {
        r.records.forEach((record) => {
          console.log('Order:')
          console.log(record)
        })
      }
    },
    (e) => console.error(e)
  )
