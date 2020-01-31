const server= require('../api/server');
const Users = require('./usersModel');
const request = require('supertest');
const db = require('../data/db-config');

beforeEach(async () => {
    await db('users').truncate()
  })
describe('userRouter.js module', ()=>{
    it("Uses testing environment for DB_ENV", ()=>{
        expect(process.env.DB_ENV).toBe('testing')
    })
})