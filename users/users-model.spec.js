require('dotenv').config(); // load .env variables
const db = require('../database/dbConfig.js');
const Users = require('./users-model.js');


describe('users model', () => {
    beforeEach(async () => {
        await db('users').truncate();//resets the database - cleans it up 
    });
    // it('db environement set to testing', () => {
    //     expect(process.env.DB_ENV).toBe('testing');
    // })

    describe('add()', () => {
        it('should add a user into the db', async () => {
            await Users.add({ username: 'sailor', password: 'pass' }) //using the api
            const users = await db('users')//directly looking into the db
            expect(users).toHaveLength(1)

        })
    })

    describe('find()', () => {
        it('should get all users from the db', () => {
            return Users.find()
                .then(users => {
                    expect(users).toHaveLength(0)
                })
        })
    })


});