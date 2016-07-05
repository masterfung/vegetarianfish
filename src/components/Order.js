import React from 'react';
import h from '../scripts/helpers';

export default class Order extends React.Component {
  renderOrder(key) {
    let fish = this.props.fishes[key];
    let count = this.props.order[key];

    if (!fish) {
      return (
        <li key={key}>
          Sorry, this veggie {`${fish}`} is gone.
        </li>
      )
    }

    return (
      <li key={key}>
        {count}lbs
        {fish.name}
        <span className='price'>{h.formatPrice(count * fish.price)}</span>
      </li>
    )
  }

  render() {

    let orderIDsArray = Object.keys(this.props.order);

    let totalAmount = orderIDsArray.reduce((prevTotal, key) => {
      let count = this.props.order[key],
          fish = this.props.fishes[key],
          isAvailable = fish && fish.status === 'available';


      if (fish && isAvailable) {
        return prevTotal + (count * parseInt(fish.price) || 0);
      }

      return prevTotal;
    }, 0);

    return (
      <div className='order-wrap'>
        <h2 className='order-title'>Basket</h2>
        <ul className='order'>
          {orderIDsArray.map(this.renderOrder.bind(this))}
          <li className='total'>
            <strong>Total:</strong>
            {h.formatPrice(totalAmount)}
          </li>
        </ul>
      </div>
    )
  }
}
