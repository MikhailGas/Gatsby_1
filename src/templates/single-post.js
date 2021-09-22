import { graphql } from "gatsby"
import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const SinglePost = ({data}) => {
    const { html } = data.markdownRemark
    const { title, image } = data.markdownRemark.frontmatter
    const img = getImage(image)
    return(
    <Layout>
        <Seo title={title} />
        <h1>{title}</h1>
        <div>
            <GatsbyImage image={img} alt={title}/>
        </div>
        <div dangerouslySetInnerHTML={{__html: html}} />
        
    </Layout>
)}

export default SinglePost

export const query = graphql`
    query PostQuery($url:String) {
        markdownRemark(frontmatter: {url: {eq: $url}}) {
        html
        frontmatter {
            date
            title
            url
            image {
            childImageSharp {
                gatsbyImageData(width: 1300)
            }
            }
        }
        }
        
    }
`