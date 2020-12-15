import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { mobile, desktop } from "./breakpoints"

export const headingDecorative = css`
  font-style: normal;
  font-weight: normal;
  font-size: 220px;
  line-height: 220px;
  color: #090707;

  @media ${mobile} {
    font-size: 100px;
    line-height: 80px;
  }
`

export const headingLarge = css`
  font-style: normal;
  font-weight: normal;
  font-size: 151px;
  line-height: 100%;
`

export const headingMedium = css`
  font-style: normal;
  font-weight: normal;
  font-size: 90px;
  line-height: 86px;
  margin: 0;

  @media ${mobile} {
    font-size: 46px;
    line-height: 44px;
    max-width: 280px;
  }
`

export const headingTiny = css`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;

  @media ${mobile} {
    font-size: 14px;
    line-height: 17px;
  }
`

export const textHuge = css`
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 108%;

  @media ${mobile} {
    font-size: 24px;
    line-height: 28px;
  }
`

export const textProjectHuge = css`
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 108%;
  margin-bottom: 88px;
  margin-top: 64px;
  max-width: 400px;

  @media ${mobile} {
    font-size: 24px;
    line-height: 28px;
  }
`

export const textLarge = css`
  font-style: normal;
  font-weight: normal;
  font-size: 38px;
  line-height: 120%;
  text-transform: lowercase;
`

export const colorSubtle = (theme) => css`
  color: ${theme.colors.textSubtle};
`

export const emphasis = (theme) => css`
  font-style: normal;
  color: ${theme.colors.text};
`

export const TypoSpace = styled.span`
  @media ${desktop} {
    ::after {
      content: "${(props) => Array(props.size).fill(" ").join("")}";
    }
  }
`
