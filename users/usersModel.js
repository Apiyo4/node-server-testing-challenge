const db = require('../data/db-config');

async function insert(user){
    const [id] = await db("users").insert(user);
  return db("users")
    .where({ id })
    .first();
}
function remove(id){
  return db('users')
  .delete(id)
  .where("id", id)
  .del();;
  
}
function find(){
  return db("users");
}
function findById(id){
  return db('users').where({id}).first();
}
module.exports = {insert, remove, find, findById}