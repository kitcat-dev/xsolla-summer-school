module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  globals: {
    document: false,
  },
  rules: {
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
