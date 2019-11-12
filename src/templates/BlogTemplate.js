import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../css/single-blog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const BlogTemplate = ({ data }) => {
  const {
    title,
    published,
    text: { json },
  } = data.post

  //   const options = {
  //     renderNode: {
  //       "embedded-asset-block": node => {
  //         console.log(node)
  //         return (
  //         <h3>this is an awesome image</h3>
  //         <img width="400" src={node.data.target.fields.file['en-US'].url}/>
  //         );
  //       },
  //     },
  //   }
  return (
    <Layout>
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>Published on {published}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json)}
          </article>
          <AniLink fade to="/blog" className="btn-primary">
            Back to blogs
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do, YYYY")
      text {
        json
      }
    }
  }
`

export default BlogTemplate
