'use strict';

require('./index.css');

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var courseValue = (0, _numeral2.default)(1000).format('$0,0.00');
console.log('I would pay ' + courseValue + ' for this this awesome course!'); // eslint-disable-line no-console