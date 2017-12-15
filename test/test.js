var should = require('should');
var Webpay = require('../');

describe('Webpay', function() {

  it('should create signature', function() {
    var signature = Webpay.createSignature({
      '*scart': '',
      wsb_version: 2,
      wsb_storeid: '213142898',
      wsb_order_num: '3',
      wsb_currency_id: 'BYN',
      wsb_seed: Date.now(),
      wsb_test: 1,
      wsb_invoice_item_name: ['test'],
      wsb_invoice_item_quantity: [1],
      wsb_invoice_item_price: [10],
      wsb_total: 10,
      wsb_notify_url: 'http://office.fyva.pro:4000/payment/wb',
    });
    console.log(signature);
  })
  
  it("should check signature. Don't have response examle right now.", function() {
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
    if (check) {
      console.log('True signature');
    } else {
      throw new Error('False signature');
    }
  })
})
