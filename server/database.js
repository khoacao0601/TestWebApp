const pg = require('pg');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL
});

module.exports = db;
012345
6789
