import React from 'react';
import { browserHistory, Navigation } from 'react-router';
import h from '../scripts/helpers';
import reactMixin from 'react-mixin';

export default class StorePicker extends React.Component {

  goToStoreName(event) {
    console.log(this.props);
    event.preventDefault();
    const storeID = this.refs.storeID.value;

    browserHistory.push(`/store/${storeID}`);
  }

  render() {
    return (
      <form className='store-selector' onSubmit={this.goToStoreName.bind(this)}>
        <h2 className='store-greeter'>Type A Store Name</h2>
        <p className='welcome-text'>Welcome to the freshest Veggie Fish Market <br />
           where you will find all your fishy desires fulfilled at an affordable price.</p>
        <label id='store-label'>Store Name</label>
        <input type='text' ref='storeID' defaultValue={h.getFunName()} required />
        <input type='submit'
         className='btn'
         value='Submit' />
      </form>
    );
  }
}
