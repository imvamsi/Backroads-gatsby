import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
export default function contact({ data }) {
  return (
    <Layout>
      <StyledHero img={data.contactImg.childImageSharp.fluid} />
    </Layout>
  )
}
export const query = graphql`
  query {
    contactImg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
