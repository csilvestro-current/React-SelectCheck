import React, { Component } from 'react';
import Nav from '../components/Nav';

class Checkbox extends Component {
  state = {
    name: '',
    color: '',
    size: '',
    acceptedAgreement: false
  };

  componentDidMount() {
  //   const acceptedAgreement = localStorage.getItem('acceptedAgreement') === 'true';
  //   const name = acceptedAgreement ? localStorage.getItem('name') : '';
  //   this.setState({ name, acceptedAgreement });
  }

  onChange = e => {
    const input = e.target;
    const name = input.name;
    const value = input.type === 'checkbox' ? input.checked : input.value;
    this.setState({ [name]: value });
  }

  addShirt = e => {
    console.log(this.state.acceptedAgreement)
    e.preventDefault();
    // const { name, size, color, acceptedAgreement } = this.state;
    // localStorage.setItem('size', size);
    // localStorage.setItem('color', color);
    // localStorage.setItem('acceptedAgreement', acceptedAgreement);
    // localStorage.setItem('name', acceptedAgreement ? name : '');
  };

  render() {
    const colors = ['Blue', 'Red', 'Green', 'Yellow'];
    const sizes = ['Small', 'Medium', 'Large', 'XL', 'XXL', '3XL'];

    let msg;
    if (this.state.acceptedAgreement) {
      msg = "Checked";
    } else {
      msg = "Un-checked";
    }

    return (
      <section className="">
        <Nav />
        <h1>Checkbox</h1>
        <form onSubmit={this.addShirt}>
          <ul>
            <li>
              <label>Name:</label>
              <input name="name" type="text" value={this.state.name} onChange={this.onChange} />
            </li>
            <li>
              <label>Desired color:</label>
              <select name="color" value={this.state.color} onChange={this.onChange}>
                {colors.map((color, i) => <option key={i} value={color.toLowerCase()}>{color}</option>)}
              </select>
            </li>
            <li>
              <label>T-shirt Size:</label>
              {sizes.map((size, i) =>
                <label key={i}>
                  <input
                    name="size"
                    value={size.toUpperCase()}
                    checked={this.state.size === size.toUpperCase()}
                    onChange={this.onChange}
                    type="radio" />
                    {size}
                </label>
                  )}
                </li>
                <li>
                  <label>
                    I accept the agreement
                    <input name="acceptedAgreement" type="checkbox" value={this.state.acceptAgreement} onChange={this.onChange} />
                  </label>
                </li>
              </ul>
              <button type="submit">Submit</button>
        </form>

        <div key={this.state.id} className="">
          <h1>Name:{this.state.name}</h1>
          <h2>Number:{this.state.number}</h2>
          <h3>Color:{this.state.color}</h3>
          <h3>Size:{this.state.size}</h3>
          <p>Accepted: {msg}</p>
        </div>
      </section>
    );
  }
}

export default Checkbox;
