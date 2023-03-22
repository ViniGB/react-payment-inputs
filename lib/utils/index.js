'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var cardTypes = require('./cardTypes-b8cd6b6d.js');
var validator = require('./validator-df557964.js');
require('../chunk-a9f30d9c.js');
var formatter = require('./formatter-e7c1d60c.js');

var BACKSPACE_KEY_CODE = 'Backspace';
var ENTER_KEY_CODE = 'Enter';
var isHighlighted = function isHighlighted() {
  return (window.getSelection() || {
    type: undefined
  }).type === 'Range';
};
var utils = {
  cardTypes: cardTypes.cardTypes,
  formatter: formatter.formatter,
  validator: validator.validator,
  BACKSPACE_KEY_CODE: BACKSPACE_KEY_CODE,
  ENTER_KEY_CODE: ENTER_KEY_CODE,
  isHighlighted: isHighlighted
};

exports.BACKSPACE_KEY_CODE = BACKSPACE_KEY_CODE;
exports.ENTER_KEY_CODE = ENTER_KEY_CODE;
exports.default = utils;
exports.isHighlighted = isHighlighted;
