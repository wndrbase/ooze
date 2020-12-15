import React from "react"
import { useFriction } from "renature"

let currentPathIndex = 0

export function usePathAnimation() {
  const [pathLength, setPathLength] = React.useState(0)
  const pathId = `animated-path-${currentPathIndex++}`

  React.useLayoutEffect(() => {
    const path = document.querySelector("#" + pathId)
    setPathLength(path.getTotalLength() || 0)
  }, [])

  const [pathProps] = useFriction({
    from: { strokeDashoffset: pathLength },
    to: { strokeDashoffset: 0 },
    config: {
      mu: 0.25,
      mass: 300,
      initialVelocity: 10,
    },
    infinite: false,
  })

  return {
    ...pathProps,
    strokeDasharray: pathLength,
    id: pathId,
  }
}
