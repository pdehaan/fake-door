import { graphql } from 'gatsby'
import React from 'react'

import Layout from './../../components/Layout'
import ProductFacets from './../ProductFacets'
import ProductFooter from './../ProductFooter'
import ProductHeader from './../ProductHeader'
import ProductHero from './../ProductHero'

import './index.scss'

const Product = ({ data }) => {
  const {
    name,
    icon,
    hero,
    facets,
  } = data.markdownRemark.frontmatter.product[0]
  return (
    <Layout
      rootClass="product"
      title={name}
      description={hero[0].title}
      favicon={icon.publicURL}
    >
      <ProductHeader {...{ name, icon }} />
      <ProductHero {...{ hero }} />
      <ProductFacets {...{ facets }} />
      <ProductFooter />
    </Layout>
  )
}

export default Product

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        product {
          name
          icon {
            publicURL
          }
          hero {
            title
            text
            cta
            image {
              publicURL
            }
          }
          facets {
            title
            text
            image {
              publicURL
            }
          }
        }
      }
    }
  }
`
