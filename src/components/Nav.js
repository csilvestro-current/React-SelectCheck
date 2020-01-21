import React, { Component } from 'react'
//React Router
import { NavLink } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav style={styles.container}>
        <NavLink to="/Multi" style={styles.navLi}>Multi</NavLink>
        <NavLink to="/Select" style={styles.navLi}>Select</NavLink>
        <NavLink to="/Checkbox" style={styles.navLi}>Checkbox</NavLink>
        <NavLink to="/Radio">Radio</NavLink>
      </nav>
    );
  }
}
export default Nav

const styles = {
  container: {
    padding: '2%'
  },
  navLi: {
    paddingRight: '2%'
  }
}