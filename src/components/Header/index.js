import React from 'react'
import { Link } from 'gatsby'

import './index.scss'

const Header = ({ title, description, parent = null }) => (
  <header className="header">
    <h1>
      <Link to="/">{title}</Link>
    </h1>
    <p>{description}</p>
    {parent && (
      <div className="breadcrumb">
        <h2>
          <Link to="/">
            <div className="home" />
          </Link>
          <span>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;</span> {parent}
        </h2>
      </div>
    )}
  </header>
)

export default Header
