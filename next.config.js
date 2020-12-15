const withPlugins = require("next-compose-plugins")
const optimizedImages = require("next-optimized-images")

const plugins = [[optimizedImages, {}]]

const configuration = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    })
    return config
  },
}

module.exports = withPlugins(plugins, configuration)
