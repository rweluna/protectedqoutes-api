const db = require('../config/db.js');
const { hashApiKey } = require('../helpers/apiKeyUtils.js');
const crypto = require('crypto');
const pool = require('../config/db.js');

const findapiKey = async (hashedKey) => {
  try {
    const result = await pool.query(
      'SELECT * FROM api_keys WHERE key_hash = $1', 
      [hashedKey]
    );
    return result.rows[0];
  } catch (error) {
    console.error('DB findApiKey error:', error.message);
    throw error;
  }
};

module.exports = { findapiKey };