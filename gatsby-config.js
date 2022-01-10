// import { join } from 'path'
require('source-map-support').install()
require('ts-node').register({
    compilerOptions: {
        module: 'commonjs',
        target: 'es2017'
    }
})

module.exports = {
    // Path prefix is needed when this lives as a subdir on the domain
    // For GHPages this is usually the name of the repo preceded by '/'
    pathPrefix: '/namc-website-gatsby',
    siteMetadata: {
        siteUrl: 'https://namc-utah.github.io/namc-website-gatsby',
        title: 'NAMC Website'
    },
    plugins: [
        'gatsby-plugin-slug',
        'gatsby-transformer-remark',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/content`
            }
        }
    ]
}
