const searchEngine = require('../lib/search');

test('search', () => {
  const rst = searchEngine.search('咖啡');
  console.log(rst);
  expect(rst.length).toBe(1);
})
