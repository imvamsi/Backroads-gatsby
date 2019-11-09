import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Service from "../components/Home/Services"

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="Continue Exploring"
        info="lorem re obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical 
        literature, discovered the"
      >
        <Link to="/tours" className="btn-white">
          Explore More
        </Link>
      </Banner>
    </SimpleHero>
    <About />
    <Service />
  </Layout>
)
