import React from 'react'
import { Link } from 'gatsby'

import 'index.scss'

const ProductFooter = () => (
  <footer className="product-footer">
    <h4>
    	<Link to="/">Legal</Link>
    </h4>
    <h4>
    	<Link to="/">Privacy</Link>
    </h4>
    <h4>
    	<Link to="/">Our Team</Link>
    </h4>
    <h4>
      <Link to="/">Careers</Link>
    </h4>
  </footer>
)

export default ProductFooter
