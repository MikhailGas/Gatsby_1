
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
        query Posts {
            allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
                nodes {
                  frontmatter {
                    category
                    url
                  }
                }
            }
        }
    `)
    data.allMarkdownRemark.nodes.forEach(node => {
        const { url, category } = node.frontmatter
        actions.createPage({
            path: `/${url}`,
            component: path.resolve('./src/templates/single-post.js'),
            context: { url: url},
        })
    })
}
