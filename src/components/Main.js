require('normalize.css/normalize.css');
require('styles/App.styl');

import React from 'react';

class StorePicker extends React.Component {
  render() {
    return (
      <form className='store-selector'>
        <h2>Type A Store Name</h2>
        <input type='text' ref='storeId' required />
        <input type='submit' className='btn' value='Submit' />
      </form>
    );
  }
}

StorePicker.defaultProps = {
};

export default StorePicker;
