import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Layout, gridLayout } from "../components/layout"
import { Contacts } from "../components/contacts"
import { getProjects } from "../utils/getProjects"
import {
  headingMedium,
  headingLarge,
  colorSubtle,
  TypoSpace,
  emphasis,
  headingTiny,
} from "../styles/typography"
import { ProjectPreview } from "../components/project-preview"
import { ArrowLink } from "../components/arrow-link"
import { cssGridArea } from "../styles/utils"
import {
  GradientForExperiences,
  GradientForProject,
  GradientForExperiencesBottom,
  GradientForFooter,
} from "../components/gradients"
import { LargeDot } from "../components/icons"
import { Hero } from "../components/hero"
import { mobile, desktop } from "../styles/breakpoints"
import { Flag } from "../components/icons"

const expertise = [
  {
    title: "Areas",
    list: ["Product pages", "Web apps", "Mobile apps", "Saas apps"],
  },
  {
    title: "Strategy",
    list: ["brand Strategy", "collaborative sessions", "ux strategy"],
  },
  {
    title: "Design",
    list: [
      "Art direction",
      "Creative direction",
      "Brand identity design",
      "UI/UX design",
      "Visual design",
    ],
  },
]

const cssSubheading = css`
  position: absolute;
  right: 24px;
  top: 170px;
  max-width: 400px;
  text-align: right;

  @media ${mobile} {
    font-size: 14px;
    line-height: 17px;
    text-align: right;
    text-transform: lowercase;
    top: calc(-50px + 123px);
    max-width: 280px;
  }
`

const cssWork = css`
  margin-top: 328px;
  margin-bottom: 230px;
`

const Expertise = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, 72px);
  grid-gap: 48px;
  grid-template-areas:
    ". . list0 . . delivering ."
    ". . list1 . . . ."
    "gradient . . . . list2 .";
`
const cssLi = css`
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 50px;
`
const cssFlagExpertise = css`
  position: absolute;
  top: -75px;
  margin-left: 20px;
`
const FooterCopyrite = styled.div`
  align-self: flex-end;
  grid-column-start: 10;
  grid-column-end: 13;
`

const gradientFooterPos = css`
  position: absolute;
  bottom: -78px;
  right: -400px;
`

const FooterCopyriteText = styled.div``
/**
 * The home page
 * What you see when you visit the / route of your website
 */
export default function HomePage({ projects }) {
  return (
    <Layout>
      <Hero>
        <h1 css={[headingMedium]}>
          we are
          <br />
          <TypoSpace size={7} />
          an innovation
          <br />
          <TypoSpace size={13} />
          experience strategy
          <br />& design <TypoSpace size={4} />
          firm
        </h1>

        <p css={(theme) => [colorSubtle(theme), cssSubheading]}>
          Providing brands with a range of talents, focused on reaching modern
          consumers and driving the growth of technology companies in{" "}
          <em css={emphasis}>medtech</em> and{" "}
          <em css={emphasis}>edtech industry</em>
        </p>
      </Hero>

      <section css={cssWork}>
        <h2 css={[headingLarge, `margin-bottom: 220px;`]}>Our work</h2>
        {projects.map((project, index) => (
          <ProjectPreview
            key={`key_${index}`}
            inverse={index % 2 === 0}
            {...project}
          />
        ))}
      </section>

      <h2 css={[headingLarge, `position: relative`]}>
        Expertise <Flag css={cssFlagExpertise} />
      </h2>

      <Expertise>
        <div
          css={[
            cssGridArea("delivering"),
            `grid-column: 7; margin-top: 262px; z-index: 1`,
          ]}
        >
          <p css={headingMedium}>
            Delivering
            <br /> experiences
          </p>
        </div>
        <GradientForExperiences />

        {expertise.map((exp, index) => (
          <div
            key={exp.title}
            css={[
              cssGridArea("list" + index),
              `
              position: relative;
              grid-column-end: ${index > 1 ? 10 : 7}; 
              padding-top: 88px;              
              `,
            ]}
          >
            <h3
              css={[
                headingTiny,
                colorSubtle,
                `margin-top: 0; margin-bottom: 40px`,
              ]}
            >
              {exp.title}
            </h3>
            <ul>
              {exp.list.map((el) => (
                <li key={el} css={cssLi}>
                  {el}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <GradientForExperiencesBottom />
      </Expertise>

      <ArrowLink text="let's talk" href="/contact" />

      <footer
        css={[gridLayout, `margin-bottom: 69px;position: relative; z-index: 1`]}
      >
        <Contacts />
        <LargeDot />
        <FooterCopyrite>
          <FooterCopyriteText>
            <p css={[headingMedium, `padding-bottom: 16px`]}>firm</p>
            <p>© ooze 2020 — in love with details</p>
          </FooterCopyriteText>
        </FooterCopyrite>
      </footer>
      <GradientForFooter css={gradientFooterPos} />
    </Layout>
  )
}

export async function getStaticProps() {
  const projects = await getProjects()

  return {
    props: {
      projects,
    },
  }
}
