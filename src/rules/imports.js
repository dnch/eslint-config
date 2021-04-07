module.exports = {
  // ensure imports point to files/modules that can be resolved
  "import/no-unresolved": ["error", { commonjs: true, caseSensitive: true }],

  // ensure named imports coupled with named exports
  "import/named": "error",

  // ensure default import coupled with default export
  "import/default": "off",

  "import/namespace": "off",

  // helpful warnings:

  // disallow invalid exports, e.g. multiple defaults
  "import/export": "error",

  // do not allow a default import name to match a named export
  "import/no-named-as-default": "error",

  // warn on accessing default export property names that are also named exports
  "import/no-named-as-default-member": "error",

  // disallow use of jsdoc-marked-deprecated imports
  "import/no-deprecated": "off",

  // forbid the use of extraneous packages
  // paths are treated both as absolute paths, and relative to process.cwd()
  /* eslint-disable line-comment-position */
  "import/no-extraneous-dependencies": [
    "error",
    {
      devDependencies: [
        "test/**", // tape, common npm pattern
        "tests/**", // also common npm pattern
        "spec/**", // mocha, rspec-like pattern
        "**/__tests__/**", // jest pattern
        "**/__mocks__/**", // jest pattern
        "test.{js,jsx,ts,tsx}", // repos with a single test file
        "test-*.{js,jsx,ts,tsx}", // repos with multiple top-level test files
        "**/*{.,_}{test,spec}.{js,jsx,ts,tsx}", // tests where the extension or filename suffix denotes that it is a test
        "**/jest.config.js", // jest config
        "**/jest.setup.js", // jest setup
        "**/vue.config.js", // vue-cli config
        "**/webpack.config.js", // webpack config
        "**/webpack.config.*.js", // webpack config
        "**/rollup.config.js", // rollup config
        "**/rollup.config.*.js", // rollup config
        "**/gulpfile.js", // gulp config
        "**/gulpfile.*.js", // gulp config
        "**/Gruntfile{,.js}", // grunt config
        "**/protractor.conf.js", // protractor config
        "**/protractor.conf.*.js", // protractor config
        "**/karma.conf.js", // karma config
        "**/.eslintrc.js", // eslint config
      ],
      optionalDependencies: false,
    },
  ],
  /* eslint-enable line-comment-position */

  // forbid mutable exports
  "import/no-mutable-exports": "error",

  // module systems:

  // disallow require()
  "import/no-commonjs": "off",

  // disallow AMD require/define
  "import/no-amd": "error",

  // style guide:

  // disallow non-import statements appearing before import statements
  "import/first": "error",

  // disallow non-import statements appearing before import statements
  // deprecated: use `import/first`
  "import/imports-first": "off",

  // disallow duplicate imports
  "import/no-duplicates": "error",

  // disallow namespace imports
  "import/no-namespace": "off",

  // ensure consistent use of file extension within the import path
  "import/extensions": [
    "error",
    "ignorePackages",
    {
      js: "never",
      mjs: "never",
      jsx: "never",
      ts: "never",
      tsx: "never",
    },
  ],

  // ensure absolute imports are above relative imports and that unassigned imports are ignored
  "import/order": ["error", { groups: [["builtin", "external", "internal"]] }],

  // require a newline after the last import/require in a group
  "import/newline-after-import": "error",

  "import/prefer-default-export": "off",

  // restrict which files can be imported in a given folder
  "import/no-restricted-paths": "off",

  // forbid modules to have too many dependencies
  "import/max-dependencies": ["off", { max: 10 }],

  // forbid import of modules using absolute paths
  "import/no-absolute-path": "error",

  // forbid require() calls with expressions
  "import/no-dynamic-require": "error",

  // prevent importing the submodules of other modules
  "import/no-internal-modules": [
    "off",
    {
      allow: [],
    },
  ],

  // warn if a module could be mistakenly parsed as a script by a consumer
  // leveraging Unambiguous JavaScript Grammar
  // this should not be enabled until this proposal has at least been *presented* to TC39.
  // at the moment, it's not a thing.
  "import/unambiguous": "off",

  // forbid Webpack loader syntax in imports
  "import/no-webpack-loader-syntax": "error",

  // prevent unassigned imports
  // importing for side effects is perfectly acceptable, if you need side effects.
  "import/no-unassigned-import": "off",

  // prevent importing the default as if it were named
  "import/no-named-default": "error",

  // reports if a module's default export is unnamed
  "import/no-anonymous-default-export": [
    "off",
    {
      allowArray: false,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowLiteral: false,
      allowObject: false,
    },
  ],

  // this rule enforces that all exports are declared at the bottom of the file.
  "import/exports-last": "error",

  // reports when named exports are not grouped together in a single export declaration
  // or when multiple assignments to CommonJS module.exports or exports object are present
  // in a single file.
  "import/group-exports": "off",

  // forbid default exports. this is a terrible rule, do not use it.
  "import/no-default-export": "off",

  // prohibit named exports. this is a terrible rule, do not use it.
  "import/no-named-export": "off",

  // forbid a module from importing itself
  "import/no-self-import": "error",

  // forbid cyclical dependencies between modules
  "import/no-cycle": ["error", { maxDepth: "∞" }],

  // ensures that there are no useless path segments
  "import/no-useless-path-segments": ["error", { commonjs: true }],

  // dynamic imports require a leading comment with a webpackChunkName
  "import/dynamic-import-chunkname": [
    "off",
    {
      importFunctions: [],
      webpackChunknameFormat: "[0-9a-zA-Z-_/.]+",
    },
  ],

  // use this rule to prevent imports to folders in relative parent paths.
  "import/no-relative-parent-imports": "off",

  // reports modules without any exports, or with unused exports
  "import/no-unused-modules": [
    "off",
    {
      ignoreExports: [],
      missingExports: true,
      unusedExports: true,
    },
  ],
};
