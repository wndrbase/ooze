import Link from "next/link"
import { css } from "@emotion/core"
import { Layout } from "../components/layout"
import { Image } from "../components/image"
import {
  headingMedium,
  colorSubtle,
  emphasis,
  textHuge,
  headingTiny,
  TypoSpace,
} from "../styles/typography"
import { LargeDot } from "../components/icons"
import { DrawingTeam, DrawingJoin } from "../components/drawings"
import { cssGridArea } from "../styles/utils"
import { ArrowLink } from "../components/arrow-link"
import { Hero } from "../components/hero"

const cssPageLayout = css`
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "dot intro intro"
      "values value0 value1"
      ". . value2"
      "person0 person1 ."
      "person2 person2 person3"
      ". person4 ."
      ". placeholder join";
  }
`

const values = [
  "be fun and a little weird",
  "cultivate a growth mindset",
  "build open and honest communication",
]

const people = [
  { name: "lena brusenska", title: "product __ designer", photo: "/lena.png" },
  { name: "leonid stern", title: "digital __ producer", photo: "/leo.png" },
  {
    name: "arthur petrusanco",
    title: "frontend __ developer",
    photo: "/arthur.png",
  },
  { name: "roman lee", title: "nomad __ designer", photo: "/roma.png" },
  {
    name: "arkadiy egorovich",
    title: "product __ designer",
    photo: "/arkasha.png",
  },
]

export default function People() {
  return (
    <Layout DrawingComponent={DrawingTeam}>
      <Hero>
        <h1 css={(theme) => [headingMedium, colorSubtle(theme)]}>
          <em css={emphasis}>our collective</em> of exceptional
          <br />
          <TypoSpace size={8} /> designers and producers,
          <br /> share the <em css={emphasis}>passion</em> for{" "}
          <em css={emphasis}>creative</em>
          <br /> and meaningful innovations, high aesthetics, and{" "}
          <em css={emphasis}>
            forward
            <br /> thinking
          </em>{" "}
          solutions
        </h1>
      </Hero>

      <div css={cssPageLayout}>
        <LargeDot css={cssGridArea("dot")} />

        <p css={[textHuge, cssGridArea("intro")]}>
          our mission is to help businesses achieve their brand and product
          goals through the medium of design, using highly motivated, strategy
          led professionals.
        </p>

        <h2 css={[headingMedium, cssGridArea("values")]}>
          core
          <br /> values:
        </h2>

        {values.map((value, index) => (
          <div key={value} css={cssGridArea("value" + index)}>
            <h3 css={(theme) => [headingTiny, colorSubtle(theme)]}>
              value __ no. {index}
            </h3>
            <p css={textHuge}>{value}</p>
          </div>
        ))}

        {people.map((person, index) => (
          <div key={person.name} css={cssGridArea("person" + index)}>
            <p css={(theme) => [headingTiny, colorSubtle(theme)]}>
              {person.title}
            </p>
            <p css={textHuge}>{person.name}</p>
            <Image src={person.photo} alt={person.name} />
          </div>
        ))}

        <DrawingJoin css={cssGridArea("placeholder")} />

        <div css={cssGridArea("join")}>
          <p css={headingMedium}>Got balls of steel?</p>
          <Link href="/join">
            <a css={(theme) => [headingTiny, colorSubtle(theme)]}>
              join our team
            </a>
          </Link>
        </div>
      </div>

      <ArrowLink text="Contact" href="/contact" />
    </Layout>
  )
}
