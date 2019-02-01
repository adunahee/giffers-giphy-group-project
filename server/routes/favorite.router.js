const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = `SELECT * 
                      FROM favorites 
                      ORDER BY favorites.id`;
  pool.query(queryText).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error complete Favorite GET', error);
    res.sendStatus(500);
  })
});

// add a new favorite 
router.post('/', (req, res) => {
  pool.query(`INSERT INTO "favorites" ("url")
  VALUES ($1);`, [req.body.url]).then(response => {
    res.sendStatus(200);
  }).catch(error => {
    console.log('error while posting favorite', error);
    res.sendStatus(500);
  })
});

// update given favorite with a category id
router.put('/', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  const queryText = 'UPDATE favorites SET category_id = $1 WHERE id = $2;';
  pool.query(queryText, [req.body.category_id, req.body.fav_id])
    .then(response => {
      res.sendStatus(200);
    }).catch(error => {
      console.log('error set favorite category', error);
      res.sendStatus(500);
    })
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
