import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import StyledHero from "../components/StyledHero"
import styles from "../css/template.module.css"
import { FaMoneyBillWave, FaMap } from "react-icons/fa"
import Day from "../components/SingleTour/Day"
import AniLink from "gatsby-plugin-transition-link/AniLink"
const TourTemplate = ({ data }) => {
  const {
    name,
    price,
    country,
    days,
    start,
    description: { description },
    journey,
    images,
  } = data.tour
  const [mainImage, ...tourImage] = images
  console.log(mainImage)
  console.log(tourImage)
  return (
    <Layout>
      <StyledHero img={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {tourImage.map((item, index) => {
              return (
                <Img fluid={item.fluid} key={index} className={styles.image} />
              )
            })}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} />
              Starting from {price} dollars
            </p>
            <p>
              <FaMap className={styles.icon} />
              {country}
            </p>
          </div>
          <h4>{days} days</h4>
          <h4>Starts on {start} </h4>
          <p className={styles.desc}>{description}</p>
          <h2>Daily Schedule</h2>
          <div className={styles.journey}>
            {journey.map((item, index) => {
              return <Day key={index} day={item.day} info={item.info} />
            })}
          </div>
          <AniLink fade to="/tours" className="btn-primary">
            Back to tours
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTourExample(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "dddd mmmm Do, YYYY")
      description {
        description
      }
      journey {
        day
        info
      }
      images {
        fluid {
          src
        }
      }
    }
  }
`

export default TourTemplate
