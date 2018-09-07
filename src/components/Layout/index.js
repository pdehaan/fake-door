import React from 'react'
import Helmet from 'react-helmet'

import 'index.scss'

const Layout = ({ meta, rootClass, children }) => {
  // TODO: destructuring without the || '' breaks npm run deploy. Not sure why
  const { title, description } = meta || ''
  return (
    <>
      <Helmet
        title={title}
        meta={[{ name: 'description', content: description }]}
      >
        <html lang="en" />
      </Helmet>
      <div className={`layout layout--${rootClass} ${rootClass}`}>
        {children}
      </div>
    </>
  )
}

export default Layout
