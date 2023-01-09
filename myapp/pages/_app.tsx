import '../styles/globals.css'
import Navbar from "../components/navbar"
import type { AppProps } from 'next/app'
import "../style/globals.scss"
function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <Navbar/>
  <Component {...pageProps} /></>
}

export default MyApp
