import React from 'react'

import './index.scss'
import topCurve from './top-curve.svg'
import bottomCurve from './bottom-curve.svg'

const ProductFacets = ({ facets }) => (
  <>
    {facets.map((facet, index) => {
      return (
        <div className="product-facet" key={index}>
          <div
            className="product-facet__top"
            style={{ backgroundImage: `url(${topCurve})` }}
          />
          <div
            className="product-facet__bottom"
            style={{ backgroundImage: `url(${bottomCurve})` }}
          />
          <section>
            <div className="product-facet__content">
              <h2>{facet.title}</h2>
              <p>{facet.text}</p>
            </div>
            <div className="product-facet__image">
              <img
                alt=""
                src={facet.image.publicURL}
                width="100%"
                height="auto"
              />
            </div>
          </section>
        </div>
      )
    })}
  </>
)

export default ProductFacets
