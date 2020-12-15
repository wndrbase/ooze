import Link from "next/link"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Image } from "../components/image"
import { headingMedium, textHuge, textProjectHuge } from "../styles/typography"
import { GradientForProject } from "./gradients"
import { ArrowSmall } from "./icons"
import { cssWidth } from "../styles/utils"

const Container = styled.a`
  display: flex;
  justify-content: space-between;
  margin-top: 0;
`

const TextColumn = styled.div`
  margin-left: 120px;
  margin-right: auto;
  margin-top: 120px;
`

const ImageColumn = styled.div`
  position: relative;
  max-width: 800px;
  order: ${(props) => (props.inverse ? -1 : 0)};
  margin-left: ${(props) => (props.inverse ? "-50px" : 0)};
  margin-right: ${(props) => (props.inverse ? 0 : "144px")};
  vertical-align: top;
`

const cssGradient = css`
  position: absolute;
  width: 100%;
  transform: translate(-20%, 10%) scale(-1, 1);
`

const cssImage = css`
  position: relative;
`

export function ProjectPreview({ inverse, title, description, image, slug }) {
  return (
    <Link key={slug} href={`/work/${slug}`}>
      <Container>
        <TextColumn>
          <h3 css={headingMedium}>{title}</h3>
          <p css={textProjectHuge}>{description}</p>
          <ArrowSmall />
        </TextColumn>
        <ImageColumn inverse={inverse}>
          <GradientForProject css={cssGradient} />
          <Image css={cssImage} alt={title} src={image} />
        </ImageColumn>
      </Container>
    </Link>
  )
}
