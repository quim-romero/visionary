import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores([
    "dist",
    "node_modules",
    "cypress/screenshots",
    "cypress/videos",
    "cypress/downloads",
    ".lighthouseci",
  ]),

  {
    files: [
      "cypress.config.{js,ts,mjs,cjs}",
      "vite.config.{js,ts,mjs,cjs}",
      "**/*.config.{js,ts,mjs,cjs}",
      "**/*.config.js",
      "scripts/**/*.{js,ts}",
    ],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  {
    files: [
      "cypress/e2e/**/*.{js,jsx,ts,tsx}",
      "cypress/support/**/*.{js,jsx,ts,tsx}",
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.mocha,
        Cypress: "readonly",
        cy: "readonly",
        expect: "readonly",
      },
    },
  },

  {
    files: ["src/**/*.{js,jsx}", "*.jsx", "*.js"],
    extends: [
      js.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    rules: {
      "no-unused-vars": ["error", { varsIgnorePattern: "^(motion|[A-Z_])" }],
    },
  },
]);
