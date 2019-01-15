const Connect = require('@0x/connect')
const client = new Connect.HttpClient('http://localhost:3000/v2')
module.exports = client
