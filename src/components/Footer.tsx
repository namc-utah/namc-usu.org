import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

const Copyright: React.FC = () => {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

export interface FooterProps {
    children?: React.ReactChild | React.ReactChildren
}

const Footer: React.FC<FooterProps> = ({ children }: FooterProps) => {
    return (
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
                Footer
            </Typography>
            <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                Something here to give the footer a purpose!
            </Typography>
            <Copyright />
        </Box>
    )
}

export default Footer
