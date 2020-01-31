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
 describe('delete()', ()=>{
    it('returns a value when user is deleted', async ()=>{
        await Users.insert({username:'admin1', password:"1234", department:"sales"})
        let noUser = await Users.remove(1);
        expect(noUser).toBeTruthy();
    })
     it(' returns number of users deleted', async ()=>{
         await Users.insert({username:'admin1', password:"1234", department:"sales"})
         let noUser = await Users.remove(1);
         expect(noUser).toBe(1);
     })
     
 })
 describe('find()', ()=>{
     it('retruns all data in database', async()=>{
        await Users.insert({username:'admin1', password:"1234", department:"sales"})
        await Users.insert({username:'admin2', password:"1234", department:"sales"})
        const users = await Users.find()
        expect(users).toHaveLength(2);
     })
 })
 describe('findById', ()=>{
    it('can find a user in the db given an id', async()=>{
        await Users.insert({username:'admin1', password:"1234", department:"sales"})
        await Users.insert({username:'admin2', password:"1234", department:"sales"})
        const user = await Users.findById(1);
        expect(user).toMatchObject({username:'admin1', password:"1234", department:"sales"})
    })
 })
})