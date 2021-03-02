import React from 'react'

import GlobalStyle from '../../styles/Globals'
import SEO from '../SEO'

const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyle />
      <SEO />
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout