require("dotenv").config({
  path: `.env`,
});

module.exports = {
  plugins: [
    "gatsby-plugin-netlify",
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `enterspeed-gatsby`,
        short_name: `enterspeed-gatsby`,
        start_url: `/`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
};
