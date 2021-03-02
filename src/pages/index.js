import * as React from "react"

import Layout from '../components/Layout'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

// markup
const IndexPage = () => {

  return (
    <main>
      <Layout>
        <Header />
        <Navigation />
        <Footer />
      </Layout>
    </main>
  )
}

export default IndexPage
