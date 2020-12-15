export function checkPrefersDark() {
  if (typeof window === "undefined") {
    return undefined
  }

  const { matches: prefersDark } = window.matchMedia(
    "(prefers-color-scheme: dark)",
  )

  return prefersDark
}
