module.exports = {
  env: {
    browser: true,
<<<<<<< HEAD
    es2021: true
=======
    es2021: true,
    node: true
>>>>>>> fc4bf6062d59c2fbfd38809ea261d06dcf2eba3d
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
<<<<<<< HEAD
    'react/prop-types': 'off'
=======
    'react/prop-types': 0
>>>>>>> fc4bf6062d59c2fbfd38809ea261d06dcf2eba3d
  }
}
