import { Typography, Link } from '@mui/material'
import * as React from 'react'
import Page from '../components/Page'

// markup
const NotFoundPage: React.FC = () => {
    return (
        <Page title="Not found">
            <>
                <Typography variant="h2">Page not found</Typography>
                <Typography paragraph>
                    Sorry we couldn’t find what you were looking for.
                    <br />
                    {process.env.NODE_ENV === 'development' ? (
                        <>
                            <br />
                            Try creating a page in <code>src/pages/</code>.
                            <br />
                        </>
                    ) : null}
                    <br />
                    <Link href="/">Go home</Link>.
                </Typography>
            </>
        </Page>
    )
}

export default NotFoundPage
