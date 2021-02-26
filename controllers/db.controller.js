const pg = require("pg");

async function connect() {
  const client = new pg.Client({ database: "realtime_chat" });
  try {
    await client.connect();
  } catch (e) {
    console.log("> Error occurred when trying to connect to DB: ", e);
  }
  console.log("> Successfully connected to DB");
}

module.exports = { connect };
