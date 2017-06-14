'use strict';

exports.__esModule = true;
exports.name = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = 'foobar';

exports.default = _react2.default.createClass({
  displayName: 'src',
  render: function render() {
    _ramda2.default.add(2, 3);
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Welcome to React components!'
      )
    );
  }
});