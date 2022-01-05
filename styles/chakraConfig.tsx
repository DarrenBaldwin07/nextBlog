import { extendTheme } from '@chakra-ui/react'
import { theme as chakraTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const theme = {
    colors: {
      primary: '#5196FF',
      primary2: '#212121'
    },
}

// create breakpoints here etc...


const customTheme = extendTheme(theme)
export default customTheme