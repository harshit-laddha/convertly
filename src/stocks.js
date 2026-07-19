const fs = require('fs');
const path = require('path');

const STOCKS_PATH = path.join(__dirname, '..', 'data', 'stocks.json');

function loadStocks() {
  const raw = fs.readFileSync(STOCKS_PATH, 'utf-8');
  return JSON.parse(raw);
}

module.exports = { loadStocks, STOCKS_PATH };
