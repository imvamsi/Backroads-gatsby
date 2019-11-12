import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import BlogList from "../components/Blog/BlogList"
const blog = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.blogImg.childImageSharp.fluid} />
      <BlogList />
    </Layout>
  )
}

export const query = graphql`
  query {
    blogImg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default blog
