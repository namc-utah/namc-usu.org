import React from 'react'
import { graphql } from 'gatsby'
import { html2material } from '../lib/rehype'
import { Helmet } from 'react-helmet'
import Page from '../components/Page'
import Home from '../components/Home'
import { PublicMapWrapped } from '@namcbugdb/react-public-map'
import PageWrapper from '../components/PageWrapper'

import 'mapbox-gl/dist/mapbox-gl.css'

// THIS FIX IS NECESSARY FOR PRODUCTION AND WEBPACK!!!!
// https://docs.mapbox.com/mapbox-gl-js/api/#transpiling-v2
// https://github.com/mapbox/mapbox-gl-js/issues/10173
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'
// eslint-disable-next-line @typescript-eslint/no-var-requires
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default

export interface TemplateProps {
    data: {
        site: {
            siteMetadata: Record<string, string>
        }
        page: {
            fields: {
                slug: string
            }
            html: string
            frontmatter: {
                title: string
            }
        }
    }
}

const Template: React.FC<TemplateProps> = ({
    data // this prop will be injected by the GraphQL query below.
}: TemplateProps) => {
    const { page, site } = data // data.markdownRemark holds your post data
    const { fields, html, frontmatter } = page
    const { siteMetadata } = site
    /**
     * NOTICE THIS!!!!!
     * Here's where the raw HTML gets mapped to react components
     */
    const content = html2material(html)
    const pageTitle = frontmatter.title ? `${site.siteMetadata.title}: ${frontmatter.title}` : site.siteMetadata.title

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            {/* {fields.slug === '/index' ? <Home>{content}</Home> : <Page title={pageTitle}>{content}</Page>} */}
            <PageWrapper fullHeight>
                <div style={{ flex: 1, margin: '1rem' }}>
                    <PublicMapWrapped
                        apiUrl={process.env.GATSBY_PUBLICMAP_API as string}
                        mapboxToken={process.env.GATSBY_MAPBOX_TOKEN as string}
                    />
                </div>
            </PageWrapper>
        </>
    )
}

export const pageQuery = graphql`
    query ($slug: String!) {
        site: site {
            siteMetadata {
                siteUrl
                title
            }
        }
        page: markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
    }
`

export default Template
