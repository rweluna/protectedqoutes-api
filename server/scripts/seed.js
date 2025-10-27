const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const db = require('../config/db.js');

dotenv.config();

const sqlPath = path.join(__dirname, '../seed/seed.sql');

// read SQL file content
const sql = fs.readFileSync(sqlPath, 'utf8');

(async () => {
  try {
    await db.query(sql);
    console.log('Database seeded successfully.');
    process.exit(0);
  } catch (err) {
    console.error('Seeding failed:', err.message);
    process.exit(1);
  }
})();
