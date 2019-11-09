import React from "react"
import styles from "../css/error.module.css"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import Banner from "../components/Banner"
export default function error() {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="It seems You are lost! Lets take you home">
          <Link to="/" className="btn-white">
            Back to Home
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}
