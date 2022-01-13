import * as React from 'react'
import { Helmet } from 'react-helmet'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import PageWrapper from './PageWrapper'

export interface HomeProps {
    title: string
    children: React.ReactChild | React.ReactChildren
}

const Home: React.FC<HomeProps> = ({ title, children }: HomeProps) => {
    return (
        <PageWrapper>
            <Container maxWidth="md">
                <Typography variant="h3" sx={{ borderBottom: '1px solid', mb: 5, mt: 5 }}>
                    {title}
                </Typography>
                {children}
            </Container>
        </PageWrapper>
    )
}

export default Home
