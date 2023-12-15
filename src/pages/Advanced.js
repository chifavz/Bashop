import React from "react"

import Layout from "../components/layout"
import Seo from "../components/Seo"

import Products from "../components/Products/Products"

const AdvancedExamplePage = () => (
  <Layout>
    <Seo title="Advanced" />
    <h1>This is the advanced example</h1>
    <Products />
  </Layout>
)

export default AdvancedExamplePage