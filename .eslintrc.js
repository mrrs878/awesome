/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-08-01 21:39:35
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-08-01 21:47:53
 * @FilePath: \awesome\.eslintrc.js
 */
module.exports = {
  extends: [
    'airbnb',
  ],
  rules: {
    'linebreak-style': ['off', 'window'],
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
  },
  globals: {
    window: true,
  },
};
