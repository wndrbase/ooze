import matter from "gray-matter"
import { getSlug } from "../utils/getSlug"

/**
 * Searches for all .md files inside the folder with case studies
 * parses and converts metadata into props for the list
 */
export async function getProjects() {
  const context = require.context("../content/projects", true, /\.md$/)
  const filePaths = context.keys()

  return filePaths
    .map((path) => {
      const file = context(path)
      const { data, content } = matter(file.default)

      return {
        title: data.title,
        description: data.description,
        image: data.image,
        timestamp: data.date.valueOf(),
        content,
        slug: getSlug(path),
      }
    })
    .sort((a, b) => a.timestamp - b.timestamp)
}
