module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "18.2",
    },
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "no-unused-vars": ["error", { varsIgnorePattern: "^React$" }],
    "no-undef": "off",
    "comma-dangle": [2, "always-multiline"],
    "object-shorthand": [
      2,
      "always",
      {
        ignoreConstructors: false,
        avoidQuotes: false,
      },
    ],
    "max-len": [
      2,
      120,
      {
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
    "consistent-return": 0,
    "prefer-object-spread": 0,
    "prefer-rest-params": 0,
    "prefer-spread": 0,
    "function-call-argument-newline": 0,
    "function-paren-newline": 0,
    "no-plusplus": [2, { allowForLoopAfterthoughts: true }],
    "no-param-reassign": 1,
    "no-restricted-syntax": [
      2,
      {
        selector: "ObjectPattern",
        message: "Object destructuring is not compatible with Node v4",
      },
    ],
    indent: ["error", 2],
    "no-mixed-spaces-and-tabs": "error",
    "no-trailing-spaces": "error",
    "eol-last": "error",
    "space-before-function-paren": ["error", "always"],
    "keyword-spacing": "error",
    "space-infix-ops": "error",
    "comma-spacing": "error",
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    semi: ['error', 'always'],
    "prefer-destructuring": [
      "error",
      {
        array: false,
        object: false,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
  },
};
