import React from 'react';
import uuid from 'node-uuid';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fishes: {},
      order: {}
    }
  }

  addFish(fish) {
    let unique = uuid.v4();
    this.state.fishes['fish+'+ unique] = fish;
    console.log(this.state);
    this.setState({ fishes: this.state.fishes });
  }

  loadFish() {
    this.setState({fishes: require('../scripts/fish_samples.js')})
  }

  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Vegetarian Seafood Market' />
        </div>
        <Order />
        <Inventory
          addFish={this.addFish.bind(this)}
          loadFish={this.loadFish.bind(this)}
         />
      </div>
    )
  }
}
