import { Global } from "@emotion/core"
import { cssGlobal } from "../styles/global"
import { DynamicThemeProvider } from "../components/dynamic-theme-provider"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DynamicThemeProvider>
        <Component {...pageProps} />
      </DynamicThemeProvider>
      <Global styles={cssGlobal} />
    </>
  )
}

export default MyApp
