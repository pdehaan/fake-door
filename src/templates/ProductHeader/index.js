import React from 'react'

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
        <li>Learn More</li>
        <li>Our Story</li>
        <li>Download Now</li>
      </ul>
    </div>
  </div>
)

export default ProductHeader
