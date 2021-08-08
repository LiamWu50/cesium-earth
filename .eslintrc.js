module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'off' : 'off'
  },
  globals: {
    cesiumViewer: 'writable',
    CesiumApi: 'writable'
  }
}
