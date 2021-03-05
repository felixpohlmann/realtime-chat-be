const dbService = require("../services/db.service");

async function storeMessage(req, res) {
  const { content, username } = req.body;
  const result = await dbService.query(
    `INSERT INTO messages (content, sentby) VALUES ('${content}','${username}')`
  );
  res.json(result);
}

async function getMessages(req, res) {
  const result = await dbService.query(`SELECT * FROM messages`);
  res.json(result.rows);
}

module.exports = { storeMessage, getMessages };
