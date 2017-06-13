import React from 'react';

export var name = 'foobar';

export default React.createClass({
  displayName: 'src',
  render: function render() {
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