import { ChakraProvider } from '@chakra-ui/provider'
import customTheme from '../styles/chakraConfig'
import { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
  )
}