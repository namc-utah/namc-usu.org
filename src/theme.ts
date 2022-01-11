import { createTheme } from '@mui/material/styles'
import { green, orange } from '@mui/material/colors'

export const outerTheme = createTheme({
    // palette: {
    //     primary: {
    //         main: orange[500]
    //     }
    // }
})

export const menuTheme = createTheme({
    palette: {
        primary: {
            main: orange[500]
        }
    }
})

export const innerTheme = createTheme({
    palette: {
        primary: {
            main: green[500]
        }
    }
})
