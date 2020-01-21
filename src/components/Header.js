import React, { Component } from 'react'
import Nav from './Nav'


class Header extends Component {
  render() {
    return (
      <header className="header">
       	<h3 className="tagline">Title</h3>
         
        <Nav />
      </header>
    );
  }
}

export default Header
