const db = require('../data/db-config');
const Users = require('./usersModel');


beforeEach(async () => {
    await db('users').truncate()
  })

describe('UsersModel', ()=>{
 describe('insert()', ()=>{
     it('inserts 2 users', async()=>{
        await Users.insert({username:'admin1', password:"1234", department:"sales"})
        await Users.insert({username:'admin2', password:"1234", department:"sales"})
        const users = await db('users');
        expect(users).not.toHaveLength(1);
     })
     it('ensures user inserted exists', async()=>{
        const user = await Users.insert({ username:'admin1', password:"1234", department:"sales"})
        expect(user).toMatchObject({username:'admin1', password:"1234", department:"sales" })

     })
 })
})