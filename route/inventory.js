const express = require('express');
const router = express.Router();


//Inventory
router.get('/', (req, res) => {
    res.render('inventoryBook/inventory');
});

module.exports = router;