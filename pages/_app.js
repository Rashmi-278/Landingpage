import '../styles/globals.css'


import {useState} from "react"
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import CookieConsent, { Cookies } from "react-cookie-consent";

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
        <CookieConsent cookieName="cookieConsent"     expires={150}
        style={{ background: "#061842" }}   buttonStyle={{ background:"#0C8CFC" , color: "#ffffff", fontSize: "14px"}}


        >This website uses cookies to enhance the user experience.</CookieConsent>

      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
