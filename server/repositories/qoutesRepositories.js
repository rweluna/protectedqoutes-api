const db = require('../config/db.js');

const getAllQoutes = async () => {
    const result = await db.query('SELECT * FROM quotes ORDER BY id');
    return result.rows;
};

module.exports = { getAllQoutes };