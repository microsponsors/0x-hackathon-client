'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const Connect = require('@0x/connect');
const client = new Connect.HttpClient('http://localhost:3000/v2');

client.getFeeRecipientsAsync()
  .then(
    (r) => console.log(r),
    (e) => console.log(e)
  )

