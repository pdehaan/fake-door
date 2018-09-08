import React from 'react'
import { Link } from 'gatsby'

import 'index.scss'

const ProductFooter = () => (
  <footer className="product-footer">
    <h4>Legal</h4>
    <h4>Privacy</h4>
    <h4>Our Team</h4>
    <h4>
      <Link to="/">Careers</Link>
    </h4>
  </footer>
)

export default ProductFooter
