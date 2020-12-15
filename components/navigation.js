import { css } from "@emotion/core"
import Link from "next/link"

const navigationStyles = css`
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    display: none;
  }
`

const linkStyles = css`
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  text-transform: uppercase;

  :not(:last-child) {
    margin-right: 48px;
  }
`

const separatorStyles = css`
  width: 117px;
  margin-right: 48px;
`

/**
 * Top website navigation bar with logo
 */
export function Navigation() {
  return (
    <nav css={navigationStyles}>
      <Link href="/approach">
        <a css={linkStyles}>Approach</a>
      </Link>

      <Link href="/work">
        <a css={linkStyles}>Work</a>
      </Link>

      <Link href="/people">
        <a css={linkStyles}>People</a>
      </Link>

      <Link href="/insights">
        <a css={linkStyles}>Insights</a>
      </Link>

      <hr css={separatorStyles} />

      <Link href="/contact">
        <a css={linkStyles}>Contact</a>
      </Link>
    </nav>
  )
}
