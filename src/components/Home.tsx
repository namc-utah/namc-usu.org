import * as React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import PageWrapper from './PageWrapper'

export interface HomeProps {
    children: React.ReactChild | React.ReactChildren
}

const Home: React.FC<HomeProps> = ({ children }: HomeProps) => {
    return (
        <PageWrapper>
            <>
                {/* Hero unit */}
                {/* <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
                            Album layout
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Something short and leading about the collection below—its contents, the creator, etc. Make
                            it short and sweet, but not too short so folks don&apos;t simply skip over it entirely.
                        </Typography>
                        <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
                            <Button variant="contained">Main call to action</Button>
                            <Button variant="outlined">Secondary action</Button>
                        </Stack>
                    </Container>
                </Box> */}
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    {children}
                </Container>
            </>
        </PageWrapper>
    )
}

export default Home
