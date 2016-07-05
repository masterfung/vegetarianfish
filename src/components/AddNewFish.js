import React from 'react';

export default class AddNewFish extends React.Component {
  createFish(event) {
    event.preventDefault();

    console.log(this.refs);

    let fish = {
      name: this.refs.name.value,
      price: this.refs.price.value,
      status: this.refs.status.value,
      description: this.refs.description.value,
      image: this.refs.image.value
    }

    this.props.addFish(fish);

    // resets the form after new fish submission
    this.refs.fishForm.reset();
  }
  render() {
    return (
      <form className="fish-edit" ref="fishForm" onSubmit={this.createFish.bind(this)}>
        <input type="text" ref="name" placeholder="Fish Name"/>
        <input type="text" ref="price" placeholder="Fish Price" />
        <select ref="status">
          <option value="available">Available</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea type="text" ref="description" placeholder="Description"></textarea>
        <input type="text" ref="image" placeholder="URL to Obtain Image" />
        <button type="submit">+ Add Item </button>
      </form>
    )
  }
}
