/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-08-01 21:52:47
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-08-01 21:53:14
 * @FilePath: \awesome\commitlint.config.js
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build', // 发布版本
        'chore', // 改变构建流程、或者增加依赖库、工具等
        'ci', // 持续集成修改
        'docs', // 文档修改
        'feat', // 新增功能
        'fix', // 修复缺陷
        'perf', // 优化相关，比如提升性能、体验
        'refactor', // 代码重构
        'revert', // 回退版本
        'style', // 样式修改
        'test', // 测试用例修改
      ],
    ],
  },
};
