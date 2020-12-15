import styled from "@emotion/styled"
import { headingTiny, colorSubtle, textLarge } from "../styles/typography"
import { cssGridArea } from "../styles/utils"
import { gridLayout } from "../components/layout"
import { css } from "@emotion/core"

const Container = styled.dl`
  margin-top: 288px;
  grid-column-start: 1;
  grid-column-end: 5;
  grid-template-areas:
    "location . none"
    "follow . ."
    ". . ."
    "general . email";
`

const Dt = styled.dt`
  ${headingTiny};
  ${(props) => colorSubtle(props.theme)};
`

const Dd = styled.dd`
  ${textLarge};
`

const sectionText = css`
  grid-column-end: 3;
  align-self: center;
`

const sectionLink = css`
  grid-column-start: 3;
  grid-column-end: 6;
  align-self: center;
`

const ContainerSocials = styled.div`
  grid-column-start: 3;
  grid-row-start: 2;
  grid-column-end: 6;
  align-self: flex-start;
  & dd {
    padding-bottom: 25px;

    &:last-of-type {
      padding-bottom: 0;
    }
  }
`

export function Contacts() {
  return (
    <Container css={gridLayout}>
      <Dt css={[cssGridArea("location"), sectionText]}>location</Dt>
      <Dd css={[cssGridArea("none"), sectionLink]}>decentralized</Dd>

      <Dt css={[cssGridArea("follow"), sectionText, `align-self: flex-start`]}>
        follow us
      </Dt>
      <ContainerSocials>
        <Dd css={[cssGridArea("drbl")]}>dribble</Dd>
        <Dd css={[cssGridArea("fb")]}>facebook</Dd>
        <Dd css={cssGridArea("ig")}>instagram</Dd>
      </ContainerSocials>

      <Dt css={[cssGridArea("general"), sectionText]}>general enquiries</Dt>
      <Dd css={[cssGridArea("email"), sectionLink]}>hello@ooze.design</Dd>
    </Container>
  )
}
