const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


router.get('/', (req, res) => {
    let position = req.query.position;
    let company = req.query.company;
    const queryText =  `(SELECT *
                        FROM entries
                        WHERE id = 1 AND subsection = 1 AND index_spot = ${Math.floor(Math.random() * 2) + 1})
                        UNION
                        (SELECT *
                            FROM entries
                            WHERE id = 2 AND subsection = 1 AND index_spot = ${Math.floor(Math.random() * 2) + 1})
                        UNION    
                        (SELECT *
                            FROM entries
                            WHERE id = 2 AND subsection = 2 AND index_spot = ${Math.floor(Math.random() * 6) + 1})
                        UNION    
                        (SELECT *
                            FROM entries
                            WHERE id = 2 AND subsection = 3 AND index_spot = ${Math.floor(Math.random() * 4) + 1})
                        UNION
                        (SELECT *
                            FROM entries
                            WHERE id = 2 AND subsection = 4)
                        UNION    
                        (SELECT *
                            FROM entries
                            WHERE id = 3 AND subsection = 1 AND index_spot = ${Math.floor(Math.random() * 2) + 1})
                        UNION    
                        (SELECT *
                            FROM entries
                            WHERE id = 3 AND subsection = 2)
                        UNION    
                        (SELECT *
                            FROM entries
                            WHERE id = 3 AND subsection = 3)
                        UNION    
                        (SELECT *
                            FROM entries
                            WHERE id = 3 AND subsection = 4)
                        UNION    
                        (SELECT *
                            FROM entries
                            WHERE id = 3 AND subsection = 5)
                        UNION    
                        (SELECT *
                            FROM entries
                            WHERE id = 4 AND subsection = 1)
                        UNION
                            (SELECT *
                            FROM entries
                            WHERE id = 4 AND subsection = 2 AND index_spot = ${Math.floor(Math.random() * 2) + 1})
                        UNION
                            (SELECT *
                            FROM entries
                            WHERE id = 4 AND subsection = 3 AND index_spot = ${Math.floor(Math.random() * 2) + 1})
                        UNION
                            (SELECT *
                            FROM entries
                            WHERE id = 4 AND subsection = 4 AND index_spot = ${Math.floor(Math.random() * 2) + 1})
                        UNION
                            (SELECT *
                            FROM entries
                            WHERE id = 5 AND subsection = 1 AND index_spot = ${Math.floor(Math.random() * 2) + 1})
                        UNION
                            (SELECT *
                            FROM entries
                            WHERE id = 5 AND subsection = 2 AND index_spot = ${Math.floor(Math.random() * 12) + 1})
                        UNION
                            (SELECT *
                            FROM entries
                            WHERE id = 5 AND subsection = 2 AND index_spot = ${Math.floor(Math.random() * 12) + 1})
                        UNION
                            (SELECT *
                            FROM entries
                            WHERE id = 5 AND subsection = 2 AND index_spot = ${Math.floor(Math.random() * 12) + 1})
                        UNION
                            (SELECT *
                            FROM entries
                            WHERE id = 6 AND subsection = 1)
                        UNION
                            (SELECT *
                            FROM entries
                            WHERE id = 6 AND subsection = 2)
                        UNION
                            (SELECT *
                            FROM entries
                            WHERE id = 6 AND subsection = 3 AND index_spot = ${Math.floor(Math.random() * 2) + 1})
                        UNION
                            (SELECT *
                            FROM entries
                            WHERE id = 6 AND subsection = 4)    
                        ORDER BY id ASC, subsection ASC;`
    pool.query(queryText)
        .then((result) => {
            console.log('results: ', result.rows);
            let results = result.rows;
            for(result of results) {
                if(result.entry.includes('${position}') || result.entry.includes('${company}')){
                    result.entry = result.entry.replace('${position}', `${position}`)
                    result.entry = result.entry.replace('${company}', `${company}`);
                    console.log(result.entry);
                }
            }
           
            res.send(results);
        })
        .catch((err) => {
            console.log('error:', err);
            res.sendStatus(500);
        })
});

module.exports = router;