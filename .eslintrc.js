module.exports = {
  root: true,
  extends: ['eslint:recommended', 'next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
  // parser: '@babel/eslint-parser',

  parser: '@typescript-eslint/parser',
  parserOptions: {
    babelOptions: {
      plugins: ['@babel/plugin-syntax-import-assertions'],
    },
  },
  env: {
    jest: true,
    browser: true,
  },
  globals: {
    jsdom: true,
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  plugins: [
    '@stylistic',
    'react-hooks',
    'babel',
    'import',
    'jsx-a11y',
    '@typescript-eslint',
    // 'detox',
    // 'lipaix-custom-rules',
    // 'deprecate',
    // 'eslint-plugin-no-inline-styles',
    // 'testing-library',
    // 'jest',
    // 'jest-dom',
    // 'promise',
  ],
  reportUnusedDisableDirectives: true,
  rules: {
    // Stylistics
    '@stylistic/indent': ['error', 2],
    '@stylistic/jsx-curly-spacing': [2, { 'when': 'never', 'children': true }],
    '@stylistic/object-curly-spacing': [2, 'always'],
    '@stylistic/key-spacing': ['error', { 'mode': 'strict' }],

    // Imports spacing rule
    'import/newline-after-import': ['error', { 'count': 1 }],
    'import/order': [
      'error',
      {
        'groups': [['builtin', 'external', 'internal']],
        'newlines-between': 'always-and-inside-groups',
        'alphabetize': { 'order': 'asc', 'caseInsensitive': true },
      },
    ],

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    // jsx-a11y - (Accessibility) https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
    'jsx-a11y/alt-text': [
      'error',
      {
        elements: ['img', 'object', 'area', 'input[type="image"]'],
        img: ['Image'],
        object: [],
        area: [],
        'input[type="image"]': [],
      },
    ],
    'jsx-a11y/anchor-has-content': [
      'error',
      {
        components: ['Link'],
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-proptypes': 'error',
    'jsx-a11y/aria-role': ['error', { ignoreNonDOM: false, allowedInvalidRoles: ['text'] }],
    'jsx-a11y/aria-unsupported-elements': 'error',
    'jsx-a11y/autocomplete-valid': [
      'off',
      {
        inputComponents: [],
      },
    ],
    'jsx-a11y/click-events-have-key-events': 'error',
    'jsx-a11y/control-has-associated-label': [
      'error',
      {
        labelAttributes: ['label'],
        controlComponents: ['CardSelectable', 'RadioButtonList'],
        ignoreElements: ['audio', 'canvas', 'embed', 'input', 'textarea', 'tr', 'video'],
        ignoreRoles: [
          'grid',
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'row',
          'tablist',
          'toolbar',
          'tree',
          'treegrid',
        ],
        depth: 5,
      },
    ],
    'jsx-a11y/heading-has-content': ['error', { components: [''] }],
    'jsx-a11y/html-has-lang': 'error',
    'jsx-a11y/iframe-has-title': 'error',
    'jsx-a11y/img-redundant-alt': 'error',
    'jsx-a11y/interactive-supports-focus': 'error',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: ['NumericInput', 'Select', 'Checkbox', 'Text', 'RadioButton'],
        depth: 3,
        assert: 'either',
      },
    ],
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/lang': 'error',
    'jsx-a11y/media-has-caption': [
      'error',
      {
        audio: [],
        video: [],
        track: [],
      },
    ],
    'jsx-a11y/mouse-events-have-key-events': 'error',
    'jsx-a11y/no-access-key': 'error',
    'jsx-a11y/no-autofocus': ['error', { ignoreNonDOM: true }],
    'jsx-a11y/no-distracting-elements': [
      'error',
      {
        elements: ['marquee', 'blink'],
      },
    ],
    'jsx-a11y/no-interactive-element-to-noninteractive-role': [
      'error',
      {
        tr: ['none', 'presentation'],
      },
    ],
    'jsx-a11y/no-noninteractive-element-interactions': [
      'error',
      {
        handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
      },
    ],
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      'error',
      {
        ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
        table: ['grid'],
        td: ['gridcell'],
      },
    ],
    'jsx-a11y/no-noninteractive-tabindex': [
      'error',
      {
        tags: [],
        roles: ['tabpanel'],
      },
    ],
    'jsx-a11y/no-onchange': 'off',
    'jsx-a11y/no-redundant-roles': [
      'error',
      {
        nav: ['navigation'],
      },
    ],
    'jsx-a11y/no-static-element-interactions': [
      'error',
      {
        handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
      },
    ],
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',
    'jsx-a11y/scope': 'error',
    'jsx-a11y/tabindex-no-positive': 'error',

    // Overrides.
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 1,
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
    ],
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-alert': 'off',
    semi: ['error', 'never'],
    'no-underscore-dangle': 'off',
    'default-case': 'off',
    // 'deprecate/function': [
    //   'error',
    //   { name: 'encryptRecord', use: 'encryptRecord.v2' },
    //   { name: 'decryptRecord', use: 'decryptRecord.v2' },
    // ],
    camelcase: 'off',
    'import/no-extraneous-dependencies': 'off', // we use a custom version of this rule for packages
    'import/no-cycle': 'off',
    'import/no-unresolved': [
      'error',
      {
        ignore: [
          // asset files handled by webpack and declared as modules in TS global types
          '\\.(gif|png|svg|svg\\?as-react-component|scss|xml)$',
        ],
      },
    ],
    'import/extensions': 'off',
    'class-methods-use-this': 'off',
    'no-shadow': 'off',
    'no-param-reassign': 'off',
    'no-mixed-operators': 'off',
    'no-confusing-arrow': 'off',
    'no-unused-expressions': 'off', // replaced by the babel plugin version below
    // 'babel/no-unused-expressions': 'error', // this version handles optional chaining better than es-lint-core
    'no-constant-binary-expression': 'error', // should be default in eslint 9, so can be removed after upgrade
    'no-prototype-builtins': 'off',
    'no-unexpected-multiline': 'off',
    'no-plusplus': 'off',
    // 'prefer-object-spread/prefer-object-spread': 'error',
    'prefer-destructuring': 'off',
    'max-classes-per-file': 'off',
    // 'lipaix-custom-rules/no-missing-schema-for-tracking-events': 'error',
    // 'lipaix-custom-rules/react-router-restricted-imports': [
    //   'error',
    //   {
    //     imports: ['useParams', 'useSearchParams'],
    //     folders: ['javascripts/modules', 'javascripts/views'],
    //   },
    // ],
    // // 'lipaix-custom-rules/modules/no-module-resource-import': 'error',
    // // 'lipaix-custom-rules/modules/no-import-controller-outside-root-module': 'error',
    // // 'lipaix-custom-rules/modules/no-custom-hooks-in-view': 'error',
    // 'lipaix-custom-rules/modules/use-context-only-controller': 'error',
    // // 'lipaix-custom-rules/modules/module-default-export': 'error',
    // 'lipaix-custom-rules/modules/restricted-navigation': [
    //   'error',
    //   { forbidden_patterns: ['/pages/patients', '/pages/welcome-process'] },
    // ],
    // // 'lipaix-custom-rules/modules/module-types-export': 'error',
    // 'lipaix-custom-rules/no-use-is-mounted': 'error',
    // 'lipaix-custom-rules/no-use-direct-access-to-fs-state': 'error',
    // 'lipaix-custom-rules/no-use-transition-router': 'error',
    // 'lipaix-custom-rules/no-implicit-react-context-usage': 'error',
    // // 'lipaix-custom-rules/error-boundary-team-and-component-props-required': 'error',
    // 'lipaix-custom-rules/no-relative-import-path': 'error',
    // // 'lipaix-custom-rules/greppable-i18n-keys': 'error',
    // 'lipaix-custom-rules/react-query/react-query-on-rails-convention': 'error',
    // 'lipaix-custom-rules/react-query/no-inline-placeholderdata': 'error',
    // 'lipaix-custom-rules/react-query/set-query-data-usage': 'error',
    // 'lipaix-custom-rules/react-query/prefer-object-syntax': 'warn',
    // 'lipaix-custom-rules/react-query/no-react-query': [
    //   'error',
    //   {
    //     folders: ['javascripts/views', 'javascripts/pages'],
    //   },
    // ],
    // 'lipaix-custom-rules/no-test-id': 'error',
    // // 'lipaix-custom-rules/no-data-testid': 'error',
    // // 'lipaix-custom-rules/design-system/a11y-restricted-syntax': [
    // //   'error',
    // //   {
    // //     selector: 'JSXOpeningElement[name.name=ListItem] > JSXAttribute[name.name=onClick]',
    // //     message: 'ListItem onClick will not pass the correct event handlers for keyboard usage, please use onTap',
    // //   },
    // // ],
    // 'lipaix-custom-rules/no-direct-import-from-monolith': 'error',
    // 'lipaix-custom-rules/no-invalid-frontend-package-imports': 'error',
    // // 'lipaix-custom-rules/design-system/a11y-ensure-accessible-name': 'error',
    // // 'lipaix-custom-rules/design-system/a11y-listitem-restricted-syntax': 'error',
    // // 'lipaix-custom-rules/design-system/a11y-no-autofocus': 'error',
    // // 'lipaix-custom-rules/design-system/no-use-alpha-components': 'error',
    // // 'lipaix-custom-rules/design-system/no-internal-lib-import': 'error',
    // // 'lipaix-custom-rules/design-system/no-use-deprecated-classname': 'error',
    // // 'lipaix-custom-rules/design-system/no-tracking-on-oxygen-component': 'error',
    // // 'lipaix-custom-rules/no-classname-on-oxygen-component': 'error',
    // 'newline-per-chained-call': ['error', { ignoreChainWithDepth: 5 }],
    // 'lipaix-custom-rules/no-tesseract-worker-version-mismatch': 'error',
    // // 'lipaix-custom-rules/design-system/a11y-warning-popover-on-hover': 'error',
    // // 'lipaix-custom-rules/design-system/no-html-tag-when-oxygen-component-exists': 'error',
    // 'lipaix-custom-rules/no-declaration-file': 'error',
    // // 'lipaix-custom-rules/a11y-ensure-accessible-name-on-oxygen-component-wrapper': 'error',
    // 'lipaix-custom-rules/no-classname-on-oxygen-component-wrapper': 'error',
    'no-use-before-define': ['error', { functions: false, classes: false }],
    'no-restricted-syntax': 'error',
    'no-sequences': 'error',
    'consistent-return': 'error',
    'no-return-assign': ['error', 'except-parens'],
    'import/no-named-as-default': 'off',
    'import/first': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-anonymous-default-export': [
      'error',
      {
        allowObject: true,
      },
    ],
    'import/prefer-default-export': 'off',
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['engines/e2ee/*', '!engines/e2ee/public', '!engines/e2ee/test-helpers'],
            message:
              'Only imports from public interface of e2ee are allowed. Use engines/e2ee/public for runtime dependencies or engines/e2ee/test-helpers for test dependencies',
          },
          {
            group: [
              '**/inlined-external-packages/react-bootstrap/**/*',
              '**/inlined-external-packages/react-tappable/**/*',
            ],
            message: 'Use our design system instead',
          },
          {
            group: ['js-cookie'],
            message: 'Use @lipaix/cookies instead',
          },
        ],
      },
    ],
    'no-restricted-properties': [
      'error',
      {
        object: 'account',
        property: 'product_line_key',
        message:
          'Avoid accessing the product_line_key directly, use the Product Line Variation pattern instead, see: https://lipaix.atlassian.net/l/cp/Fq1Xa7Jk',
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    // 'react/function-component-definition': [
    //   'error',
    //   {
    //     namedComponents: 'arrow-function',
    //     unnamedComponents: 'arrow-function',
    //   },
    // ],
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-variables',
          '/^static (get|set) /',
          'static-methods',
          'constructor',
          'instance-variables',
          'lifecycle',
          'everything-else',
          'render',
        ],
      },
    ],
    'react/no-array-index-key': 'off',
    'react/prefer-es6-class': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-multi-comp': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/no-string-refs': 'off',
    'react/no-unused-prop-types': 'off',
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'], allow: 'as-needed' }],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/forbid-prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    // 'no-inline-styles/no-inline-styles': 2,
    // 'promise/catch-or-return': 'error',
  },
  overrides: [
    //   {
    //     files: ['packages/@lipaix/**'],
    //     rules: {
    //       'lipaix-custom-rules/no-extraneous-dependencies': [
    //         'error',
    //         {
    //           includeTypes: true,
    //           // Inherit from the root package.json
    //           packageDir: './',
    //         },
    //       ],
    //       'lipaix-custom-rules/no-relative-import-path': 'off',
    //     },
    //   },
    //   {
    //     files: ['packages/@lipaix/design-system/**'],
    //     rules: {
    //       'lipaix-custom-rules/no-relative-import-path': 'off',
    //       'import/extensions': 'off',
    //       'lipaix-custom-rules/no-direct-import-from-monolith': 'off',
    //     },
    //   },
    //   {
    //     files: ['*.ts', '*.tsx'],
    //     parser: '@typescript-eslint/parser',
    //     parserOptions: {
    //       project: 'tsconfig.eslint.json',
    //     },
    //     // extends: [''],
    //   },
    //   {
    //     files: ['react-native/**'],
    //     rules: {
    //       'lipaix-custom-rules/no-relative-import-path': 'off',
    //     },
    //   },
    //   // {
    //   //   files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    //   //   extends: ['plugin:testing-library/react', 'plugin:jest-dom/recommended'],
    //   //   rules: {
    //   //     'react/jsx-no-constructed-context-values': 'off',
    //   //     'lipaix-custom-rules/react-query/react-query-on-rails-convention': 'off',
    //   //     // https://github.com/testing-library/eslint-plugin-testing-library/pull/803
    //   //     'testing-library/await-async-events': ['off'],
    //   //     'testing-library/no-await-sync-events': ['error', { eventModules: ['fire-event'] }],
    //   //     '@typescript-eslint/no-empty-function': 'off',
    //   //     'jest/no-focused-tests': 'error',
    //   //   },
    //   // },
  ],
}
