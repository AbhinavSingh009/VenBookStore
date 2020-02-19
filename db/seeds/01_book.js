exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('Books').del()
        .then(function() {
            // Inserts seed entries
            return knex('Books').insert([
                { bookId: 1, title: 'The Jocker', author: 'Abhinav', publishDate: '04-05-2018', pages: 300, rating: 3, stockValue: 10 },
                { bookId: 2, title: 'Little Women', author: 'Louisa May Alcott', publishDate: '02-12-1868', pages: 759, rating: 4, stockValue: 20 },
                { bookId: 3, title: 'The House on the Cliff', author: 'Franklin W. Dixon', publishDate: '15-06-1927', pages: 192, rating: 3, stockValue: 30 }
            ]);
        });
};