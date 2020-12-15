import { ThemeProvider } from "emotion-theming"
import { useScrollBreakpoint } from "../utils/useScrollBreakpoint"
import { themeDark, themeLight } from "../styles/theme"

export function DynamicThemeProvider({ children }) {
  const breakpointPassed = useScrollBreakpoint()

  return (
    <ThemeProvider theme={breakpointPassed ? themeLight : themeDark}>
      {children}
    </ThemeProvider>
  )
}
