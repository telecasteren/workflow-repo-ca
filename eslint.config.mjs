import js from "@eslint/js";
import globals from "globals";
/** @type {import('eslint').Linter.Config[]} */

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        describe: true,
        test: true,
        it: true,
        expect: true,
        require: true,
        module: true,
        process: true,
      },
    },
  },
  js.configs.recommended,
];
