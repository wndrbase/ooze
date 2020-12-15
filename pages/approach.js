import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Layout } from "../components/layout"
import { headingMedium, textLarge, TypoSpace } from "../styles/typography"
import { DrawingApproach } from "../components/drawings"
import { One, Two, Three, Four } from "../components/numbers"
import { Image } from "../components/image"
import { LargeDot } from "../components/icons"
import { cssMargin, Flex, positionRelative } from "../styles/utils"
import { ArrowLink } from "../components/arrow-link"
import { Hero } from "../components/hero"

const items = [
  {
    title: "problem framing",
    text: "mapping your business and product goals.",
    img: "/1.png",
    Number: One,
  },
  {
    title: "product discovery",
    text:
      "we talk with company decision makers, get to know your market, and discover opportunities.",
    img: "/2.png",
    Number: Two,
  },
  {
    title: "sketching",
    text: "making sketches and testing them.",
    img: "/3.png",
    Number: Three,
  },
  {
    title: "visual design",
    text:
      "at the end you get a pixel-perfect design within a carefully crafted guidelines.",
    img: "/4.png",
    Number: Four,
  },
]

const Column = styled.div`
  position: relative;
  flex: 1;
  order: ${(props) => (props.reorder ? -1 : 0)};
`

const cssImage = css`
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(0, -50%);
`

export default function Approach() {
  return (
    <Layout DrawingComponent={DrawingApproach}>
      <Hero>
        <h1 css={headingMedium}>
          Our proven
          <br /> <TypoSpace size={6} /> lean process
          <br /> <TypoSpace size={13} />
          delivers value at every
          <br />
          interaction
        </h1>
      </Hero>

      <ol>
        {items.map((item, index) => {
          const [firstWord, ...restWords] = item.title.split(" ")
          const needsGap = item.title.split(" ").length > 1

          return (
            <Flex key={item.title} align="center">
              <Column>
                <h2 css={[headingMedium, cssMargin("0 0 72px 0")]}>
                  {needsGap ? <TypoSpace size={7} /> : null}
                  {firstWord}
                  <br />
                  {restWords.join(" ")}
                </h2>

                <Flex>
                  <LargeDot css={cssMargin("0 48px 0 0")} />
                  <p css={textLarge}>{item.text}</p>
                </Flex>
              </Column>

              <Column reorder={index % 2 !== 0}>
                <Image src={item.img} css={cssImage} />
                <item.Number css={positionRelative} />
              </Column>
            </Flex>
          )
        })}
      </ol>

      <ArrowLink text="our work" href="/work" />
    </Layout>
  )
}
