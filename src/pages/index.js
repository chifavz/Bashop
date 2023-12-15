import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
 
import Layout from "../components/layout"
import Seo from "../components/Seo"
import Checkout from "../components/checkout"

const IndexPage = () => {
  // Assuming you have a variable containing the Stripe image URL
  

  return (
    <Layout>
      <Seo title="Home page" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Hi people</h1>
      <p>Welcome to Fashion site.</p>
     
    

      {/* Displaying a static image using StaticImage */}
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <StaticImage
          alt="Shoe Image"
          src="../images/frontimage.jpg" // Replace with the correct path to your static image
        />
      </div>
      <p>Now get something great.</p>
      {/* Displaying a Stripe image using GatsbyImage */}
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <StaticImage
          alt="Shoe"
          src="../images/fleet.jpg" // Replace with the correct path to your static image
        />
         
         
      </div>
      <Checkout />

      <Link to="/Advanced/">Go to Advanced</Link>
    </Layout>
  )
}

export default IndexPage
