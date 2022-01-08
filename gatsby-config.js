// import { join } from 'path'
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
