const express = require('express')
const router = express.Router()
const db = require('knex');
const path = require('path');


var allbooks = db.select().from('Books').then(function(data) {
    return data;
});