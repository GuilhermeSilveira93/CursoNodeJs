import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import rocketseat from "@rocketseat/eslint-config/node.js"

export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.node }},
  {extends:[rocketseat]},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];