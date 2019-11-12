import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Service from "../components/Home/Services"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import FeaturedTours from "../components/Home/FeaturedTours"
//console.log(props)
//within the page queries we have access to the data
export default ({ data }) => (
  <Layout>
    <StyledHero home="true" img={data.heroImg.childImageSharp.fluid}>
      <Banner
        title="Continue Exploring"
        info="lorem re obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical 
        literature, discovered the"
      >
        <Link to="/tours" className="btn-white">
          Explore More
        </Link>
      </Banner>
    </StyledHero>
    <About />
    <Service />
    <FeaturedTours />
  </Layout>
)

export const query = graphql`
  query {
    heroImg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
