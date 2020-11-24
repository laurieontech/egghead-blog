
module.exports = {
    siteMetadata: {
        title: `Egghead Blog`,
        siteUrl: `https://example.com`
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/posts`,
                name: `posts`
            }
        },
        `gatsby-plugin-mdx`,
        {
            resolve: `gatsby-plugin-theme-ui`,
            options: {
                prismPreset: `prism-okaidia`,
                preset: `@theme-ui/preset-funk`
            }
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
    ]
}