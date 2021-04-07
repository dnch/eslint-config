module.exports = {
  // enforce return after a callback
  "node/callback-return": "off",

  // require all requires be top-level
  "node/global-require": "error",

  // enforces error handling in callbacks (node environment)
  "node/handle-callback-err": "off",

  // disallow mixing regular variable and require declarations
  "node/no-mixed-requires": ["off", false],

  // disallow use of new operator with the require function
  "node/no-new-require": "error",

  // disallow string concatenation with __dirname and __filename
  "node/no-path-concat": "error",

  // disallow use of process.env
  "node/no-process-env": "off",

  // disallow process.exit()
  "node/no-process-exit": "off",

  // restrict usage of specified node modules
  "node/no-restricted-modules": "off",

  // disallow use of synchronous methods (off by default)
  "node/no-sync": "off",
};
