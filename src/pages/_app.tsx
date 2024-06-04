import { ChakraProvider } from "@chakra-ui/react";
import { getApp } from "@firebase/app";
import { initializeFirebaseApp } from "@src/lib/firebase/firebase";
import type { AppProps } from "next/app";
import { AuthProvider } from '@src/feature/auth/provider/AuthProvider'
import { Header } from '@src/component/Header/Header'
import { Footer } from '@src/component/Footer/Footer'




initializeFirebaseApp()
function MyApp({ Component, pageProps }: AppProps) {
  console.log(getApp())
  return (
    <ChakraProvider>
      <AuthProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp;