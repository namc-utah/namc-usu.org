import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import { ThemeProvider } from '@mui/material/styles'
import { outerTheme } from '../theme'
// import Footer from './Footer'
import Topbar from './Topbar'
import './global.css'

export interface PageWrapperProps {
    children: React.ReactChild | React.ReactChildren
    fullHeight: boolean
}

const fullStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
}
const scrollStyle: React.CSSProperties = {}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, fullHeight }: PageWrapperProps) => {
    return (
        <Box id="pagewrapper" style={fullHeight ? fullStyle : scrollStyle}>
            <ThemeProvider theme={outerTheme}>
                <CssBaseline />
                <Topbar />
                {children}
                {/* Footer */}
                {/* <Footer /> */}
            </ThemeProvider>
        </Box>
    )
}

export default PageWrapper
