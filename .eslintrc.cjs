module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'prettier',
    'eslint:recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:boundaries/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    'prettier',
    'react-hooks',
    '@typescript-eslint',
    'sort-keys',
    'sort-destructure-keys',
    'typescript-sort-keys',
    'simple-import-sort',
    'boundaries'],
  settings: {
    'import/resolver': {
      'typescript': {},
    },
    'boundaries/elements': [
      {
        'type': 'app',
        'pattern': 'app/*',
      },
      {
        'type': 'processes',
        'pattern': 'processes/*',
      },
      {
        'type': 'pages',
        'pattern': 'pages/*',
      },
      {
        'type': 'widgets',
        'pattern': 'widgets/*',
      },
      {
        'type': 'features',
        'pattern': 'features/*',
      },
      {
        'type': 'entities',
        'pattern': 'entities/*',
      },
      {
        'type': 'shared',
        'pattern': 'shared/*',
      },
    ],
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': [
      'error',
      {
        'endOfLine': 'auto',
      },
    ],
    'no-magic-numbers': 'off',
    'no-shadow': 'off',
    'camelcase': 'off',
    'no-param-reassign': ['error', { 'props': true, 'ignorePropertyModificationsFor': ['state'] }],
    'no-restricted-imports': [
      'error',
      {
        'patterns': [
          {
            'message': 'Imports from sources must contain an alias',
            'group': [
              'src/**',
            ],
          },
          {
            'message': 'Private imports are prohibited, use public imports instead',
            'group': [
              '@/app/**',
            ],
          },
          {
            'message': 'Private imports are prohibited, use public imports instead',
            'group': [
              '@/processes/*/**',
            ],
          },
          {
            'message': 'Private imports are prohibited, use public imports instead',
            'group': [
              '@/pages/*/**',
            ],
          },
          {
            'message': 'Private imports are prohibited, use public imports instead',
            'group': [
              '@/widgets/*/**',
            ],
          },
          {
            'message': 'Private imports are prohibited, use public imports instead',
            'group': [
              '@/features/*/**',
            ],
          },
          {
            'message': 'Private imports are prohibited, use public imports instead',
            'group': [
              '@/entities/*/**',
            ],
          },
          {
            'message': 'Private imports are prohibited, use public imports instead',
            'group': [
              '@/shared/*/*/**',
            ],
          },
          {
            'message': 'Prefer absolute imports instead of relatives (for root modules)',
            'group': [
              '../**/app',
            ],
          },
          {
            'message': 'Prefer absolute imports instead of relatives (for root modules)',
            'group': [
              '../**/processes',
            ],
          },
          {
            'message': 'Prefer absolute imports instead of relatives (for root modules)',
            'group': [
              '../**/pages',
            ],
          },
          {
            'message': 'Prefer absolute imports instead of relatives (for root modules)',
            'group': [
              '../**/widgets',
            ],
          },
          {
            'message': 'Prefer absolute imports instead of relatives (for root modules)',
            'group': [
              '../**/features',
            ],
          },
          {
            'message': 'Prefer absolute imports instead of relatives (for root modules)',
            'group': [
              '../**/entities',
            ],
          },
          {
            'message': 'Prefer absolute imports instead of relatives (for root modules)',
            'group': [
              '../**/shared',
            ],
          },
        ],
      },
    ],
    'boundaries/element-types': [
      'warn',
      {
        'default': 'disallow',
        'rules': [
          {
            'from': 'app',
            'allow': [
              'app',
              'processes',
              'pages',
              'widgets',
              'features',
              'entities',
              'shared',
            ],
          },
          {
            'from': 'processes',
            'allow': [
              'pages',
              'widgets',
              'features',
              'entities',
              'shared',
            ],
          },
          {
            'from': 'pages',
            'allow': [
              'widgets',
              'features',
              'entities',
              'shared',
            ],
          },
          {
            'from': 'widgets',
            'allow': [
              'features',
              'entities',
              'shared',
            ],
          },
          {
            'from': 'features',
            'allow': [
              'entities',
              'shared',
            ],
          },
          {
            'from': 'entities',
            'allow': [
              'shared',
            ],
          },
          {
            'from': 'shared',
            'allow': [
              'shared',
            ],
          },
        ],
      },
    ],
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        'warnOnUnassignedImports': true,
        'newlines-between': 'always',
        'pathGroupsExcludedImportTypes': [
          'react',
        ],
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true,
        },
        'groups': [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'pathGroups': [
          {
            'group': 'external',
            'position': 'before',
            'pattern': 'react',
          },
          {
            'group': 'internal',
            'position': 'after',
            'pattern': '@/processes/**',
          },
          {
            'group': 'internal',
            'position': 'after',
            'pattern': '@/pages/**',
          },
          {
            'group': 'internal',
            'position': 'after',
            'pattern': '@/widgets/**',
          },
          {
            'group': 'internal',
            'position': 'after',
            'pattern': '@/features/**',
          },
          {
            'group': 'internal',
            'position': 'after',
            'pattern': '@/entities/**',
          },
          {
            'group': 'internal',
            'position': 'after',
            'pattern': '@/shared/**',
          },
        ],
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        'devDependencies': [
          '**/*.test.{ts,tsx}',
          '**/*.stories.{ts,tsx}',
          '**/*.config.{ts,tsx}',
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': [
      'error',
      {
        'html': 'ignore',
      },
    ],
    'react/jsx-sort-props': [
      'error',
      {
        'callbacksLast': true,
        'shorthandFirst': true,
        'multiline': 'last',
        'ignoreCase': false,
        'noSortAlphabetically': false,
        'reservedFirst': true,
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        'extensions': [
          '.jsx',
          '.tsx',
        ],
      },
    ],
    'react/function-component-definition': [
      'error',
      {
        'namedComponents': 'arrow-function',
        'unnamedComponents': 'arrow-function',
      },
    ],
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        'argsIgnorePattern': '^_',
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        'prefer': 'type-imports',
      },
    ],
    '@typescript-eslint/sort-type-constituents': 'error',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        'allowExpressions': true,
      },
    ],
    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error',
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-keys': 'off',
    'sort-keys/sort-keys-fix': 'error',
  },
  overrides: [
    {
      'files': ['src/shared/ui/**/*.tsx'],
      'rules': {
        'react/jsx-props-no-spreading': 'off',
      },
    },
  ],
}
