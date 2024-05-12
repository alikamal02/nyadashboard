const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost', // Change to your host, e.g., '127.0.0.1' or remote host
    database: 'formd',
    password: 'AAJM2Eu3Mwwzotp37t',
    port: 5432, // Change to your PostgreSQL port if different
});

pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error acquiring client', err.stack);
    }
    client.query('SELECT NOW()', (err, result) => {
        release();
        if (err) {
            return console.error('Error executing query', err.stack);
        }
        console.log(result.rows);
        pool.end(); // Closes the connection pool
    });
});
