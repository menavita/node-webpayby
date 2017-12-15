'use strict';

var crypto = require('crypto');
var request = require('request');
var Q = require('q');

exports.createSignature = function(params) {

  var united = params.wsb_seed 
    + params.wsb_storeid 
    + params.wsb_order_num 
    + params.wsb_test 
    + params.wsb_currency_id 
    + params.wsb_total 
    + this.key;

  switch (parseInt(params.wsb_version)) {
    case 1:
      console.log('md5');
      return crypto.createHash('md5').update(united).digest('hex');
    break;
    case 2:
      console.log('sha1');
      return crypto.createHash('sha1').update(united).digest('hex');
    break;
    default:
      return '';
  }

}

exports.checkSignature = function(params) {

  if (!params.wsb_signature) return false;

  var united = params.batch_timestamp 
    + params.currency_id 
    + params.amount 
    + params.payment_method 
    + params.order_id 
    + params.site_order_id 
    + params.transaction_id 
    + params.payment_type 
    + params.rrn 
    + this.key;

  if (params.wsb_signature == crypto.createHash('md5').update(united).digest('hex')) {
    return true;
  } else {
    return false;
  }

}
