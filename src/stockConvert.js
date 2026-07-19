const { convert } = require('./convert');
const { loadStocks } = require('./stocks');

function sharesFromAmount(amount, currency, symbol) {
  const { currency: stockCurrency, stocks } = loadStocks();
  const price = stocks[symbol.toUpperCase()];

  if (!price) {
    throw new Error(`Unsupported stock symbol: ${symbol}`);
  }

  const normalizedAmount = convert(amount, currency, stockCurrency);
  return Math.round((normalizedAmount / price) * 10000) / 10000;
}

module.exports = { sharesFromAmount };
