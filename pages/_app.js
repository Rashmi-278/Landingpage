import '../styles/globals.css'

import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'

import theme from '../components/theme/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
