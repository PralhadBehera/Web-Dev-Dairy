// // const { Client } = require('pg');
// // const express = require('express');

// // const Check_Connection = express.Router();
// // const client = new Client({
// //     user: 'postgres',
// //     host: 'localhost',
// //     database: 'Web_Scraper',
// //     password: 'root',
// //     port: 5432,
// // });

// // Check_Connection.get('/Check_Connection',(req,res)=>{
// //     client.connect()
// //     .then(() => {
// //         res.send('PostgreSQL connected');
// //     })
// //     .catch(err => {
// //         res.status(500).send('Unable to connect to PostgreSQL');
// //     });
// // })

// // module.exports=Check_Connection;


// const express = require('express');
// const bodyParser = require('body-parser');
// const { Client } = require('pg');

// const app = express();

// // Body parser middleware to parse JSON request body
// app.use(bodyParser.json());

// const client = new Client({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'Web_Scraper',
//     password: 'root',
//     port: 5432,
// });

// // Connect to the database
// client.connect()
//     .then(() => {
//         console.log('PostgreSQL connected...');
//     })
//     .catch(err => {
//         console.error('Connection error:', err);
//     });

// // Create a new record
// app.post('/api/users', (req, res) => {
//     const { username, email, provider, password, reset_password_token, confirmation_token, confirmed, blocked, created_at, updated_at, created_by_id, updated_by_id } = req.body;

//     // Insert data into the database
//     const query = 'INSERT INTO up_users (username, email, provider, password, reset_password_token, confirmation_token, confirmed, blocked, created_at, updated_at, created_by_id, updated_by_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *'; 
//     const values = [username, email, provider, password, reset_password_token, confirmation_token, confirmed, blocked, created_at, updated_at, created_by_id, updated_by_id];

//     client.query(query, values, (err, result) => {
//         if (err) {
//             console.error('Error executing query:', err);
//             res.status(500).json({ error: 'Error creating record in the database' });
//         } else {
//             console.log('Record created successfully:', result.rows[0]);
//             res.status(201).json(result.rows[0]); // Send the created record as a response
//         }
//     });
// });

// module.exports = app; 

const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');

const router = express.Router(); // Create a new router

// Body parser middleware to parse JSON request body
router.use(bodyParser.json());

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'Web_Scraper',
    password: 'root',
    port: 5432,
});

// Connect to the database
client.connect()
    .then(() => {
        console.log('PostgreSQL connected...');
    })
    .catch(err => {
        console.error('Connection error:', err);
    });

// Create a new record
router.post('/api/users', (req, res) => {
    const { username, email, provider, password, reset_password_token, confirmation_token, confirmed, blocked, created_at, updated_at, created_by_id, updated_by_id } = req.body;

    const query = 'INSERT INTO up_users (username, email, provider, password, reset_password_token, confirmation_token, confirmed, blocked, created_at, updated_at, created_by_id, updated_by_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *'; 
    const values = [username, email, provider, password, reset_password_token, confirmation_token, confirmed, blocked, created_at, updated_at, created_by_id, updated_by_id];

    client.query(query, values, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Error creating record in the database' });
        } else {
            console.log('Record created successfully:', result.rows[0]);
            res.status(201).json(result.rows[0]);
        }
    });
});

// Read all records
router.get('/api/users', (req, res) => {
    const query = 'SELECT * FROM up_users';

    client.query(query, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Error fetching records from the database' });
        } else {
            console.log('Records fetched successfully:', result.rows);
            res.status(200).json(result.rows);
        }
    });
});

// Read a single record by ID
router.get('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    const query = 'SELECT * FROM up_users WHERE id = $1';
    const values = [userId];

    client.query(query, values, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Error fetching record from the database' });
        } else {
            if (result.rows.length === 0) {
                res.status(404).json({ error: 'Record not found' });
            } else {
                console.log('Record fetched successfully:', result.rows[0]);
                res.status(200).json(result.rows[0]);
            }
        }
    });
});

// Update a record by ID
router.put('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    const { username, email, provider, password, reset_password_token, confirmation_token, confirmed, blocked, created_at, updated_at, created_by_id, updated_by_id } = req.body;

    const query = 'UPDATE up_users SET username = $1, email = $2, provider = $3, password = $4, reset_password_token = $5, confirmation_token = $6, confirmed = $7, blocked = $8, created_at = $9, updated_at = $10, created_by_id = $11, updated_by_id = $12 WHERE id = $13 RETURNING *'; 
    const values = [username, email, provider, password, reset_password_token, confirmation_token, confirmed, blocked, created_at, updated_at, created_by_id, updated_by_id, userId];

    client.query(query, values, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Error updating record in the database' });
        } else {
            if (result.rows.length === 0) {
                res.status(404).json({ error: 'Record not found' });
            } else {
                console.log('Record updated successfully:', result.rows[0]);
                res.status(200).json(result.rows[0]);
            }
        }
    });
});

// Delete a record by ID
router.delete('/api/users/:id', (req, res) => {
    const userId = req.params.id;

    const query = 'DELETE FROM up_users WHERE id = $1 RETURNING *';
    const values = [userId];

    client.query(query, values, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Error deleting record from the database' });
        } else {
            if (result.rows.length === 0) {
                res.status(404).json({ error: 'Record not found' });
            } else {
                console.log('Record deleted successfully');
                res.status(204).send(); // No content to send
            }
        }
    });
});

module.exports = router; // Export the router
