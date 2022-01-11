import * as React from 'react'
import { Box, Theme } from '@mui/material'
import { SxProps } from '@mui/system'

export interface PageImageProps {
    className: string
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

const PageImage: React.FC<PageImageProps> = ({ className, ...props }: PageImageProps) => {
    console.log('PageImageProps', { className, props })
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
            <img {...props} style={{ maxWidth: '100%' }} />
        </Box>
    )
}

export default PageImage
