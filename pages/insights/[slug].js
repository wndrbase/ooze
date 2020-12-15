import glob from "glob"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import { Layout } from "../../components/layout"
import { Image } from "../../components/image"
import { getSlug } from "../../utils/getSlug"
import { Hero } from "../../components/hero"

/**
 * Blog post template component
 */
export default function BlogPost({ title, date, content, heroImage }) {
  return (
    <Layout>
      <Hero>
        {title}
        <Image src={heroImage} />
      </Hero>
      <h1>{title}</h1>
      <p>{date}</p>
      <ReactMarkdown source={content} renderers={{ image: Image }} />
    </Layout>
  )
}

/**
 * Extracts content and metadata of the each blog posts
 * and passes them as props into the template component
 */
export async function getStaticProps({ params }) {
  const post = await import(`../../content/blog/${params.slug}.md`)
  const { data, content } = matter(post.default)

  return {
    props: {
      title: data.title,
      date: data.date.toDateString(),
      heroImage: data.heroImage,
      content,
    },
  }
}

/**
 * Searches for blog posts in the specified folder
 * and generates a page for each
 */
export async function getStaticPaths() {
  const posts = glob.sync("content/blog/**/*.md")

  return {
    paths: posts.map((path) => `/insights/${getSlug(path)}`),
    fallback: false,
  }
}
