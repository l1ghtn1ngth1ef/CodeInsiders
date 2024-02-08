module.exports = {
  root: true,
  env: { browser: true, es2020: true, es6: true, node: true },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
    "eslint:all",
    "plugin:react/all",
    "airbnb",
    "eslint-config-airbnb",
    "eslint-config-airbnb-base",
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    }
  },
  "overrides": [
    {
      "files": ["*.tsx", "*.ts", "*.jsx"]
    }],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "ecmaVersion": 11,
    "requireConfigFile": false,
    babelOptions: {
      "parserOpts": {
        "plugins": ["jsx"]
      },
      presets: ["@babel/preset-react"],
    },
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', '.eslintrc.js'],
  plugins:
    ['jsx', 'react-refresh', '@typescript-eslint'],
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "node": {
        "paths": [
          "src/"
        ],
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    }
  },
  "rules": {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "indent": ["off"],
    "no-tabs": ["off"],
    "no-shadow": ["off"],
    "no-console": ["off"],

    "eol-last": ["off"],
    "react/jsx-indent": ["off"],
    "import/no-dulicates": ["off"],
    "import/no-unresolved": ["off",],
    "react/react-in-jsx-scope": ["off"],
    "react/jsx-uses-react": ["error"],
    "react/jsx-uses-vars": ["error"],
    "no-nonoctal-decimal-escape": ["off"],
    "no-unsafe-optional-chaining": ["off"],
    "@typescript-eslint/no-unused-vars": ["off"],
    "react/jsx-one-expression-per-line": ["off"],
    "react/jsx-filename-extension": [0, { extensions: ['.js', '.jsx', '.tsx'] }],
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true, "optionalDependencies": false, "peerDependencies": false, "packageDir": "./", "includeInternal": false, "includeTypes": false }],
    "no-unused-vars": [
      0,
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": true,
        "argsIgnorePattern": "^_"
      },
      { allowConstantExport: true },
    ],
  }
}