import React from 'react'
import { Link } from 'gatsby'

import 'index.scss'

const Products = ({ edges }) =>
  <main className="products">
    {edges.map((edge, index) => (
      <Link to={edge.node.fields.slug} key={index} className="products__card">
        <h3>{edge.node.frontmatter.title}</h3>
        <p>{edge.node.frontmatter.description}</p>
      </Link>
    ))}
  </main>

export default Products
