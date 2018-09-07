import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

import topCurve from './top-curve.svg'
import bottomCurve from './bottom-curve.svg'

import './product.scss'

const Product = ({ data }) => {
  const {
    name,
    icon,
    cta,
    primary,
    secondary,
  } = data.markdownRemark.frontmatter.product[0]
  const meta = {
    title: name,
    description: primary[0].text,
  }
  // TODO: Fix this
  const parent = 'lorem'
  return (
    <Layout rootClass="product" {...{ meta }}>
      <div className="product__header">
        <header>
          <nav>
            <h2>
              <span
                className="product__header-app-icon"
                style={{ background: `url(${icon.publicURL})` }}
              />
              {name}
            </h2>
            <ul>
              <li>Learn More</li>
              <li>Our Story</li>
              <li>Download Now</li>
            </ul>
          </nav>
          <div className="product__header-content">
            <h1>{primary[0].title}</h1>
            <p>{primary[0].text}</p>
            <button>{cta}</button>
          </div>
          <div className="product__header-image">
            <img
              src={primary[0].image.publicURL}
              alt=""
              width="100%"
              height="auto"
            />
          </div>
        </header>
      </div>
      {secondary.map((value, index) => (
        <div className="product__section" key={index}>
          <div
            className="product__section-top"
            style={{ backgroundImage: `url(${topCurve})` }}
          />
          <div
            className="product__section-bottom"
            style={{ backgroundImage: `url(${bottomCurve})` }}
          />
          <section key={index}>
            <div className="product__section-content">
              <h2>{value.title}</h2>
              <p>{value.text}</p>
            </div>
            <div className="product__section-image">
              <img
                alt=""
                src={value.image.publicURL}
                width="100%"
                height="auto"
              />
            </div>
          </section>
        </div>
      ))}
      <footer className="product__footer">
        <h4>Legal</h4>
        <h4>Privacy</h4>
        <h4>Our Team</h4>
        <h4>
          <Link to={parent}>Careers</Link>
        </h4>
      </footer>
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
          cta
          icon {
            publicURL
          }
          primary {
            title
            text
            image {
              publicURL
            }
          }
          secondary {
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
