import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/logo-blue.png'

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/" ><img src={ Logo } alt="" /> </Link>
        </div>
        <div className="links">
          <Link to="/?cat=art" className="link"> 
            <h5> Art </h5>
          </Link>
          <Link to="/?cat=science" className="link"> 
            <h5> Science </h5>
          </Link>
          <Link to="/?cat=technology" className="link"> 
            <h5> Technology </h5>
          </Link>
          <Link to="/?cat=cinema" className="link"> 
            <h5> Cinema </h5>
          </Link>
          <Link to="/?cat=design" className="link"> 
            <h5> Design </h5>
          </Link>
          <Link to="/?cat=food" className="link"> 
            <h5> Food </h5>
          </Link>
          <span>John</span>
          <span>Logout</span>
          <span className="write">
            <Link className="link" to="/write"> Write </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
