module.exports = {
  "array-bracket-newline": ["off", "consistent"],

  // enforce line breaks between array elements
  "array-element-newline": ["off", { multiline: true, minItems: 3 }],

  // enforce spacing inside array brackets
  "array-bracket-spacing": ["error", "never"],

  // enforce spacing inside single-line blocks
  "block-spacing": ["error", "always"],

  // enforce one true brace style
  "brace-style": ["error", "1tbs", { allowSingleLine: true }],

  // require camel case names
  "camelcase": ["error", { properties: "never" }],

  // don't get pedantic about comments
  "capitalized-comments": "off",

  // require trailing commas in multiline object literals
  "comma-dangle": [
    "error",
    {
      arrays: "only-multiline",
      objects: "only-multiline",
      imports: "only-multiline",
      exports: "only-multiline",
      functions: "only-multiline",
    },
  ],

  // enforce spacing before and after comma
  "comma-spacing": ["error", { before: false, after: true }],

  // enforce one true comma style
  "comma-style": [
    "error",
    "last",
    {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      },
    },
  ],

  // disallow padding inside computed properties
  "computed-property-spacing": ["error", "never"],

  // enforces consistent naming when capturing the current execution context
  "consistent-this": "off",

  // enforce newline at the end of file, with no multiple empty lines
  "eol-last": ["error", "always"],

  "function-call-argument-newline": ["error", "consistent"],

  // enforce spacing between functions and their invocations
  "func-call-spacing": ["error", "never"],

  // requires function names to match the name of the variable or property to which they are
  // assigned
  "func-name-matching": [
    "off",
    "always",
    {
      includeCommonJSModuleExports: false,
      considerPropertyDescriptor: true,
    },
  ],

  // require function expressions to have a name
  "func-names": "warn",

  // enforces use of function declarations or expressions
  "func-style": ["error", "expression"],

  // enforce consistent line breaks inside function parentheses
  "function-paren-newline": ["error", "consistent"],

  // disallow specified identifiers
  "id-denylist": "off",

  // this option enforces minimum and maximum identifier lengths
  // (variable names, property names etc.)
  "id-length": "off",

  // require identifiers to match the provided regular expression
  "id-match": "off",

  // enforce the location of arrow function bodies with implicit returns
  "implicit-arrow-linebreak": ["error", "beside"],

  // specify whether double or single quotes should be used in JSX attributes
  "jsx-quotes": ["off", "prefer-double"],

  // enforces spacing between keys and values in object literal properties
  "key-spacing": ["error", { beforeColon: false, afterColon: true }],

  // require a space before & after certain keywords
  "keyword-spacing": [
    "error",
    {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true },
      },
    },
  ],

  // enforce position of line comments
  "line-comment-position": [
    "error",
    {
      position: "above",
      ignorePattern: "",
      applyDefaultPatterns: true,
    },
  ],

  // disallow mixed 'LF' and 'CRLF' as linebreaks
  "linebreak-style": ["error", "unix"],

  // require or disallow an empty line between class members
  "lines-between-class-members": [
    "error",
    "always",
    { exceptAfterSingleLine: false },
  ],

  // enforces empty lines around comments
  "lines-around-comment": "off",

  // specify the maximum depth that blocks can be nested
  "max-depth": ["off", 4],

  // specify the maximum length of a line in your program
  "max-len": [
    "error",
    100,
    2,
    {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    },
  ],

  // specify the max number of lines in a file
  "max-lines": [
    "off",
    {
      max: 300,
      skipBlankLines: true,
      skipComments: true,
    },
  ],

  // enforce a maximum function length
  "max-lines-per-function": [
    "off",
    {
      max: 50,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true,
    },
  ],

  // specify the maximum depth callbacks can be nested
  "max-nested-callbacks": "off",

  // limits the number of parameters that can be used in the function declaration.
  "max-params": ["off", 3],

  // specify the maximum number of statement allowed in a function
  "max-statements": ["off", 10],

  // restrict the number of statements per line
  "max-statements-per-line": ["off", { max: 1 }],

  // enforce a particular style for multiline comments
  "multiline-comment-style": ["off", "starred-block"],

  // require multiline ternary
  "multiline-ternary": ["error", "never"],

  // require a capital letter for constructors
  "new-cap": [
    "error",
    {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ["Immutable.Map", "Immutable.Set", "Immutable.List"],
    },
  ],

  // disallow the omission of parentheses when invoking a constructor with no arguments
  "new-parens": "error",

  // enforces new line after each method call in the chain to make it
  // more readable and easy to maintain
  "newline-per-chained-call": ["error", { ignoreChainWithDepth: 4 }],

  // disallow use of the Array constructor
  "no-array-constructor": "error",

  // disallow use of bitwise operators
  "no-bitwise": "error",

  // disallow use of the continue statement
  "no-continue": "error",

  // disallow comments inline after code
  "no-inline-comments": "off",

  // disallow if as the only statement in an else block
  "no-lonely-if": "error",

  // disallow un-paren'd mixes of different operators
  "no-mixed-operators": [
    "error",
    {
      // the list of arithmetic groups disallows mixing `%` and `**`
      // with other arithmetic operators.
      groups: [
        ["%", "**"],
        ["%", "+"],
        ["%", "-"],
        ["%", "*"],
        ["%", "/"],
        ["/", "*"],
        ["&", "|", "<<", ">>", ">>>"],
        ["==", "!=", "===", "!=="],
        ["&&", "||"],
      ],
      allowSamePrecedence: false,
    },
  ],

  // disallow mixed spaces and tabs for indentation
  "no-mixed-spaces-and-tabs": "error",

  // disallow use of chained assignment expressions
  "no-multi-assign": ["error"],

  // disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
  "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],

  // disallow negated conditions
  "no-negated-condition": "off",

  // disallow nested ternary expressions
  "no-nested-ternary": "error",

  // disallow use of the Object constructor
  "no-new-object": "error",

  // disallow use of unary operators, ++ and --
  "no-plusplus": "error",

  // disallow certain syntax forms
  "no-restricted-syntax": [
    "error",
    {
      selector: "ForInStatement",
      message:
        "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
    },
    {
      selector: "LabeledStatement",
      message:
        "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
    },
    {
      selector: "WithStatement",
      message:
        "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
    },
  ],

  // disallow tab characters entirely
  "no-tabs": "error",

  // disallow the use of ternary operators
  "no-ternary": "off",

  // disallow trailing whitespace at the end of lines
  "no-trailing-spaces": [
    "error",
    {
      skipBlankLines: false,
      ignoreComments: false,
    },
  ],

  // allow dangling underscores in identifiers
  "no-underscore-dangle": "off",

  // disallow the use of Boolean literals in conditional expressions
  // also, prefer `a || b` over `a ? a : b`
  "no-unneeded-ternary": ["error", { defaultAssignment: false }],

  // disallow whitespace before properties
  "no-whitespace-before-property": "error",

  // enforce the location of single-line statements
  "nonblock-statement-body-position": ["error", "beside", { overrides: {} }],

  // require padding inside curly braces
  "object-curly-spacing": ["error", "always"],

  // enforce line breaks between braces
  "object-curly-newline": [
    "error",
    {
      ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
      ImportDeclaration: {
        minProperties: 4,
        multiline: true,
        consistent: true,
      },
      ExportDeclaration: {
        minProperties: 4,
        multiline: true,
        consistent: true,
      },
    },
  ],

  // enforce "same line" or "multiple line" on object properties.
  "object-property-newline": [
    "error",
    {
      allowAllPropertiesOnSameLine: true,
    },
  ],

  // allow just one var statement per function
  "one-var": ["error", "never"],

  // require a newline around variable declaration
  "one-var-declaration-per-line": ["error", "always"],

  // require assignment operator shorthand where possible or prohibit it entirely
  "operator-assignment": ["error", "always"],

  // requires operator at the beginning of the line in multiline statements
  "operator-linebreak": ["error", "before", { overrides: { "=": "none" } }],

  // disallow padding within blocks
  "padded-blocks": [
    "error",
    {
      blocks: "never",
      classes: "never",
      switches: "never",
    },
    {
      allowSingleLineBlocks: true,
    },
  ],

  // require or disallow padding lines between statements
  "padding-line-between-statements": "off",

  // disallow the use of Math.pow in favor of the ** operator
  "prefer-exponentiation-operator": "error",

  // prefer use of an object spread over Object.assign
  "prefer-object-spread": "error",

  // require quotes around object literal property names
  "quote-props": [
    "error",
    "consistent-as-needed",
    { keywords: false, unnecessary: false, numbers: false },
  ],

  // specify whether double or single quotes should be used
  "quotes": ["error", "double", { avoidEscape: true }],

  // require or disallow use of semicolons instead of ASI
  "semi": ["error", "always"],

  // enforce spacing before and after semicolons
  "semi-spacing": ["error", { before: false, after: true }],

  // enforce location of semicolons
  "semi-style": ["error", "last"],

  // requires object keys to be sorted
  "sort-keys": ["off", "asc", { caseSensitive: false, natural: true }],

  // sort variables within the same declaration block
  "sort-vars": "off",

  // require or disallow space before blocks
  "space-before-blocks": "error",

  // require or disallow space before function opening parenthesis
  "space-before-function-paren": [
    "error",
    {
      anonymous: "always",
      named: "never",
      asyncArrow: "always",
    },
  ],

  // require or disallow spaces inside parentheses
  "space-in-parens": ["error", "never"],

  // require spaces around operators
  "space-infix-ops": "error",

  // require or disallow spaces before/after unary operators
  "space-unary-ops": [
    "error",
    {
      words: true,
      nonwords: false,
      overrides: {},
    },
  ],

  // require or disallow a space immediately following the // or /* in a comment
  "spaced-comment": [
    "error",
    "always",
    {
      line: {
        exceptions: ["-", "+"],
        markers: ["=", "!", "/"],
      },
      block: {
        exceptions: ["-", "+"],
        markers: ["=", "!", ":", "::"],
        balanced: true,
      },
    },
  ],

  // enforce spacing around colons of switch statements
  "switch-colon-spacing": ["error", { after: true, before: false }],

  // require or disallow spacing between template tags and their literals
  "template-tag-spacing": ["error", "never"],

  // require or disallow the Unicode Byte Order Mark
  "unicode-bom": ["error", "never"],

  // require regex literals to be wrapped in parentheses
  "wrap-regex": "off",
};
