import * as React from 'react'
// import Container from '@mui/material/Container'
// import Typography from '@mui/material/Typography'
import PageWrapper from './PageWrapper'
import './global.css'

export interface HomeProps {
    title: string
    children: React.ReactChild | React.ReactChildren
}

const PageFullWidth: React.FC<HomeProps> = ({ title, children }: HomeProps) => {
    return <PageWrapper>{children}</PageWrapper>
}

export default PageFullWidth
