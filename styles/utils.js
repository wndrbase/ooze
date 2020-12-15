import styled from "@emotion/styled"
import { css } from "@emotion/core"

export const cssFlex = (align = "center") => css`
  display: flex;
  align-items: ${align};
`

export const positionRelative = css`
  position: relative;
`

export const cssMargin = (margin) => css`
  margin: ${margin};
`

export const cssPadding = (padding) => css`
  padding: ${padding};
`

export const Flex = styled.div`
  display: flex;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
`

export const cssGridArea = (name) => css`
  grid-area: ${name};
  margin-left: 0;
  margin-top: ${name === "list0" ? "93px;" : ""};
`

export const cssWidth = (width) => css`
  width: ${width};
`
