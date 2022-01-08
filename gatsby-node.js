require('source-map-support').install()
require('ts-node').register({
    compilerOptions: {
        module: 'commonjs',
        target: 'es2017'
    }
})
// const createFilePath = require(`gatsby-source-filesystem`).createFilePath
// exports.onCreateNode = ({ node, getNode, actions }) => {
//     const { createNodeField } = actions
//     if (node.internal.type === `MarkdownRemark`) {
//         const slug = createFilePath({ node, getNode, basePath: `pages` })
//         createNodeField({
//             node,
//             name: `slug`,
//             value: slug
//         })
//     }
// }

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    const blogPostTemplate = require.resolve(`./src/templates/PageTemplate`)

    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
        }
    `).then((result) => {
        if (result.errors) {
            return Promise.reject(result.errors)
        }

        return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.slug,
                component: blogPostTemplate,
                context: {
                    // additional data can be passed via context
                    slug: node.frontmatter.slug
                }
            })
        })
    })
}
