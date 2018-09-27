const express = require('express');
const router = express.Router();

//sempre que entrar no "/", vai requerer o main.js
router.get('/', require('./main'));
router.post('/', require('./create'));
router.get('/name', require('./find_name'));
router.get('/:id', require('./show'));

module.exports = router
