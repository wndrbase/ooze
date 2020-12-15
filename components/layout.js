import Head from "next/head"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Navigation } from "./navigation"
import { Logo } from "./logo"
import { Meta } from "./meta"
import { Veil } from "./veil"
import { themeLight } from "../styles/theme"
import { Noise } from "../styles/animation"

const Container = styled.div`
  overflow: hidden;
  color: ${(props) => props.theme.colors.text};
  background-color: ${themeLight.colors.bg};
  transition: color 0.5s;
`

const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: ${themeLight.desktop_max_width};
  margin: 0 auto;
  padding: 24px 24px 0 24px;
`

const Main = styled.main`
  position: relative;
  ${(props) =>
    props.singleScreen ? "height" : "min-height"}: calc(100vh - 72px);
  max-width: ${themeLight.desktop_max_width};
  margin: 0 auto;
  padding: 0 24px 0 24px;
`

const cssDrawing = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`

export const gridLayout = css`
  display: grid;
  grid-template-columns: repeat(12, 72px);
  grid-gap: 48px;
`

/**
 * A component wrapper for pages that contains company logo
 * meta tags like page title and website navigation
 */
export function Layout({ DrawingComponent, singleScreen, children }) {
  const isClient = typeof window !== "undefined"

  return (
    <Container>
      <Head>
        <Meta />
      </Head>

      <Noise />
      <Veil />

      {DrawingComponent && isClient && <DrawingComponent css={cssDrawing} />}

      <Header>
        <Logo />
        <Navigation />
      </Header>

      <Main singleScreen={singleScreen}>{children}</Main>
    </Container>
  )
}
