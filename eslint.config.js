import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginTailwindCSS from "eslint-plugin-tailwindcss";
import eslintParserAstro from "astro-eslint-parser";

export default tseslint.config(
  {
    ignores: [
      "**/dist",
      "**/node_modules",
      "**/.astro",
      "**/.github",
      "**/.changeset",
    ],
  },

  // Base
  eslint.configs.recommended, 
	tseslint.configs.recommended,
	eslintPluginTailwindCSS.configs["flat/recommended"],

	// TypeScript
  {
		files: ["*.ts"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
		extends: [tseslint.configs.strictTypeChecked]
  },

  // Astro
	eslintPluginAstro.configs.recommended,
  {
    files: ["*.astro"],
    languageOptions: {
			parser: eslintParserAstro,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // Set globals for Node scripts.
  {
    files: ["scripts/**"],
    languageOptions: {
      globals: globals.node,
    },
  },
);
