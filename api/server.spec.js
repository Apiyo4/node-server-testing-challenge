const server= require('./server');

const request = require('supertest');

describe('server.js module', ()=>{
    it("Uses testing environment for DB_ENV",()=>{
        expect(process.env.DB_ENV).toBe('testing')
    })
    describe('/', ()=>{
        it('returns a 200 OK response', async()=>{
            const res = await request(server).get('/')
            expect(res.status).toBe(200)
        })
    })
})