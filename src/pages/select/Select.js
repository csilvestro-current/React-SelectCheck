import React, { Component } from 'react';
import Nav from '../../components/Nav';
import SelectList from './SelectList';
import SelectForm from '../../components/forms/SelectForm';

class Select extends Component {
  state = {
    lists: [{
      flavor: 'Select your flavor',
      num: 'Select your number',
      color: 'Select your color'
    }]
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  addSelects = e => {
    //alert('Your favorite flavor is: ' + this.state.color);
    e.preventDefault()
    this.setState({
      lists: [...this.state.lists, {flavor:this.state.flavor,num:this.state.num, color: this.state.color}]
    });
    //Clear Form
    e.target.reset()
  }

  render() {
    let selectList = this.state.lists.map((element, i) => {
      //Pass through the value and key from the props comp.
      return <SelectList 
                key={i} 
                val={element}  
              />
    })

    return (
      <section className="">
        <Nav />
        <h1>Select</h1>
        <form onSubmit={this.addSelects}>
          <label>
            Pick your favorite flavor:
            <select name="flavor" value={this.state.flavor} onChange={this.onChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
    
          <label htmlFor="Numbers">Numbers
          <select name="num" value={this.state.num} onChange={this.onChange}>
            <option value="select">Select an Option</option>
            <option value="First">First</option>
            <option value="Second">Second</option>
            <option value="Third">Third</option>
          </select>
          </label>

          <label>Desired color:</label>
          <select name="color" value={this.state.color} onChange={this.onChange}>
            <option></option>
            <option name="blue" value="blue">Blue</option>
            <option name="red" value="red">Red</option>
            <option name="green" value="green">Green</option>
            <option name="yellow" value="yellow">Yellow</option>
          </select>
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.flavor}</p>
        <p>{this.state.num}</p>
        <p>{this.state.color}</p>
        {selectList}
        <hr />
        <h1>Form Component</h1>
        <SelectForm title={this.state.value}/>
      </section>
    );
  }
}

export default Select