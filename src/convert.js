const { loadRates } = require('./rates');

function convert(amount, from, to) {
  const { rates } = loadRates();
  const fromRate = rates[from.toUpperCase()];
  const toRate = rates[to.toUpperCase()];

  if (!fromRate || !toRate) {
    throw new Error(`Unsupported currency: ${!fromRate ? from : to}`);
  }

  const usdAmount = amount / fromRate;
  const converted = usdAmount * toRate;
  return Math.round(converted * 100) / 100;
}

function convertBatch(amount, from, toList) {
  const { rates } = loadRates();
  const fromRate = rates[from.toUpperCase()];

  if (!fromRate) {
    throw new Error(`Unsupported currency: ${from}`);
  }

  const usdAmount = amount / fromRate;

  return toList.map((to) => {
    const toRate = rates[to.toUpperCase()];
    if (!toRate) {
      throw new Error(`Unsupported currency: ${to}`);
    }
    const converted = usdAmount / toRate;
    return { currency: to.toUpperCase(), amount: Math.round(converted * 100) / 100 };
  });
}

module.exports = { convert, convertBatch };
