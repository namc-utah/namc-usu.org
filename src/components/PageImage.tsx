import * as React from 'react'
import { Box, Theme } from '@mui/material'
import { SxProps } from '@mui/system'
import { withPrefix } from 'gatsby'

export interface PageImageProps {
    className: string
    src: string
}

const floatLeft: SxProps<Theme> = {
    mr: 5,
    float: 'left',
    clear: 'left'
}
const profile: SxProps<Theme> = {
    ...floatLeft,
    maxWidth: 200
}

const PageImage: React.FC<PageImageProps> = ({ className, src, ...props }: PageImageProps) => {
    console.log('PageImageProps', { className, props })
    const newSrc = src.indexOf('http') === 0 ? src : withPrefix(src)
    let sx: SxProps<Theme> = {}
    switch (className) {
        case 'floatLeft':
            sx = floatLeft
            break
        case 'profilePic':
            sx = profile
            break

        default:
            break
    }
    return (
        <Box sx={sx} component="div">
            <img {...props} src={newSrc} style={{ maxWidth: '100%' }} />
        </Box>
    )
}

export default PageImage
