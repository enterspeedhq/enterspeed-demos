module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-headless",
    "@storybook/addon-interactions"
  ],
  staticDirs: ['../public'],
  "framework": "@storybook/react"
}
