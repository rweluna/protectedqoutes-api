const crypto = require('crypto');

/**
 * Generate a secure random API key and its SHA-256 hash.
 * @returns {Object} { apiKey, keyHash }
 */
function generateApiKey() {
  // Generate a 32-byte (256-bit) random string and encode it in hex
  const apiKey = crypto.randomBytes(32).toString('hex');

  // Hash it for secure storage
  const keyHash = crypto.createHash('sha256').update(apiKey).digest('hex');

  return { apiKey, keyHash };
}

/**
 * Hash an incoming API key for comparison
 * @param {string} key - raw API key from the request
 * @returns {string} - SHA-256 hash
 */
function hashApiKey(key) {
  return crypto.createHash('sha256').update(key).digest('hex');
}

module.exports = { generateApiKey, hashApiKey };
