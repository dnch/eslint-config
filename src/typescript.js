const BestPracticesRules = require("./rules/bestPractices");
const ErrorsRules = require("./rules/errors");
const ES6Rules = require("./rules/es6");
const ImportsRules = require("./rules/imports");
const StyleRules = require("./rules/style");
const VariablesRules = require("./rules/variables");

const typescriptRule = function typescriptRule(name, group, settings) {
  return Object.fromEntries([
    [`@typescript-eslint/${name}`, settings || group[name]],
    [name, "off"],
  ]);
};

module.exports = {
  env: {
    node: true,
    es6: true,
    es2020: true,
  },

  plugins: ["@typescript-eslint", "import", "node", "tsdoc"],
  parser: "@typescript-eslint/parser",
  settings: {
    // apply special parsing for TypeScript files
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"],
    },

    // append 'ts' extensions to 'import/resolver' setting
    "import/resolver": {
      node: {
        extensions: [".mjs", ".js", ".json", ".ts", ".d.ts"],
      },
    },

    // append 'ts' extensions to 'import/extensions' setting
    "import/extensions": [".js", ".mjs", ".jsx", ".ts", ".tsx", ".d.ts"],

    // resolve type definition packages
    "import/external-module-folders": ["node_modules", "node_modules/@types"],
  },

  rules: {
    ...BestPracticesRules,
    ...ErrorsRules,
    ...ES6Rules,
    ...ImportsRules,
    ...StyleRules,
    ...VariablesRules,

    "tsdoc/syntax": "warn",
    "camelcase": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
      },
      {
        selector: "function",
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],

    ...typescriptRule("comma-dangle", StyleRules, [
      "error",
      {
        arrays: "only-multiline",
        enums: "only-multiline",
        exports: "only-multiline",
        functions: "only-multiline",
        generics: "only-multiline",
        imports: "only-multiline",
        objects: "only-multiline",
        tuples: "only-multiline",
      },
    ]),

    ...typescriptRule("brace-style", StyleRules),

    ...typescriptRule("comma-spacing", StyleRules),

    ...typescriptRule("dot-notation", BestPracticesRules),

    ...typescriptRule("func-call-spacing", StyleRules),

    ...typescriptRule("keyword-spacing", StyleRules),

    ...typescriptRule("lines-between-class-members", StyleRules),

    ...typescriptRule("no-array-constructor", StyleRules),

    ...typescriptRule("no-dupe-class-members", ES6Rules),

    ...typescriptRule("no-empty-function", BestPracticesRules),

    ...typescriptRule("no-extra-parens", ErrorsRules),

    ...typescriptRule("no-extra-semi", ErrorsRules),

    ...typescriptRule("no-implied-eval", BestPracticesRules),

    ...typescriptRule("no-loop-func", BestPracticesRules),

    ...typescriptRule("no-magic-numbers", BestPracticesRules),

    ...typescriptRule("no-redeclare", BestPracticesRules),

    ...typescriptRule("no-shadow", VariablesRules),

    ...typescriptRule("no-throw-literal", BestPracticesRules),

    ...typescriptRule("no-unused-expressions", BestPracticesRules),

    ...typescriptRule("no-unused-vars", VariablesRules),

    ...typescriptRule("no-use-before-define", VariablesRules),

    ...typescriptRule("no-useless-constructor", ES6Rules),

    ...typescriptRule("quotes", StyleRules),

    ...typescriptRule("semi", StyleRules),

    ...typescriptRule("space-before-function-paren", StyleRules),

    // too broken to use
    ...typescriptRule("indent", "off"),

    // already covered by typescript
    "constructor-super": "off",
    "getter-return": "off",
    "no-const-assign": "off",
    "no-dupe-args": "off",
    "no-dupe-class-members": "off",
    "no-dupe-keys": "off",
    "no-func-assign": "off",
    "no-new-func": "off",
    "no-new-symbol": "off",
    "no-obj-calls": "off",
    "no-redeclare": "off",
    "no-this-before-super": "off",
    "no-undef": "off",
    "no-unreachable": "off",
    "no-unsafe-negation": "off",
    "valid-typeof": "off",
    "import/named": "off",
    "import/no-unresolved": "off",
  },
};
