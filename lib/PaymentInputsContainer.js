'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./utils/cardTypes-b8cd6b6d.js');
require('./utils/validator-df557964.js');
require('./chunk-a9f30d9c.js');
require('./utils/formatter-e7c1d60c.js');
require('./utils/index.js');
require('react');
var usePaymentInputs = require('./usePaymentInputs.js');

function PaymentInputsContainer(props) {
  var paymentInputs = usePaymentInputs.default(props);
  return props.children(paymentInputs);
}

exports.default = PaymentInputsContainer;
