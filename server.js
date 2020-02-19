const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const indexRouter = require('./route/index');
const booksRouter = require('./route/books');
const inventoryRouter = require('./route/inventory');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layouts');

app.use(expressLayouts);


app.use(express.static('public'));
var db = require('./db');



app.use('/', indexRouter);
app.use('/Books', booksRouter);
app.use('/inventoryBook', inventoryRouter);

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.port || 8080);


// All Books Route

// router.get('/Books', function(req, res) {
//     res.sendFile(path.join(__dirname + '/view/Books.html'));

//     console.log('It was called really!!!');
// });


// //Create new Book
// router.post('/', function(req, res) {
//     console.log(req.body);
//     console.log(req.query);
//     console.log(req.params);
//     res.send(req.body);
// })

// //add the router