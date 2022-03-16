/**
 * A note about typescript:
 * It is technically possible to convert this to typescript but the debugging becomes much more complicated
 * so a decision was made not to pursue this.
 */
// THIS FIX IS NECESSARY FOR PRODUCTION AND WEBPACK!!!!
// https://docs.mapbox.com/mapbox-gl-js/api/#transpiling-v2
// https://github.com/mapbox/mapbox-gl-js/issues/10173
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const mapboxgl = require('mapbox-gl/dist/mapbox-gl')

// // eslint-disable-next-line @typescript-eslint/no-var-requires
// mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    const pageTemplate = require.resolve(`./src/templates/PageTemplate`)

    return graphql(`
        {
            pages: allMarkdownRemark {
                nodes {
                    fields {
                        slug
                    }
                }
            }
        }
    `).then((result) => {
        if (result.errors) {
            return Promise.reject(result.errors)
        }
        const pages = result.data.pages.nodes
        pages.forEach((page) => {
            const slug = page.fields.slug
            const deIndexedSlug = slug.replace(/(.*)index/, '$1')
            createPage({
                path: deIndexedSlug,
                component: pageTemplate,
                context: {
                    deIndexedSlug,
                    slug
                }
            })
        })
    })
}
