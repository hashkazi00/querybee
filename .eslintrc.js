module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/jsx-runtime"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false, "argsIgnorePattern": "^_" }]
    },
    "settings": {
        "react": {
            "version": "detect"
        },
    },
}
