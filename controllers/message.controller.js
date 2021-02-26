const dbService = require("../services/db.service");

async function storeMessage(content) {
  const result = await dbService.query(
    `INSERT INTO messages (content) VALUES ('${content}')`
  );
  console.log(result);
}

async function getMessages() {
  const result = await dbService.query(`SELECT * FROM messages`);
  return result.rows;
}

module.exports = { storeMessage, getMessages };
