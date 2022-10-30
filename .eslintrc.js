module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'no-undef': 0,
		'react/react-in-jsx-scope': 0,
		'@typescript-eslint/no-inferrable-types': 0,
		'no-mixed-spaces-and-tabs': 0,
		'no-non-null-assertion': 0,
	},
}
