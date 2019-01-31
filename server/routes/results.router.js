const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');
const API_KEY = process.env.API_KEY;
const BASE_URL = `https://api.giphy.com/v1/gifs/search?api_key=&q=&limit=25&offset=0&rating=R&lang=en`;

const router = express.Router();

const router = express.Router();


router.get('/', (req, res) => {
    axios({
        method: 'GET',
        url: `${BASE_URL}`
    }).then((response) => {
        res.send(response.data.data)
    }).catch((error) => {
        console.log('Error in results GET');
        res.sendStatus(500);
    });
});

module.exports = router;