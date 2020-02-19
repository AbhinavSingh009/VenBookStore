exports.up = function(knex, Promise) {
    return knex.schema.createTable('Books', function(table) {
        table.increments('bookId');
        table.string('title').notNullable();
        table.string('author').notNullable();
        table.string('publishDate').notNullable();
        table.integer('pages').notNullable();
        table.integer('rating').notNullable();
        table.integer('stockValue').notNullable();
    }).then();
};

exports.down = function(knex, Promise) {

    return knex.schema.dropTable('Books');
};