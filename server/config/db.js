const pg = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const { Pool } = pg;

// Create a connection pool for efficiency and scalability
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

// testing
pool.connect()
  .then(client => {
    console.log('Connected to PostgreSQL');
    client.release();
  })
  .catch(err => console.error('PostgreSQL connection error:', err.message));


module.exports = {
  query: (text, params) => pool.query(text, params),
};
