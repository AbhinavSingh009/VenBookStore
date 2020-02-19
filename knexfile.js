module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            host: 'localhost',
            database: 'ventionbookstore',
            user: '',
            password: ''
        },
        migrations: {
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            directory: __dirname + '/db/seeds',
        },

    },
};