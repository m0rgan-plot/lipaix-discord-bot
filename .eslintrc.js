module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    babelOptions: {
      plugins: ['@babel/plugin-syntax-import-assertions'],
    },
  },
  env: {
    browser: true,
    jest: true,
    node: true
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
    'import',
    'jsx-a11y',
    '@typescript-eslint',
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
    'no-constant-binary-expression': 'error', // should be default in eslint 9, so can be removed after upgrade
    'no-prototype-builtins': 'off',
    'no-unexpected-multiline': 'off',
    'no-plusplus': 'off',
    'prefer-destructuring': 'off',
    'max-classes-per-file': 'off',
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
  },
  overrides: [
  ],
}
