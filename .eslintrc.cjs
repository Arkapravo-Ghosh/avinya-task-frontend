module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: [
    "node_modules/",
    "dist/",
    "src/protos/*.ts",
    "src/protos/**",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: [
    "react-refresh",
  ],
  rules: {
    "react-refresh/only-export-components": "warn",
    "no-unused-vars": [
      "error",
      {
        "varsIgnorePattern": "React",
      },
    ],
    "no-extra-semi": "off",
    "react/no-unescaped-entities": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
};