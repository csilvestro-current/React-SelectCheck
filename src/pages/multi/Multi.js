import React, { Component } from 'react';
import Nav from '../../components/Nav';
import MultiList from './MultiList';

class Multi extends Component {
  state = { 
    user: [{
      firstName: '',
      lastName: ''
    }]
  };

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  addName = (e) => {
    e.preventDefault()
    this.setState({
      user: [...this.state.user, {
        firstName:this.state.firstName,
        lastName:this.state.lastName
      }]
    });
    //Clear Form
    e.target.reset()
  }

  render() {
    let multiList = this.state.user.map((element, i) => {
      //Pass through the value and key from the props comp.
      return <MultiList 
                key={i} 
                val={element}  
              />
    })
    return (
      <section className="">
        <Nav />
        <h1>Multi</h1>
        <form onSubmit={this.addName}>
          <label>First Name:
          <textarea 
            name="firstName"
            value={this.state.firstName} 
            onChange={this.onChange} 
          />
          </label>
          <label>Last Name:
          <textarea 
            name="lastName"
            value={this.state.lastName} 
            onChange={this.onChange} 
          />
          </label>
          <button type="submit">Submit</button>
        </form>
        {multiList}
      </section>
    );
  }
}

export default Multi;
