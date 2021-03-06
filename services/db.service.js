const { Pool } = require("pg");
const dbConfig = require("../config/db.config");
const pool = new Pool({
  connectionString: dbConfig.dbUri,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  query: (text, params, callback) => {
    console.log("INCOMING QUERY: '", text, "'");
    return pool.query(text, params, callback);
  },
};
