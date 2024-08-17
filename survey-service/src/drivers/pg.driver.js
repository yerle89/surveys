const {Pool} = require('pg');
const { pg } = require('../config')
let pgClient;

function getInstance() {
  return pgClient;
}

async function init() {
  const pool = new Pool(pg);

  pgClient = await pool.connect();
}

module.exports = {
  getInstance,
  init,
}