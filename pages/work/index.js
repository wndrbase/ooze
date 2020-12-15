import { Layout } from "../../components/layout"
import { ProjectPreview } from "../../components/project-preview"
import { getProjects } from "../../utils/getProjects"
import { headingMedium, TypoSpace } from "../../styles/typography"
import { DrawingWork } from "../../components/drawings"
import { ArrowLink } from "../../components/arrow-link"
import { Hero } from "../../components/hero"

export default function WorkPage({ projects }) {
  return (
    <Layout DrawingComponent={DrawingWork}>
      <Hero>
        <h1 css={headingMedium}>
          in-house we design
          <br />
          <TypoSpace size={6} /> and help build a digital
          <br />
          <TypoSpace size={12} /> strategy for brands
          <br /> and startups
        </h1>
      </Hero>

      {projects.map((project, index) => (
        <ProjectPreview inverse={index % 2 === 0} {...project} />
      ))}

      <ArrowLink text="people" href="/people" />
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
