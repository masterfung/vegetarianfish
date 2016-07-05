import React from 'react';
import { browserHistory } from 'react-router';
import h from '../scripts/helpers';

export default class StorePicker extends React.Component {

  goToStoreName(event) {
    console.log(this.props);
    event.preventDefault();
    const storeID = this.refs.storeID.value;

    browserHistory.push('/store/' + storeID);
  }

  render() {
    return (
      <form className='store-selector' onSubmit={this.goToStoreName.bind(this)}>
        <h2 className='store-greeter'>Type A Store Name</h2>
        <input type='text' ref='storeID' defaultValue={h.getFunName()} required />
        <input type='submit'
         className='btn'
         value='Submit' />
      </form>
    );
  }
}
