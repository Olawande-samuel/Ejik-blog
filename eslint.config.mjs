import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import pluginJSXReactConfig from "eslint-plugin-react/configs/jsx-runtime.js";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import tailwind from "eslint-plugin-tailwindcss";

export default [
	{
		ignores: [
			".next",
			"**/node_modules/",
			".git/",
			"dist",
			"**/*.config.*",
			"**/src/components/ui/",
		],
	},
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	pluginReactConfig,
	pluginJSXReactConfig,
	...tseslint.configs.recommended,
	...tailwind.configs["flat/recommended"],
	eslintPluginPrettier,
	{
		languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
		files: ["**/*.jsx", "**/*.tsx"],
		rules: {
			"@typescript-eslint/no-explicit-any": "warn",
			"prettier/prettier": "error",
			"react/react-in-jsx-scope": "off",
			"react/jsx-uses-react": "off",
			"no-unused-vars": ["error", { args: "none" }],
		},
	},
	{
		settings: {
			react: {
				version: "detect",
			},
		},
	},
];
