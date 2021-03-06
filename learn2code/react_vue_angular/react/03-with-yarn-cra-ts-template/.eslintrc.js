// source: https://github.com/iamturns/create-exposed-app/blob/master/.eslintrc.js

module.exports = {
	plugins: [
		'@typescript-eslint',
		'eslint-comments',
		'jest',
		'promise',
		'unicorn'
	],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:eslint-comments/recommended',
		'plugin:jest/recommended',
		'plugin:promise/recommended',
		'plugin:unicorn/recommended',
		'prettier',
		'prettier/react',
		'prettier/@typescript-eslint'
	],
	env: {
		node: true,
		browser: true,
		jest: true
	},
	rules: {
		// Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
		'no-prototype-builtins': 'off',
		// https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
		'import/prefer-default-export': 'off',
		'import/no-default-export': 'error',
		// Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
		'react/destructuring-assignment': 'off',
		// No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
		'react/jsx-filename-extension': 'off',
		// Use function hoisting to improve code readability
		'no-use-before-define': [
			'error',
			{ functions: false, classes: true, variables: true }
		],
		// Makes no sense to allow type inferrence for expression parameters, but require typing the response
		'@typescript-eslint/explicit-function-return-type': [
			'error',
			{ allowExpressions: true, allowTypedFunctionExpressions: true }
		],
		'@typescript-eslint/no-use-before-define': [
			'error',
			{ functions: false, classes: true, variables: true, typedefs: true }
		],
		// Common abbreviations are known and readable
		'unicorn/prevent-abbreviations': 'off'
	},
	parserOptions: {
		parser: '@typescript-eslint/parser'
	}
}

/* module.exports = {
	root: true,
	env: {
		node: true
	},
	// extends: ['plugin:vue/essential', '@vue/prettier', '@vue/typescript'],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended'
	],
	plugins: ['react', '@typescript-eslint', 'prettier'],
	env: {
		browser: true,
		jasmine: true,
		jest: true
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-multiple-empty-lines': [1, { max: 2 }]
	},
	settings: {
		react: {
			pragma: 'React',
			version: 'detect'
		}
	},
	parserOptions: {
		parser: '@typescript-eslint/parser'
	}
}
 */
