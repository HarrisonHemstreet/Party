const { Pool, Client } = require('pg');
require('dotenv').config()

const pool = new Pool({
  user: process.env.USERNAME,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  pool.end();
});

const client = new Client({
  user: process.env.USERNAME,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  client.end();
});

// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

// export default handler;