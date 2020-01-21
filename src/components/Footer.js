import React, { Component } from 'react'
//React Router
import { NavLink } from 'react-router-dom'

import FaHome from 'react-icons/lib/ti/home-outline'
import AddLoc from 'react-icons/lib/md/add-location'
import MyFerry from 'react-icons/lib/md/directions-ferry'
import Map from 'react-icons/lib/md/map'
//import FaBeer from 'react-icons/lib/fa/beer'

class Footer extends Component {
  render() {
    return (
      <footer className="content footer">
        <NavLink to="/Pg1"><FaHome /></NavLink>
        <NavLink to="/Pg2"><AddLoc /></NavLink>
        <NavLink to="/Pg3"><MyFerry /></NavLink>
        <NavLink to="/Pg3"><Map /></NavLink>
      </footer>
    )
  }
}

export default Footer
