import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
const tours = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.toursImg.childImageSharp.fluid} />
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
