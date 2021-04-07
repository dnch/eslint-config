const BestPracticesRules = require("./rules/bestPractices");
const ErrorsRules = require("./rules/errors");
const ES6Rules = require("./rules/es6");
const ImportsRules = require("./rules/imports");
const NodeRules = require("./rules/node");
const StrictRules = require("./rules/strict");
const StyleRules = require("./rules/style");
const VariablesRules = require("./rules/variables");

module.exports = {
  env: {
    node: true,
    es6: true,
    es2020: true,
  },

  plugins: ["import", "node"],

  settings: {
    "import/resolver": {
      node: {
        extensions: [".mjs", ".js", ".json"],
      },
    },

    "import/extensions": [".js", ".mjs", ".jsx"],

    "import/core-modules": [],

    "import/ignore": [
      "node_modules",
      "\\.(coffee|scss|css|less|hbs|svg|json)$",
    ],
  },

  rules: {
    ...BestPracticesRules,
    ...ErrorsRules,
    ...ES6Rules,
    ...ImportsRules,
    ...NodeRules,
    ...StrictRules,
    ...StyleRules,
    ...VariablesRules,
  },
};
