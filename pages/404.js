import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Layout } from "../components/layout"
import {
  headingDecorative,
  headingMedium,
  TypoSpace,
  colorSubtle,
} from "../styles/typography"
import { Drawing404 } from "../components/drawings"
import { Image } from "../components/image"
import { desktop, tablet } from "../styles/breakpoints"

const Heading = styled.h1`
  position: relative;
  ${headingDecorative};
`

const FourOFour = styled.p`
  ${headingMedium};
  color: ${(props) => props.theme.colors.textSubtle};

  @media ${tablet} {
    position: absolute;
    right: 0;
    top: 10%;
  }
`

const Lyrics = styled.p`
  max-width: 460px;
  color: ${(props) => props.theme.colors.textSubtle};
  margin: 40px 0 0 0;

  @media ${desktop} {
    margin: 0;
  }
`

const Figure = styled.figure`
  display: none;

  @media ${desktop} {
    display: block;
    position: absolute;
    right: 30%;
    top: 12%;
  }
`

const Caption = styled.figcaption`
  position: absolute;
  right: -24px;
  bottom: -8px;
  transform: rotate(90deg);
  transform-origin: center right;
`

export default function Custom404() {
  return (
    <Layout DrawingComponent={Drawing404} dark singleScreen>
      <Figure>
        <Image alt="gopnik" src="/gopnik.png" />
        <Caption css={colorSubtle}>photo __ russian gopnik</Caption>
      </Figure>

      <Heading>
        Page
        <br />
        <TypoSpace size={6} /> not
        <br />
        <TypoSpace size={12} /> found
      </Heading>

      <FourOFour>404</FourOFour>

      <Lyrics>
        Cocaine on the table, liquor pourin', don't give a damn Dude, your
        girlfriend is a groupie, she just tryna get in Sayin', "I'm with the
        band"
      </Lyrics>
    </Layout>
  )
}
