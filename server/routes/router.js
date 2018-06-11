const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


router.get('/', (req, res) => {
    const queryText =  `(SELECT *
                        FROM entries
                        WHERE id = 1
                        ORDER BY decimal ASC
                        LIMIT 1)
                        UNION
                        (SELECT *
                        FROM entries
                        WHERE id = 2
                        ORDER BY decimal ASC
                        LIMIT 4)
                        UNION
                        (SELECT *
                        FROM entries
                        WHERE id = 3
                        ORDER BY decimal ASC
                        LIMIT 4)
                        UNION
                        (SELECT *
                        FROM entries
                        WHERE id = 4
                        ORDER BY decimal ASC
                        LIMIT 4)
                        UNION
                        (SELECT *
                        FROM entries
                        WHERE id = 5
                        ORDER BY decimal ASC
                        LIMIT 3)
                        UNION
                        (SELECT *
                        FROM entries
                        WHERE id = 6
                        ORDER BY decimal ASC
                        LIMIT 3)
                        ORDER BY id ASC, decimal ASC;`
                      
    pool.query(queryText)
        .then((result) => {
            console.log('results: ', result.rows);
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('error:', err);
            res.sendStatus(500);
        })
});

module.exports = router;