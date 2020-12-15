import React from "react"

const SCROLL_BREAKPOINT = 0.5

function getPosition() {
  return typeof window !== "undefined"
    ? window.pageYOffset / window.innerHeight
    : 0
}

export function useScrollBreakpoint() {
  const [breakpointPassed, setBreakpointPassed] = React.useState(false)

  function handleScroll() {
    const breakpointPassedNow = getPosition() > SCROLL_BREAKPOINT
    if (breakpointPassedNow !== breakpointPassed) {
      setBreakpointPassed(breakpointPassedNow)
    }
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [breakpointPassed])

  return breakpointPassed
}
