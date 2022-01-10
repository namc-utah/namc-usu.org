// import { join } from 'path'
require('source-map-support').install()
require('ts-node').register({
    compilerOptions: {
        module: 'commonjs',
        target: 'es2017'
    }
})

module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.yourdomain.tld',
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
