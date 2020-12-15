const transitions = {
  veil: "1s ease-out",
}

const colorsDark = {
  bg: "#090707",
  text: "#e5e5e5",
  textSubtle: "#626262",
}

const colorsLight = {
  bg: "#e5e5e5",
  text: "#090707",
  textSubtle: "#626262",
}

const themeCommon = {
  transitions,
  desktop_max_width: "1440px",
}

export const themeDark = {
  ...themeCommon,
  colors: colorsDark,
}

export const themeLight = {
  ...themeCommon,
  colors: colorsLight,
}
