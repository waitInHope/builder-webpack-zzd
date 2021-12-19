
const assert = require('assert');

describe('webpack.base.js test case', () => {
  const baseConfig = require('../../lib/webpack.base');

  it('entry', () => {
    assert.equal(baseConfig.entry.index, '/Users/didi/waitInHopeRepo/mywebpack/builder-webpack/test/smoke/template/src/index/index.js');
    assert.equal(baseConfig.entry.search, '/Users/didi/waitInHopeRepo/mywebpack/builder-webpack/test/smoke/template/src/search/index.js');
  });
});
