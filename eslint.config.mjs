import { fixupConfigRules } from '@eslint/compat';
import typescriptEslint from 'typescript-eslint';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const flatReact = /** @type {NonNullable<typeof reactPlugin.configs.flat>} */ (
  reactPlugin.configs.flat
);

export default typescriptEslint.config(
  {
    files: ['src/**/*'],
    ignores: ['dist/*', '.yarn/*', '.pnp.cjs', 'storybook-static/*'],
  },
  js.configs.recommended,
  ...typescriptEslint.configs.recommended,
  // @ts-expect-error eslint-plugin-react-hooks and typescriptEslint are fighting
  flatReact.recommended,
  flatReact['jsx-runtime'],
  ...fixupConfigRules(compat.extends('plugin:storybook/recommended')),
  {
    plugins: {
      'react-hooks': hooksPlugin,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      ecmaVersion: 12,
      sourceType: 'module',
    },

    rules: {
      ...hooksPlugin.configs.recommended.rules,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },
  },
);
