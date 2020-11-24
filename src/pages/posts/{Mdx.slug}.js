import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogPostPage = ({data}) => {
  const post = data.mdx
  const imageData = getImage(post.frontmatter.image)
  return (
    <Layout>
      <article>
        <GatsbyImage image={imageData} layout="FLUID" role="presentation"/>
        <h2>{post.frontmatter.title}</h2>
        <MDXRenderer>{post.body}</MDXRenderer>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostById($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`

export default BlogPostPage