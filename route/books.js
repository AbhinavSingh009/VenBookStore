const express = require('express');
const router = express.Router();

// All Books Route
router.get('/', (req, res) => {
    res.render('Books/index');
});

// New Books Route
router.get('/new', (req, res) => {
    res.render('Books/new');
});

// Create Books Route
router.post('/', (req, res) => {
    res.send(req.body);
    console.log(req.body);
    console.log(req.params);
    console.log(req);
});

module.exports = router;