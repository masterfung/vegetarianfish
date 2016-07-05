import React from 'react';

import AddNewFish from './AddNewFish';

export default class Inventory extends React.Component {
  render() {
    return (
      <div>
        <h2>Inventory</h2>
        <AddNewFish {...this.props} />

        <button onClick={this.props.loadFish}>Load Fishes</button>
      </div>
    )
  }
}
