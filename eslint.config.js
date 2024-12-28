import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginTailwindCSS from "eslint-plugin-tailwindcss";
import eslintParserTypescript from '@typescript-eslint/parser';
import eslintParserAstro from 'astro-eslint-parser';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ["**/*.{js,mjs,cjs,ts,astro}"] },
	{ ignores: ["node_modules", "dist"] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	...eslintPluginTailwindCSS.configs["flat/recommended"],
	{
		languageOptions: {
			parser: eslintParserTypescript,
			parserOptions: {
				project: true,
				
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				tsconfigRootDir: import.meta.dirname,
				extraFileExtensions: [".astro"],
			},
			overrides: [
				{
					files: ["*.astro"],
					parser: eslintParserAstro,
					// Parse the script in `.astro` as TypeScript by adding the following configuration.
					parserOptions: {
						parser: eslintParserTypescript,
					},
				},],
		},
	},
	...eslintPluginAstro.configs.recommended,
];
