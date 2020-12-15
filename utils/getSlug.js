/*
 * Extracts the last part of a file path
 * like: ./folder/another/some-title.js -> some-title
 * Useful for making blog post urls (blog/some-title)
 */
export function getSlug(filename) {
  const parts = filename.split("/")
  const lastFragment = parts[parts.length - 1]
  const [name] = lastFragment.split(".")
  return name.replace(/ /g, "-")
}
