import React from 'react'
import { Link } from 'gatsby'
import './index.scss'

const ProductHeader = ({ name, icon }) => (
  <div className="product-header">
    <div className="product-header__container">
      <h2>
        <span
          className="product-header__app-icon"
          style={{ background: `url(${icon.publicURL})` }}
        />
        {name}
      </h2>
      <ul>
        <li><Link to="/">Learn More</Link></li>
        <li><Link to="/">Our Story</Link></li>
        <li><Link to="/">Download Now</Link></li>
      </ul>
    </div>
  </div>
)

export default ProductHeader
