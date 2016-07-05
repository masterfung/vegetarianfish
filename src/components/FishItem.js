import React from 'react';
import h from '../scripts/helpers';

export default class FishItem extends React.Component {
  onBtnClick() {
    this.props.addToOrder(this.props.index);
  }

  render() {
    let details = this.props.details;
    let isAvailable = details.status === 'available' ? true : false;
    let dynamicBtn = (isAvailable ? 'Add To Cart' : 'Sold Out!')
    return (
      <li className='menu-fish' key={this.props.index}>
        <img src={details.image} alt={details.name}/>
        <h3 className='fish-name'>
          {details.name}
          <span className='price'>{h.formatPrice(details.price)}/LB</span>
        </h3>
        <p className='desc'>{details.description}</p>
        <button disabled={!isAvailable} onClick={this.onBtnClick.bind(this)}>{dynamicBtn}</button>
      </li>
    )
  }
}
