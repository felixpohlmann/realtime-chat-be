const { Pool } = require("pg");
const pool = new Pool({ database: "realtime_chat" });

module.exports = {
  query: (text, params, callback) => {
    console.log("INCOMING QUERY: '", text, "'");
    return pool.query(text, params, callback);
  },
};

