import styled from "@emotion/styled"
import { useTheme } from "emotion-theming"

export const LargeDot = styled.div`
  width: 72px;
  height: 72px;
  background-color: ${({ theme }) => theme.colors.text};
  transition: background-color ${({ theme }) => theme.transitions.veil};
  border-radius: 100%;
  grid-column-start: 9;
  align-self: flex-end;
  margin-bottom: 47px;
`

export function ArrowBig(props) {
  const theme = useTheme()

  return (
    <svg width="196" height="148" viewBox="0 0 196 148" fill="none" {...props}>
      <path d="M0 74L184.867 74" stroke={theme.colors.text} strokeWidth="14" />
      <path
        d="M117.213 5L186.046 74L117.213 143"
        stroke={theme.colors.text}
        strokeWidth="14"
      />
    </svg>
  )
}

export function ArrowSmall(props) {
  const theme = useTheme()

  return (
    <svg width="95" height="92" viewBox="0 0 95 92" fill="none" {...props}>
      <path d="M0 46L86 46" stroke={theme.colors.text} strokeWidth="7" />
      <path d="M48 3L90 46L48 89" stroke={theme.colors.text} strokeWidth="7" />
    </svg>
  )
}

export function Flag(props) {
  return (
    <svg width="82" height="82" viewBox="0 0 82 82" fill="none" {...props}>
      <path d="M6 1L1 1L1 81H6L6 1Z" fill="#EB4F3A" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1C0 0.447715 0.447715 0 1 0L6 0C6.55228 0 7 0.447715 7 1L7 81C7 81.5523 6.55228 82 6 82H1C0.447715 82 0 81.5523 0 81L0 1ZM2 2L2 80H5L5 2L2 2Z"
        fill="#EB4F3A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 5V6C4 5 4 5 4 5L30.6677 5C34.1024 5 37 7.62603 37 11.001L37 41C37 41.5523 36.5523 42 36 42C35.4477 42 35 41.5523 35 41C35 38.8497 33.1219 37.001 30.6667 37L4 37C3.44772 37 3 36.5523 3 36L3 6C3 5.44772 3.44772 5 4 5ZM35 36.624L35 11.001C35 8.84997 33.1211 7 30.6677 7L5 7L5 35L30.6667 35C32.3245 35.0006 33.8577 35.612 35 36.624Z"
        fill="#EB4F3A"
      />
      <path
        d="M26 51C26 48.238 28.239 46 31 46L31.001 46.004C33.761 46.004 36.001 43.764 36.001 41.001C36.001 38.238 33.762 36.002 31.001 36.002H26V51Z"
        fill="#EB4F3A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 36.002C25 35.4497 25.4477 35.002 26 35.002H31.001C34.3138 35.002 37.001 37.6852 37.001 41.001C37.001 44.3159 34.3137 47.004 31.001 47.004C30.9739 47.004 30.9471 47.0029 30.9204 47.0008C28.7483 47.0432 27 48.817 27 51C27 51.5523 26.5523 52 26 52C25.4477 52 25 51.5523 25 51V36.002ZM27 46.5277C28.0616 45.5776 29.4634 45 31 45C31.0271 45 31.0539 45.0011 31.0805 45.0032C33.2512 44.9608 35.001 43.1855 35.001 41.001C35.001 38.7908 33.2102 37.002 31.001 37.002H27V46.5277Z"
        fill="#EB4F3A"
      />
      <path
        d="M50.998 71C50.998 68.238 53.236 66 55.998 66V66.004C58.76 66.004 60.999 63.764 60.999 61.002C60.999 58.238 58.76 56.002 55.998 56.002H50.998L50.998 71Z"
        fill="#EB4F3A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.998 56.002C49.998 55.4497 50.4457 55.002 50.998 55.002H55.998C59.3118 55.002 61.999 57.6852 61.999 61.002C61.999 64.316 59.3125 67.004 55.998 67.004C55.9709 67.004 55.944 67.0029 55.9174 67.0008C53.7449 67.0437 51.998 68.8172 51.998 71H49.998L49.998 56.002ZM51.998 66.5274C53.0594 65.5775 54.4611 65 55.998 65C56.0251 65 56.052 65.0011 56.0786 65.0032C58.2509 64.9603 59.999 63.185 59.999 61.002C59.999 58.7908 58.2082 57.002 55.998 57.002H51.998L51.998 66.5274Z"
        fill="#EB4F3A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35 25.998C35 25.4457 35.4477 24.998 36 24.998L56 24.998C59.3122 24.998 61.999 27.6826 61.999 30.998V60.998C61.999 61.5503 61.5513 61.998 60.999 61.998C60.4467 61.998 59.999 61.5503 59.999 60.998C59.999 58.7868 58.2082 56.998 55.998 56.998H31C27.6868 56.998 25 54.3124 25 50.998C25 50.9699 25.0012 50.942 25.0035 50.9142C25.0463 47.639 27.715 44.994 31.002 44.994C31.0287 44.994 31.0554 44.9951 31.0818 44.9972C33.2535 44.9536 35 43.1787 35 40.998V25.998ZM37 26.998V40.998C37 44.31 34.3145 46.998 31 46.998C30.9733 46.998 30.9466 46.9969 30.9202 46.9948C28.7496 47.0384 27.003 48.8132 27.003 50.994C27.003 51.0175 27.0022 51.0409 27.0005 51.0641C27.0359 53.2432 28.8132 54.998 31 54.998H55.998C57.535 54.998 58.9372 55.5752 59.999 56.5252V30.998C59.999 28.7874 58.2078 26.998 56 26.998L37 26.998Z"
        fill="#EB4F3A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M59.999 46.002C59.999 45.4497 60.4467 45.002 60.999 45.002L81 45.002C81.2652 45.002 81.5196 45.1074 81.7071 45.2949C81.8947 45.4825 82 45.7368 82 46.0021L81.998 76.0001C81.998 76.5523 81.5503 77 80.998 77H56C52.6845 77 49.998 74.3171 49.998 71.002C49.998 70.9695 49.9996 70.9372 50.0027 70.9051C50.0524 67.6361 52.7182 64.998 56 64.998C56.0271 64.998 56.054 64.9991 56.0806 65.0012C58.2526 64.9583 59.999 63.1833 59.999 61.002V46.002ZM55.9194 66.9988C53.7494 67.0418 52.002 68.8167 52.002 70.998C52.002 71.0251 52.0009 71.0521 51.9987 71.0789C52.0397 73.2523 53.8132 75 56 75H79.9981L79.9999 47.002L61.999 47.002V61.002C61.999 64.3138 59.3148 67.002 56 67.002C55.9729 67.002 55.946 67.0009 55.9194 66.9988Z"
        fill="#EB4F3A"
      />
    </svg>
  )
}