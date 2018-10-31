import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Products from '../components/Products'

const IndexPage = ({ data }) => {
  const edges = data.allMarkdownRemark.edges.filter(edge => edge.node.fields.slug !== '/project-template/'
  );
  console.log(edges);
  const { title, description } = data.site.siteMetadata
  return (
    <Layout meta={data.site.siteMetadata} rootClass="index" title={title}>
      <Header {...{ title, description }} />
      <Products {...{ edges }} />
      <Footer>
        <a href={data.site.siteMetadata.repo}>View Source</a>
      </Footer>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        repo
      }
    }
    allMarkdownRemark(
      filter: { fields: { type: { eq: "ProductGroup" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
