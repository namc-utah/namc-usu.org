import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { outerTheme, innerTheme } from '../theme'
import Footer from './Footer'
import Topbar from './Topbar'

export interface PageWrapperProps {
    children: React.ReactChild | React.ReactChildren
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }: PageWrapperProps) => {
    return (
        <ThemeProvider theme={outerTheme}>
            <CssBaseline />
            <Topbar />
            {children}
            {/* Footer */}
            {/* <Footer /> */}
        </ThemeProvider>
    )
}

export default PageWrapper
