import { ChakraProvider, ColorModeProvider } from '@chakra-ui/provider'
import customTheme from '../styles/chakraConfig'


export default function App({ Component, pageProps }) {
  return (
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
  )
}