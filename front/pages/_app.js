import '@/styles/globals.css'
import '@/styles/testArea.css'
import '@/styles/homePage.css'
import '@/styles/qrcodeRes.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false; 

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
