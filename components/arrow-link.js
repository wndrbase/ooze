import styled from "@emotion/styled"
import Link from "next/link"
import { css } from "@emotion/core"
import { headingDecorative } from "../styles/typography"
import { ArrowBig } from "./icons"
import { gridLayout } from "../components/layout"

const Container = styled.div`
  margin-top: 166px;
`

const cssArrow = css`
  transform: translate(0, 12px);
  grid-column: 2;
  align-self: center;
`

export function ArrowLink({ text, href, compact }) {
  return (
    <Container compact={compact} css={[gridLayout]}>
      <ArrowBig css={cssArrow} />
      <Link href={href}>
        <a
          css={[
            headingDecorative,
            `grid-column: 5; grid-column-end: 12; margin-left: -48px;`,
          ]}
        >
          {text}
        </a>
      </Link>
    </Container>
  )
}
