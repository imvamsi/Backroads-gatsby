import React from "react"
import Tour from "../Tours/Tour"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../../css/items.module.css"
import { Link } from "gatsby"

const getTours = graphql`
  query {
    FeaturedTours: allContentfulTourExample {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const FeaturedTours = () => {
  const response = useStaticQuery(getTours)
  const tours = response.FeaturedTours.edges
  console.log(tours)
  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="tours" />
      <div className={styles.center}>
        {tours.map(({ node }) => {
          return <Tour key={node.contentful_id} tour={node} />
        })}
      </div>

      <Link to="/tours" className="btn-primary">
        All Tours
      </Link>
    </section>
  )
}

export default FeaturedTours
