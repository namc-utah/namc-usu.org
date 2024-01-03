import * as React from 'react'
import Container from '@mui/material/Container'
import PageWrapper from './PageWrapper'

export interface HomeProps extends React.PropsWithChildren {
  // 
}

const Home: React.FC<HomeProps> = ({ children }: HomeProps) => {
    return (
        <PageWrapper>
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    {children}
                </Container>
        </PageWrapper>
    )
}

export default Home
