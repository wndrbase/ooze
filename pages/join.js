import { FormPageTemplate } from "../components/form-page-template"
import { headingMedium, TypoSpace } from "../styles/typography"
import { cssPadding } from "../styles/utils"

export default function Join() {
  return (
    <FormPageTemplate
      title={
        <h1 css={[headingMedium, cssPadding("0 150px 0 0")]}>
          are you
          <br />
          <TypoSpace size={6} /> a creative professional
          <br />
          <TypoSpace size={12} /> passionate
          <br /> about design?
        </h1>
      }
    />
  )
}
