module.exports = {
  // enforces no braces where they can be omitted
  "arrow-body-style": [
    "error",
    "as-needed",
    {
      requireReturnForObjectLiteral: true,
    },
  ],

  // require parens in arrow function arguments
  "arrow-parens": ["error", "always"],

  // require space before/after arrow function's arrow
  "arrow-spacing": ["error", { before: true, after: true }],

  // verify super() callings in constructors
  "constructor-super": "error",

  // enforce the spacing around the * in generator functions
  "generator-star-spacing": ["error", { before: false, after: true }],

  // disallow modifying variables of class declarations
  "no-class-assign": "error",

  // disallow arrow functions where they could be confused with comparisons
  "no-confusing-arrow": [
    "error",
    {
      allowParens: true,
    },
  ],

  // disallow modifying variables that are declared using const
  "no-const-assign": "error",

  // disallow duplicate class members
  "no-dupe-class-members": "error",

  // disallow importing from the same path more than once; replaced by eslint-plugin-import
  "no-duplicate-imports": "off",

  // disallow symbol constructor
  "no-new-symbol": "error",

  // Disallow specified names in exports
  "no-restricted-exports": [
    "error",
    {
      restrictedNamedExports: ["default", "then"],
    },
  ],

  // disallow specific imports
  "no-restricted-imports": [
    "error",
    {
      paths: [],
      patterns: [],
    },
  ],

  // disallow to use this/super before super() calling in constructors.
  "no-this-before-super": "error",

  // disallow useless computed property keys
  "no-useless-computed-key": "error",

  // disallow unnecessary constructor
  "no-useless-constructor": "error",

  // disallow renaming import, export, and destructured assignments to the same name
  "no-useless-rename": [
    "error",
    {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    },
  ],

  // require let or const instead of var
  "no-var": "error",

  // require method and property shorthand syntax for object literals
  "object-shorthand": [
    "error",
    "always",
    {
      ignoreConstructors: false,
      avoidQuotes: true,
    },
  ],

  // suggest using arrow functions as callbacks
  "prefer-arrow-callback": [
    "error",
    {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    },
  ],

  // suggest using of const declaration for variables that are never modified after declared
  "prefer-const": [
    "error",
    {
      destructuring: "any",
      ignoreReadBeforeAssign: true,
    },
  ],

  // Prefer destructuring from arrays and objects
  "prefer-destructuring": [
    "error",
    {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: false,
      },
    },
    {
      enforceForRenamedProperties: false,
    },
  ],

  // disallow parseInt() in favor of binary, octal, and hexadecimal literals
  "prefer-numeric-literals": "error",

  // use rest parameters instead of arguments
  "prefer-rest-params": "error",

  // suggest using the spread operator instead of .apply()
  "prefer-spread": "error",

  // suggest using template literals instead of string concatenation
  "prefer-template": "error",

  // disallow generator functions that do not have yield
  "require-yield": "error",

  // enforce spacing between object rest-spread
  "rest-spread-spacing": ["error", "never"],

  // import sorting
  "sort-imports": [
    "error",
    {
      allowSeparatedGroups: true,
      memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
    },
  ],

  // require a Symbol description
  "symbol-description": "error",

  // enforce usage of spacing in template strings
  "template-curly-spacing": "error",

  // enforce spacing around the * in yield* expressions
  "yield-star-spacing": ["error", "after"],
};
