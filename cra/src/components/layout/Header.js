import React from 'react'

import { NavLink } from 'react-router-dom'

const Header = () => (
  <div
    className="Header"
    style={{ display: 'flex', justifyContent: 'space-around' }}
  >
    <div>
      <NavLink to="/home">Home</NavLink>
    </div>
    <div>
      <NavLink to="/demo">Demo</NavLink>
    </div>
    <div>
      <NavLink to="/comingSoon">Coming Soon!</NavLink>
    </div>
    <div>
      <NavLink to="/not-a-real-page">Lost?</NavLink>
    </div>
  </div>
)

export default Header
