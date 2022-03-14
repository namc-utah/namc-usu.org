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
        <div style={{ height: '100vh' }}>
            <ThemeProvider theme={outerTheme}>
                <CssBaseline />
                <Topbar />
                {children}
                {/* Footer */}
                {/* <Footer /> */}
            </ThemeProvider>
        </div>
    )
}

export default PageWrapper
