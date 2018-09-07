module.exports = {
  pathPrefix: '/fake-door-generator',
  siteMetadata: {
    title: 'Firefox Fake Door',
    description: 'A simple splash site generator for evaluating product concepts',
    repo: 'https://github.com/johngruen'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/products`,
      },
    },
    'gatsby-transformer-remark',
    {
      // TODO: https://www.w3.org/TR/appmanifest/#usage-examples
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/firefox-logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['node-modules'],
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
  ],
};
