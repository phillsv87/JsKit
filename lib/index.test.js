'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('First Test', function () {
  it('should pass', function () {
    (0, _chai2.default)(true).to.equal(true);
  });
});