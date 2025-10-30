const crypto = require('crypto');
const {findapiKey} = require('../repositories/apiKeyRepositories.js');

const apiKeyAuth = async (req, res, next) => {
    try {
        const apiKey = req.header('x-api-key');

        if (!apiKey) {
            return res.status(401).json({error: 'Missing api key'});
        }
        // hash the key before look up
        const hashedKey = crypto.createHash('sha256').update(apiKey).digest('hex');
        
        // check the db for this hashed key
        const validKey = await findapiKey(hashedKey);

        if (!hashedKey){
            return res.status(401).json({error: 'Invalid api key'});
        }

        next();
    } catch (error) {
        console.error('Auth error', error.message);
        res.status(500).json({ error: 'Internal server error'});
    }
};

module.exports = { apiKeyAuth };