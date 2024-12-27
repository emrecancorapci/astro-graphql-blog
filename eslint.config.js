import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ["**/*.{js,mjs,cjs,ts}"] },
	{ ignores: ["node_modules", "dist"] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	...eslintPluginAstro.configs.recommended,
	{
		languageOptions: {
			parserOptions: {
				project: true,
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
];
