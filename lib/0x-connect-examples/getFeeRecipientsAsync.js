// BROKEN via client, CLI works fine

const client = require('./../client.js')

// CLI:
// curl 'http://localhost:3000/v2/fee_recipients'
client.getFeeRecipientsAsync()
  .then(
    (r) => {
      console.log('Fee Receipients: ')
      console.log(r)
    },
    (e) => console.error(e)
  )
