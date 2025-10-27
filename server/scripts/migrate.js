const fs = require('fs');
const path = require('path');
const { fileURLToPath } = require('url');
const dotenv = require('dotenv');
const { Pool } = require('pg');


dotenv.config();

// sql file
const sqlPath = path.join(__dirname, '../migrations/init.sql');
const sql = fs.readFileSync(sqlPath, 'utf8');


// create PostgreSQL connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

(async () => {
  try {
    console.log('Running migration...');
    await pool.query(sql);
    console.log('Migration complete!');
  } catch (err) {
    console.error('Migration failed:', err);
  } finally {
    await pool.end();
  }
})();