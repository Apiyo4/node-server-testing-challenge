const db = require('../data/db-config');

async function insert(user){
    const [id] = await db("users").insert(user);
  return db("users")
    .where({ id })
    .first();
}
module.exports = {insert}