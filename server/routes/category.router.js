const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    // return all categories
    const queryText = `SELECT * FROM category ORDER BY name ASC`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    const queryText = `DELETE FROM category WHERE id = $1;`;
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.sendStatus(200);
        }).catch(error => {
            console.log('error deleting category', error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    pool.query(`INSERT INTO category (name) VALUES ($1);`, [req.body.category])
        .then(result => {
            res.sendStatus(200);
        }).catch(error => {
            console.log(`error adding catgory`, error);
        });
});

module.exports = router;
