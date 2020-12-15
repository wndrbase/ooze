import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Layout } from "../components/layout"
import { headingMedium, headingTiny } from "../styles/typography"
import { mobile } from "../styles/breakpoints"

const cssInput = css`
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 50px;

  @media ${mobile} {
    font-size: 24px;
    line-height: 28px;
  }
`

const cssContainer = css`
  padding: 182px 0;
  width: fit-content;

  @media ${mobile} {
    padding: 150px 0;
  }
`

const Form = styled.form`
  width: fit-content;
  margin: 0 0 0 auto;

  @media ${mobile} {
    margin: 48px 0 0 0;
  }
`

const Row = styled.div`
  margin-bottom: 48px;
`

const Label = styled.label`
  ${headingTiny};
`

const Input = styled.input`
  display: block;
  ${cssInput};
`

const Textarea = styled.textarea`
  ${cssInput};
`

export function FormPageTemplate({ title, businessRequest }) {
  const targetUrl = `/api/mail-send?requestType=${
    businessRequest ? "business" : "personal"
  }`

  return (
    <Layout dark>
      <div css={cssContainer}>
        {title}

        <Form action={targetUrl} method="post">
          <Row>
            <Label htmlFor="input__name">name</Label>
            <Input
              id="input__name"
              type="text"
              name="name"
              placeholder="your name"
              required
            />
          </Row>

          <Row>
            <Label htmlFor="input__email">
              {businessRequest ? "business" : "your"}__email
            </Label>
            <Input
              id="input__email"
              name="email"
              type="email"
              placeholder={businessRequest ? "business email" : "your email"}
              required
            />
          </Row>

          <Row>
            <Label htmlFor="textarea__text">text__box</Label>
            <Textarea
              name="text"
              id="textarea__text"
              rows={2}
              placeholder="hey, i'd like to talk about..."
              required
            />
          </Row>

          <button type="submit" css={headingMedium}>
            Send
          </button>
        </Form>
      </div>
    </Layout>
  )
}
