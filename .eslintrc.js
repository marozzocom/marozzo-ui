module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/eslint-recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    "no-extra-semi": ["error"],
    semi: ["error", "never"],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "block-spacing": ["error", "always"],
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "@typescript-eslint/no-unused-vars": ["error", { args: "none", varsIgnorePattern: "React", ignoreRestSiblings: true }],
    "no-unused-vars": ["error", { args: "none", varsIgnorePattern: "React", ignoreRestSiblings: true }]
  }
}
