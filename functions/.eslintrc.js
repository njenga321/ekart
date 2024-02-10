module.exports = {
  // Environment settings
  env: {
    browser: true, // From eslintrc.json
    es6: true, // From eslintrc.js
    es2021: true, // From eslintrc.json
    node: true,
    jest: true, // From eslintrc.js
  },

  // Parser and parser options
  parser: "@typescript-eslint/parser", // From eslintrc.json
  parserOptions: {
    ecmaVersion: "latest", // From eslintrc.json
    sourceType: "module", // From eslintrc.json and eslintrc.js
    ecmaFeatures: {
      jsx: true, // From eslintrc.js
    },
    warnOnUnsupportedTypeScriptVersion: true, // From eslintrc.js
  },

  // Extends from recommended configurations
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ], // Merged from both files

  // Additional plugins
  plugins: ["@typescript-eslint", "react"], // Merged from both files

  // Rules overrides
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"], // From eslintrc.js
      rules: {
        "default-case": "off",
        "no-dupe-class-members": "off",
        "@typescript-eslint/no-angle-bracket-type-assertion": "warn",
        "no-array-constructor": "off",
        "@typescript-eslint/no-array-constructor": "warn",
        "@typescript-eslint/no-namespace": "error",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          { args: "none", ignoreRestSiblings: true },
        ],
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "warn",
      },
    },
  ], // From eslintrc.js

  // Other rules
  rules: {
    "no-restricted-globals": ["error", "name", "length"], // From eslintrc.js
    "prefer-arrow-callback": "error", // From eslintrc.js
    quotes: ["error", "double", { allowTemplateLiterals: true }], // From eslintrc.js

    // Add any additional rules from either file that haven't been merged yet
  },

  // Globals (if required)
  globals: {},
};
