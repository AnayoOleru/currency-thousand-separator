"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.thousandsSeparators = void 0;

var thousandsSeparators = function thousandsSeparators(num) {
  var numParts = num.toString().split('.');
  numParts[0] = numParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return numParts.join('.');
};

exports.thousandsSeparators = thousandsSeparators;