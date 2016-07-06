import React from 'react';

import AddNewFish from './AddNewFish';

export default class Inventory extends React.Component {
  renderInventory(key) {
    let linkState = this.props.linkState;
    let fishes = this.props.fishes;
    console.log(key);
    console.log(fishes);
    console.log(fishes[key].name);
    return(
      <div className='fish-edit' key={key}>
        <input type="text" valueLink={linkState(fishes[key].name)} />
      </div>
    )
  }

  render() {
    return (
      <div>
        <h2>Inventory</h2>
        <AddNewFish {...this.props} />
        {Object.keys(this.props.fishes).map(this.renderInventory.bind(this))}
        <button onClick={this.props.loadFish}>Load Fishes</button>
      </div>
    )
  }
}
