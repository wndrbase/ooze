import Link from "next/link"
import matter from "gray-matter"
import styled from "@emotion/styled"
import { Layout } from "../../components/layout"
import { getSlug } from "../../utils/getSlug"
import {
  textHuge,
  headingTiny,
  colorSubtle,
  headingMedium,
} from "../../styles/typography"
import { cssMargin } from "../../styles/utils"
import { mobile, desktop } from "../../styles/breakpoints"
import { ArrowLink } from "../../components/arrow-link"

const Heading = styled.h1`
  ${headingMedium};
  margin: 120px 0 80px 0;
`

const Post = styled.a`
  display: flex;
  border-top: 1px solid ${(props) => props.theme.colors.textSubtle};
  border-bottom: 1px solid ${(props) => props.theme.colors.textSubtle};
  padding: 40px 0;

  @media ${mobile} {
    display: block;
    padding: 28px 0;
  }
`

const Meta = styled.div`
  flex: none;

  @media ${desktop} {
    width: 20%;
    margin-right: 10%;
  }

  @media ${mobile} {
    justify-content: space-between;
    margin-bottom: 8px;
  }
`

/**
 * Component that lists blog posts
 */
export default function Blog({ posts }) {
  return (
    <Layout>
      <Heading>insights</Heading>

      {posts.map(({ title, tag, date, slug }) => (
        <Link key={slug} href={`/insights/${slug}`}>
          <Post>
            <Meta>
              <p css={[headingTiny, cssMargin("0 0 8px 0")]}>{tag}</p>
              <p css={(theme) => [headingTiny, colorSubtle(theme)]}>{date}</p>
            </Meta>
            <p css={textHuge}>{title}</p>
          </Post>
        </Link>
      ))}

      <ArrowLink href="/contact" text="Contact" compact />
    </Layout>
  )
}

/**
 * Searches for all .md files inside the folder with blog posts
 * parses and converts metadata into props for the blog post list
 */
export async function getStaticProps() {
  const context = require.context("../../content/blog", true, /\.md$/)
  const filePaths = context.keys()

  const posts = filePaths.map((path) => {
    const file = context(path)
    const { data, content } = matter(file.default)

    return {
      title: data.title,
      date: data.date.toISOString(),
      tag: data.tag,
      content,
      slug: getSlug(path),
    }
  })

  return {
    props: {
      posts,
    },
  }
}
