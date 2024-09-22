const { Pool } = require('pg'); // Use require('pg') if using CommonJS

const PG_URI =
  process.env.DATABASE_URI ||
  'postgresql://postgres.qjdawteymmlljerttghu:outdoor12buddies34@aws-0-us-west-1.pooler.supabase.com:6543/postgres'; // Update with your connection string

const pool = new Pool({
  connectionString: PG_URI,
});

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: async (text, params) => {
    console.log('executed query', text);
    try {
      const res = await pool.query(text, params); // Use await to get result
      return res; // Return the result
    } catch (err) {
      console.error('Database query error:', err);
      throw err; // Rethrow the error for handling in controllers
    }
  },
};
