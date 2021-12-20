
const path = require('path');

process.chdir(path.join(__dirname, 'smoke/template'));

// 运行单元测试
describe('build webpack test case', () => {
  require('./unit/webpack-base-test');
});
