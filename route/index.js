const express = require('express')
const router = express.Router()
const db = require('../db');
const path = require('path');

router.get('/', function(req, res) {
    res.render('index');

});


// $.ajax({ url: 'http://yoursite.com/signup'
//      , type: 'GET'
//      , dataType: 'html'
//     })
// .done(function(data) {
//   $('#container').html(data);
// })
// .fail(function() {
//   console.log("Something went wrong!");
// });



module.exports = router;