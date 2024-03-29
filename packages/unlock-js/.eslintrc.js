const rulesToIgnore = [
  'import/no-extraneous-dependencies',
  'no-underscore-dangle',
  'no-param-reassign',
  'class-methods-use-this',
  'no-shadow',
  'eqeqeq',
  'consistent-return',
  'no-use-before-define',
  'no-return-assign',
  'no-return-await',
  'no-plusplus',
  'prefer-destructuring',
  'radix',
  'no-async-promise-executor',
  'no-promise-executor-return',
  'default-param-last',
  'prefer-promise-reject-errors',
  'prefer-const',
]

module.exports = {
  extends: ['@unlock-protocol/eslint-config'],
  plugins: ['jest'], // TODO remove once jest has been removed
  env: {
    jest: true, // TODO remove once jest has been removed
  },
  rules: {
    ...rulesToIgnore.reduce((obj, rule) => {
      return { ...obj, [rule]: 'off' }
    }, {}),
    // TODO Remove these rules once jest is gone!
    'jest/no-disabled-tests': 'warn',
    'jest/no-identical-title': 'error',
    'jest/no-focused-tests': 'error',
    'jest/prefer-expect-assertions': 'error',
  },
}
