import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Tours from "../components/Tours/Tours"
import SEO from "../components/SEO"

const tours = ({ data }) => {
  return (
    <Layout>
      <SEO title="Tours" />
      <StyledHero img={data.toursImg.childImageSharp.fluid} />
      <Tours />
    </Layout>
  )
}

export const query = graphql`
  query {
    toursImg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default tours
