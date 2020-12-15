import { FormPageTemplate } from "../components/form-page-template"
import { headingMedium, TypoSpace } from "../styles/typography"

export default function Contact() {
  return (
    <FormPageTemplate
      businessRequest
      title={
        <h1 css={headingMedium}>
          are you a funded
          <br />
          <TypoSpace size={6} /> startup or an established
          <br />
          <TypoSpace size={12} /> brand looking to shake
          <br /> things up?
        </h1>
      }
    />
  )
}
