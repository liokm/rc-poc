import React from 'react';
import R from 'ramda';

export var name = 'foobar';

export default React.createClass({
  displayName: 'src',
  render: function render() {
    R.add(2, 3);
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h2',
        null,
        'Welcome to React components!'
      )
    );
  }
});