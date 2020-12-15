import { css } from "@emotion/core"
import { Image } from "../components/image"
import { themeDark, themeLight } from "../styles/theme"
import { useTheme } from "emotion-theming"

const cssVeil = (open) => (theme) => css`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${themeDark.colors.bg};
  transform: translate(0, ${open ? "calc(-100% - 60vw)" : "0"});
  transition: transform ${theme.transitions.veil};
`

const cssImage = css`
  position: absolute;
  top: 100vh;
  left: 0;
  width: 100%;
`

export function Veil() {
  const theme = useTheme()
  const isLight = theme.colors.text === themeLight.colors.text

  return (
    <div css={cssVeil(isLight)}>
      <Image css={cssImage} src="/line.png" />
    </div>
  )
}
