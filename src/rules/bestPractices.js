module.exports = {
  // enforces getter/setter pairs in objects
  "accessor-pairs": "off",

  // enforces return statements in callbacks of array's methods
  "array-callback-return": [
    "error",
    {
      allowImplicit: true,
    },
  ],

  // treat var statements as if they were block scoped
  "block-scoped-var": "error",

  // specify the maximum cyclomatic complexity allowed in a program
  "complexity": ["off", 11],

  // enforce that class methods use "this"
  "class-methods-use-this": [
    "error",
    {
      exceptMethods: [],
    },
  ],

  // require return statements to either always or never specify values
  "consistent-return": "error",

  // specify curly brace conventions for all control statements
  "curly": ["error", "multi-line"],

  // require default case in switch statements
  "default-case": [
    "error",
    {
      commentPattern: "^no default$",
    },
  ],

  // enforce default clauses in switch statements to be last
  "default-case-last": "error",

  "default-param-last": "error",

  // encourages use of dot notation whenever possible
  "dot-notation": [
    "error",
    {
      allowKeywords: true,
    },
  ],

  // enforces consistent newlines before or after dots
  "dot-location": ["error", "property"],

  // require the use of === and !==
  "eqeqeq": [
    "error",
    "always",
    {
      null: "ignore",
    },
  ],

  // require grouped accessor pairs in object literals and classes
  "grouped-accessor-pairs": ["error", "getBeforeSet"],

  // make sure for-in loops have an if statement
  "guard-for-in": "error",

  // enforce a maximum number of classes per file
  "max-classes-per-file": ["error", 1],

  // disallow the use of alert, confirm, and prompt
  "no-alert": "warn",

  // disallow use of arguments.caller or arguments.callee
  "no-caller": "error",

  // disallow lexical declarations in case/default clauses
  "no-case-declarations": "error",

  // disallow returning value in constructor
  "no-constructor-return": "error",

  // disallow division operators explicitly at beginning of regular expression
  "no-div-regex": "off",

  // disallow else after a return in an if
  "no-else-return": [
    "error",
    {
      allowElseIf: false,
    },
  ],

  // disallow empty functions, except for standalone funcs/arrows
  "no-empty-function": [
    "error",
    {
      allow: ["arrowFunctions", "functions", "methods"],
    },
  ],

  // disallow empty destructuring patterns
  "no-empty-pattern": "error",

  // disallow comparisons to null without a type-checking operator
  "no-eq-null": "off",

  // disallow use of eval()
  "no-eval": "error",

  // disallow adding to native types
  "no-extend-native": "error",

  // disallow unnecessary function binding
  "no-extra-bind": "error",

  // disallow Unnecessary Labels
  "no-extra-label": "error",

  // disallow fallthrough of case statements
  "no-fallthrough": "error",

  // disallow the use of leading or trailing decimal points in numeric literals
  "no-floating-decimal": "error",

  // disallow reassignments of native objects or read-only globals
  "no-global-assign": [
    "error",
    {
      exceptions: [],
    },
  ],

  // disallow implicit type conversions
  "no-implicit-coercion": [
    "off",
    {
      boolean: false,
      number: true,
      string: true,
      allow: [],
    },
  ],

  // disallow var and named functions in global scope
  "no-implicit-globals": "off",

  // disallow use of eval()-like methods
  "no-implied-eval": "error",

  // disallow this keywords outside of classes or class-like objects
  "no-invalid-this": "off",

  // disallow usage of __iterator__ property
  "no-iterator": "error",

  // disallow use of labels for anything other than loops and switches
  "no-labels": [
    "error",
    {
      allowLoop: false,
      allowSwitch: false,
    },
  ],

  // disallow unnecessary nested blocks
  "no-lone-blocks": "error",

  // disallow creation of functions within loops
  "no-loop-func": "error",

  // disallow magic numbers
  "no-magic-numbers": [
    "off",
    {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    },
  ],

  // disallow use of multiple spaces
  "no-multi-spaces": [
    "error",
    {
      ignoreEOLComments: false,
    },
  ],

  // disallow use of multiline strings
  "no-multi-str": "error",

  // disallow use of new operator when not part of the assignment or comparison
  "no-new": "error",

  // disallow use of new operator for Function object
  "no-new-func": "error",

  // disallows creating new instances of String, Number, and Boolean
  "no-new-wrappers": "error",

  // disallow \8 and \9 escape sequences in string literals
  // todo: semver-major: enable when v7.14 is required
  "no-nonoctal-decimal-escape": "off",

  // disallow use of (old style) octal literals
  "no-octal": "error",

  // disallow use of octal escape sequences in string literals, such as
  // var foo = 'Copyright \251';
  "no-octal-escape": "error",

  // disallow reassignment of function parameters
  // disallow parameter object manipulation except for specific exclusions
  "no-param-reassign": "error",

  // disallow usage of __proto__ property
  "no-proto": "error",

  // disallow declaring the same variable more than once
  "no-redeclare": "error",

  // disallow certain object properties
  "no-restricted-properties": [
    "error",
    {
      object: "arguments",
      property: "callee",
      message: "arguments.callee is deprecated",
    },
    {
      object: "global",
      property: "isFinite",
      message: "Please use Number.isFinite instead",
    },
    {
      object: "self",
      property: "isFinite",
      message: "Please use Number.isFinite instead",
    },
    {
      object: "window",
      property: "isFinite",
      message: "Please use Number.isFinite instead",
    },
    {
      object: "global",
      property: "isNaN",
      message: "Please use Number.isNaN instead",
    },
    {
      object: "self",
      property: "isNaN",
      message: "Please use Number.isNaN instead",
    },
    {
      object: "window",
      property: "isNaN",
      message: "Please use Number.isNaN instead",
    },
    {
      property: "__defineGetter__",
      message: "Please use Object.defineProperty instead.",
    },
    {
      property: "__defineSetter__",
      message: "Please use Object.defineProperty instead.",
    },
    {
      object: "Math",
      property: "pow",
      message: "Use the exponentiation operator (**) instead.",
    },
  ],

  // disallow use of assignment in return statement
  "no-return-assign": ["error", "always"],

  // disallow redundant `return await`
  "no-return-await": "error",

  // disallow use of `javascript:` urls.
  "no-script-url": "error",

  // disallow self assignment
  "no-self-assign": [
    "error",
    {
      props: true,
    },
  ],

  // disallow comparisons where both sides are exactly the same
  "no-self-compare": "error",

  // disallow use of comma operator
  "no-sequences": "error",

  // restrict what can be thrown as an exception
  "no-throw-literal": "error",

  // disallow unmodified conditions of loops
  "no-unmodified-loop-condition": "off",

  // disallow usage of expressions in statement position
  "no-unused-expressions": [
    "error",
    {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
    },
  ],

  // disallow unused labels
  "no-unused-labels": "error",

  // disallow unnecessary .call() and .apply()
  "no-useless-call": "off",

  // disallow unnecessary catch clauses
  "no-useless-catch": "error",

  // disallow useless string concatenation
  "no-useless-concat": "error",

  // disallow unnecessary string escaping
  "no-useless-escape": "error",

  // disallow redundant return; keywords
  "no-useless-return": "error",

  // disallow use of void operator
  "no-void": "error",

  // disallow usage of configurable warning terms in comments: e.g. todo
  "no-warning-comments": [
    "off",
    {
      terms: ["todo", "fixme", "xxx"],
      location: "start",
    },
  ],

  // disallow use of the with statement
  "no-with": "error",

  // require using Error objects as Promise rejection reasons
  "prefer-promise-reject-errors": [
    "error",
    {
      allowEmptyReject: true,
    },
  ],

  // suggest using named capture group in regular expression
  "prefer-named-capture-group": "off",

  "prefer-regex-literals": "error",

  // require use of the second argument for parseInt()
  "radix": "error",

  // require `await` in `async function` (note: this is a horrible rule that should never be used)
  "require-await": "off",

  // enforce the use of u flag on RegExp
  "require-unicode-regexp": "off",

  // requires to declare all vars on top of their containing scope
  "vars-on-top": "error",

  // require immediate function invocation to be wrapped in parentheses
  "wrap-iife": [
    "error",
    "outside",
    {
      functionPrototypeMethods: false,
    },
  ],

  // require or disallow Yoda conditions
  "yoda": "error",
};
