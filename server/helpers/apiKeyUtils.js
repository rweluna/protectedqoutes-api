const crypto = require('crypto');

function generateApiKey() {
  const apiKey = crypto.randomBytes(32).toString('hex');
  const keyHash = crypto.createHash('sha256').update(apiKey).digest('hex');

  return { apiKey, keyHash };
}

function hashApiKey(key) {
  return crypto.createHash('sha256').update(key).digest('hex');
}

module.exports = { generateApiKey, hashApiKey };
