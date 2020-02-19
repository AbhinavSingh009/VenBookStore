const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        database: 'ventionbookstore'
    }
});

module.exports = knex;