module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  pathPrefix: "/20-min-pwa-tutorial",
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "PWA20",
        short_name: "PWA20",
        start_url: "/20-min-pwa-tutorial/",
        "theme_color": "#6b37bf",
        "background_color": "#6b37bf",
        "display": "standalone",
        icons: [
          {
            // Everything in /static will be copied to an equivalent
            // directory in /public during development and build, so
            // assuming your favicons are in /static/favicons,
            // you can reference them here
            src: `/20-min-pwa-tutorial/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/20-min-pwa-tutorial/favicons/android-chrome-256x256.png`,
            sizes: `256x256`,
            type: `image/png`,
          },
        ],
      },
    },
    'gatsby-plugin-offline'
  ],
};
