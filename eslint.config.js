/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginTailwindCSS from "eslint-plugin-tailwindcss";

export default tseslint.config(
	{
		ignores: ['**/dist', '**/node_modules', '**/.astro', '**/.github', '**/.changeset'],
	},

	// JavaScript
	eslint.configs.recommended,
	// TypeScript Type Checked
	...tseslint.configs.recommendedTypeChecked,
	{
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

	// Astro
	...eslintPluginAstro.configs.recommended,

	// Set globals for Node scripts.
	{
		files: ['scripts/**'],
		languageOptions: {
			globals: globals.node,
		},
	},

	// Tailwind CSS
	...eslintPluginTailwindCSS.configs["flat/recommended"],
);