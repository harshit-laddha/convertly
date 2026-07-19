const { test } = require('node:test');
const assert = require('node:assert/strict');
const { sharesFromAmount } = require('../src/stockConvert');

test('calculates GOOGL shares from USD', () => {
  assert.equal(sharesFromAmount(1396.9, 'USD', 'GOOGL'), 10);
});

test('calculates GOOGL shares from a non-USD currency', () => {
  assert.equal(sharesFromAmount(1000, 'EUR', 'GOOGL'), sharesFromAmount(1098.9, 'USD', 'GOOGL'));
});

test('is case-insensitive on stock symbol', () => {
  assert.equal(sharesFromAmount(1396.9, 'USD', 'googl'), 10);
});

test('throws on unsupported stock symbol', () => {
  assert.throws(() => sharesFromAmount(100, 'USD', 'AAPL'));
});
