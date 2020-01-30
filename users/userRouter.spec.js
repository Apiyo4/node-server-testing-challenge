const server= require('../api/server');

const request = require('supertest');

describe('userRouter.js module', ()=>{
    it("Uses testing environment for DB_ENV",()=>{
        expect(process.env.DB_ENV).toBe('testing')
    })
    describe('/users', ()=>{
        it('returns a 200 OK response superset', ()=>{
            return request(server).get('/users')
            .expect(200)
        })
    })

})