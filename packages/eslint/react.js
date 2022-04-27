module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "@nnecec/eslint-config/base",
    "@nnecec/eslint-config/typescript",
  ],
  settings: {
    react: {
      version: "18.0",
    },
  },
  rules: {
    "jsx-quotes": ["error", "prefer-double"],
    "react/react-in-jsx-scope": "off",
  },
};
