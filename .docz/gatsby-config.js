const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Oli Ui',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'F:\\练手项目\\React项目\\oli-ui\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Oli Ui',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'F:\\练手项目\\React项目\\oli-ui',
          templates:
            'F:\\练手项目\\React项目\\oli-ui\\node_modules\\docz-core\\dist\\templates',
          docz: 'F:\\练手项目\\React项目\\oli-ui\\.docz',
          cache: 'F:\\练手项目\\React项目\\oli-ui\\.docz\\.cache',
          app: 'F:\\练手项目\\React项目\\oli-ui\\.docz\\app',
          appPackageJson: 'F:\\练手项目\\React项目\\oli-ui\\package.json',
          appTsConfig: 'F:\\练手项目\\React项目\\oli-ui\\tsconfig.json',
          gatsbyConfig: 'F:\\练手项目\\React项目\\oli-ui\\gatsby-config.js',
          gatsbyBrowser: 'F:\\练手项目\\React项目\\oli-ui\\gatsby-browser.js',
          gatsbyNode: 'F:\\练手项目\\React项目\\oli-ui\\gatsby-node.js',
          gatsbySSR: 'F:\\练手项目\\React项目\\oli-ui\\gatsby-ssr.js',
          importsJs: 'F:\\练手项目\\React项目\\oli-ui\\.docz\\app\\imports.js',
          rootJs: 'F:\\练手项目\\React项目\\oli-ui\\.docz\\app\\root.jsx',
          indexJs: 'F:\\练手项目\\React项目\\oli-ui\\.docz\\app\\index.jsx',
          indexHtml: 'F:\\练手项目\\React项目\\oli-ui\\.docz\\app\\index.html',
          db: 'F:\\练手项目\\React项目\\oli-ui\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
