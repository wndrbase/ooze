import glob from "glob"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import { Layout } from "../../components/layout"
import { Image } from "../../components/image"
import { getSlug } from "../../utils/getSlug"

/**
 * Case study template component
 */
export default function Project({ title, content }) {
  return (
    <Layout>
      <h1>{title}</h1>
      <ReactMarkdown source={content} renderers={{ image: Image }} />
    </Layout>
  )
}

/**
 * Extracts content and metadata of the each blog posts
 * and passes them as props into the template component
 */
export async function getStaticProps({ params }) {
  const post = await import(`../../content/projects/${params.slug}.md`)
  const { data, content } = matter(post.default)

  return {
    props: {
      title: data.title,
      content,
    },
  }
}

/**
 * Searches for blog posts in the specified folder
 * and generates a page for each
 */
export async function getStaticPaths() {
  const posts = glob.sync("content/projects/**/*.md")

  return {
    paths: posts.map((path) => `/work/${getSlug(path)}`),
    fallback: false,
  }
}
