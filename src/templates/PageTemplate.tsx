import React from 'react'
import { graphql } from 'gatsby'
import { html2material } from '../lib/rehype'
import Page from '../components/Page'
import Home from '../components/Home'
import { Typography } from '@mui/material'

export interface TemplateProps {
    data: any
}

const Template: React.FC<TemplateProps> = ({
    data // this prop will be injected by the GraphQL query below.
}: TemplateProps) => {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    const content = html2material(html)

    if (frontmatter.slug === '/') return <Home>{content}</Home>
    return (
        <Page>
            <>
                <Typography variant="h3">{frontmatter.title}</Typography>
                {content}
            </>
        </Page>
    )
}

export const pageQuery = graphql`
    query ($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                slug
                title
            }
        }
    }
`

export default Template
