import { css } from "@emotion/core"

export const cssGlobal = (theme) => css`
  @font-face {
    font-family: "Neue Montreal";
    src: url("/NeueMontreal-Regular.woff") format("woff");
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4 {
    margin: 1rem 0;
  }

  html,
  input,
  select,
  textarea,
  button {
    font-family: "Neue Montreal", sans-serif;
    font-size: 20px;
    line-height: 24px;
    text-transform: lowercase;
  }

  img {
    max-width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  ol,
  ul {
    list-style: none;
  }

  input,
  textarea {
    color: inherit;
    display: block;
    background: none;
    border: none;
  }

  button {
    color: inherit;
    background: none;
    border: none;
  }

  button:hover {
    text-decoration: underline;
  }
`
