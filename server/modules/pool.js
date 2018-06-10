const pg = require('pg');
const Pool = pg.Pool;
const config = {
    database: 'cover_letter',
    host: 'localhost'
}
const pool = new Pool(config);
module.exports = pool;