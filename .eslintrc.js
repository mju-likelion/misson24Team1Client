module.exports = {
  extends: ['alloy', 'alloy/react', 'prettier'],
  plugins: ['react', 'import', 'simple-import-sort', 'prefer-arrow'],
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    // Your environments (which contains several predefined global variables)
    browser: true,
    node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
  },
  rules: {
    // Customize your rules
    'import/first': 2,
    'import/exports-last': 2,
    'import/no-duplicates': 2,
    'import/order': 2,
    'import/newline-after-import': 2,
    'import/prefer-default-export': 2,
    'simple-import-sort/imports': 2,
    'simple-import-sort/exports': 2,
    'array-callback-return': 2,
    'arrow-body-style': 2,
    'prefer-arrow-callback': 2,
    'react/destructuring-assignment': 2,
    'react/button-has-type': 2,
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
    ],
    'prefer-arrow/prefer-arrow-functions': [
      2,
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
  },
};
