import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/seo"

const HomePage = ({ data }) => {
  const posts = data.allMdx.nodes
  return (
    <Layout>
      <SEO title="Home Page" />
      <StaticImage
        src="../images/sunset.jpg"
        alt="Man cheering in front of a sunset."
        layout="fluid"
      />
      {posts.map((post) => {
        return (
          <Link to={`posts/${post.slug}`} key={post.slug}>
            <h2>{post.frontmatter.title}</h2>
          </Link>
        )
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___title], order: ASC }) {
      nodes {
        slug
        frontmatter {
          title
        }
      }
    }
  }
`

export default HomePage