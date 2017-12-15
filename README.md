# node-webpayby
Node module for Webpay signature.

```javascript
var Webpay = require('node-webpayby');
```
## Functions
### Create signature.
Return string.
```javascript
var signature = Webpay.createSignature({
  '*scart': '',
  wsb_version: 2,
  wsb_storeid: 'store_id',
  wsb_order_num: '3',
  wsb_currency_id: 'BYN',
  wsb_seed: Date.now(),
  wsb_test: 1,
  wsb_invoice_item_name: ['test'],
  wsb_invoice_item_quantity: [1],
  wsb_invoice_item_price: [10],
  wsb_total: 10,
  wsb_notify_url: 'http://notify.url.by/',
});
```
### Check signature.
Return boolean.
```javascript
var check = Webpay.checkSignature({
  batch_timestamp, 
  currency_id, 
  amount,
  payment_method, 
  order_id,
  site_order_id,
  transaction_id, 
  payment_type, 
  rrn,
  wsb_signature, 
});
```
## Test
```javascript
npm run test
```
## License
MIT