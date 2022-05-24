module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['react-app', 'eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['react', '@typescript-eslint'],
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
    rules: {
        'import/first': 'error',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        'react/no-unescaped-entities': 0,
        'no-console': 'off',
        'react/display-name': 'off',
        'no-extra-boolean-cast': 'off',
        'no-use-before-define': 'off',
        'no-unsafe-optional-chaining': 'off',
    },
}
