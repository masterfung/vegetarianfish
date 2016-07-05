import React from 'react';
import uuid from 'node-uuid';
import Rebase from 're-base';
import Catalyst from 'react-catalyst';
import reactMixin from 'react-mixin';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import FishItem from './FishItem';

let base = Rebase.createClass('https://veggie-fish.firebaseio.com/');

base.authWith

class App extends React.Component {
  static propTypes = {

  }

  constructor(props) {
    super(props)
    this.state = {
      fishes: {},
      order: {}
    }
  }

  componentDidMount() {
    base.syncState(this.props.params.storeId + '/fishes', {
      context: this,
      state: 'fishes'
    });

    let localStorageRef = localStorage.getItem('order-'+this.props.params.storeId);

    if (localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef)
      })
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('order-'+ this.props.params.storeId, JSON.stringify(nextState.order))
  }

  addFish(fish) {
    let unique = uuid.v4();
    this.state.fishes['fish+'+ unique] = fish;
    console.log(this.state);
    this.setState({ fishes: this.state.fishes });
  }

  addToOrder(key) {
    this.state.order[key] = this.state.order[key] + 1 || 1;
    this.setState({order: this.state.order});
  }

  loadFish() {
    this.setState({fishes: require('../scripts/fish_samples.js')})
  }

  renderFish(key) {
    return <FishItem
             key={key}
             index={key}
             details={this.state.fishes[key]}
             addToOrder={this.addToOrder.bind(this)}
              />
  }

  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Vegetarian Seafood Market' />
          <ul className='list-of-fishes'>
            {Object.keys(this.state.fishes).map(this.renderFish.bind(this))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish.bind(this)}
          loadFish={this.loadFish.bind(this)}
         />
      </div>
    )
  }
}

reactMixin.onClass(App, Catalyst.LinkedStateMixin);


export default App;
