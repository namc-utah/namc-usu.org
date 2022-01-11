import React, { createElement } from 'react'
import { Typography, Link, Divider } from '@mui/material'
import PageImage from '../components/PageImage'
import rehypeReact from 'rehype-react'
import rehypeParse from 'rehype-parse'
import { unified } from 'unified'

export const html2material = (text: string) =>
    unified()
        .use(rehypeParse, { fragment: true })
        .use(rehypeReact, {
            createElement,
            components: {
                p: (props: any) => <Typography variant="body1" gutterBottom {...props} />,
                a: (props: any) => <Link {...props} target="_blank" />,
                h1: (props: any) => <Typography variant="h3" gutterBottom {...props} sx={{ clear: 'both' }} />,
                h2: (props: any) => <Typography variant="h4" gutterBottom {...props} sx={{ clear: 'both' }} />,
                h3: (props: any) => <Typography variant="h5" gutterBottom {...props} />,
                h4: (props: any) => <Typography variant="h6" gutterBottom {...props} />,
                h5: (props: any) => <Typography variant="h6" gutterBottom {...props} />,
                h6: (props: any) => <Typography variant="h6" gutterBottom {...props} />,
                hr: (props: any) => <Divider sx={{ clear: 'both' }} {...props} />,
                img: (props: any) => <PageImage {...props} />
            }
        })
        .processSync(text).result
