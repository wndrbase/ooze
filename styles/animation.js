import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"

const keyframesNoise = keyframes`
    0% {
      transform: translate(0, 0)
    }

    10% {
      transform: translate(-5%, -5%)
    }

    20% {
      transform: translate(-10%, 5%)
    }

    30% {
      transform: translate(5%, -10%)
    }

    40% {
      transform: translate(-5%, 15%)
    }

    50% {
      transform: translate(-10%, 5%)
    }

    60% {
      transform: translate(15%, 0)
    }

    70% {
      transform: translate(0, 10%)
    }

    80% {
      transform: translate(-15%, 0)
    }

    90% {
      transform: translate(10%, 5%)
    }

    100% {
      transform: translate(5%, 0)
    }
`

export const Noise = styled.div`
  position: fixed;
  z-index: 800;
  height: 180%;
  left: -40%;
  top: -40%;
  width: 180%;
  pointer-events: none;
  will-change: transform;
  animation: ${keyframesNoise} 1s steps(4) infinite;
  background-image: url(${require("../images/noise.png")});
`
