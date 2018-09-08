import React from 'react'
import Helmet from 'react-helmet'

import 'index.scss'
import ffIcon from './../../images/firefox-logo.png'

const Layout = ({
  title,
  description,
  rootClass,
  favicon = null,
  children }) => {
  const pageFavicon = favicon ? favicon : ffIcon
  return (
  <> {/*eslint-disable-line*/}
      <Helmet
        title={title}
        meta={[{ name: 'description', content: description }]}
      >
        <link rel="shortcut icon" href={pageFavicon}/>
        <html lang="en" />
      </Helmet>
      <div className={`layout layout--${rootClass} ${rootClass}`}>
        {children}
      </div>
    </>
  )
}

export default Layout
