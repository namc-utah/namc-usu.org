import * as React from 'react'
import Container from '@mui/material/Container'
import PageWrapper from './PageWrapper'

export interface HomeProps {
    children: React.ReactChild | React.ReactChildren
}

const Home: React.FC<HomeProps> = ({ children }: HomeProps) => {
    return (
        <PageWrapper>
            <Container sx={{ py: 8 }} maxWidth="xl">
                {/* End hero unit */}
                {children}
            </Container>
        </PageWrapper>
    )
}

export default Home
