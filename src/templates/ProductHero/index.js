import React from 'react'

import './index.scss'

const ProductHero = ({ hero }) => {
  const { title, text, image, cta } = hero[0]
  return (
    <div className="product-hero">
      <header>
        <div className="product-hero__content">
          <h1>{title}</h1>
          <p>{text}</p>
          <button>{cta}</button>
        </div>
        <div className="product-hero__image">
          <img src={image.publicURL} alt={text} width="100%" height="auto" />
        </div>
      </header>
    </div>
  )
}

export default ProductHero
