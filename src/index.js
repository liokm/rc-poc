import React from 'react'
import R from 'ramda';

export const name = 'foobar';

export default React.createClass({
  render() {
    R.add(2, 3);
    return <div>
      <h2>Welcome to React components!</h2>
    </div>
  }
})
