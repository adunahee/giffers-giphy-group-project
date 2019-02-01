const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');
const API_KEY = process.env.API_KEY;
const BASE_URL = `https://api.giphy.com/v1/gifs/search`;

const router = express.Router();

router.get('/:query', (req, res) => {
    axios({
        method: 'GET',
        url: `${BASE_URL}?q=${req.params.query}&api_key=${API_KEY}&limit=24&offset=0&rating=R&lang=en`
    }).then((response) => {
        res.send(response.data.data)
    }).catch((error) => {
        console.log('Error in results GET', error);
        res.sendStatus(500);
    });
});

module.exports = router;