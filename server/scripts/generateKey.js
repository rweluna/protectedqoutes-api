const db = require('../config/db.js');
const { generateApiKey } = require('../utils/apiKeyUtils.js');

(async () => {
  try {
    const { apiKey, keyHash } = generateApiKey();

    // Insert the hash, not the raw key
    await db.query(
      'INSERT INTO api_keys (name, key_hash) VALUES ($1, $2)',
      ['Test Key', keyHash]
    );

    console.log('API key generated and saved!');
    console.log('Your API key (save this securely):', apiKey);
    process.exit(0);
  } catch (error) {
    console.error('Key generation failed:', error.message);
    process.exit(1);
  }
})();
