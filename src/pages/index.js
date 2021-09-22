import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const { nodes } = data.allMarkdownRemark
  return(
    <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>
      
      <div className="posts">
        {nodes.map(post => {
          const {category, title, url, image} = post.frontmatter
          const img = getImage(image)
          return (
            <div className="post" key={post.id}>
              <GatsbyImage image={img} alt={title}/>
              <Link to={`/${url}`} >{title}</Link>
            </div>
          )
        })
        }
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query PostList {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date
          title
          url
          category
          image {
            childImageSharp {
              gatsbyImageData(width: 300, placeholder: BLURRED, formats: AUTO)
            }
          }
        }
        id
      }
    }
  }
`
