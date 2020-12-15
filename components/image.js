export function Image({ src, alt, ...rest }) {
  return (
    <picture {...rest}>
      <source srcSet={require(`../images${src}?webp`)} type="image/webp" />
      <img alt={alt} src={require(`../images${src}`)} />
    </picture>
  )
}
