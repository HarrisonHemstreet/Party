const { Pool, Client } = require("pg");
const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

const credentials = {
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
};

// Connect with a connection pool.

async function poolDemo() {
  const pool = new Pool(credentials);
  const now = await pool.query("SELECT NOW()");
  await pool.end();

  return now;
}

// Connect with a client.

async function clientDemo() {
  const client = new Client(credentials);
  await client.connect();
  const now = await client.query("SELECT NOW()");
  await client.end();

  return now;
}

// Use a self-calling function so we can use async / await.

(async () => {
  const poolResult = await poolDemo();
  console.log("Time with pool: " + poolResult.rows[0]["now"]);

  const clientResult = await clientDemo();
  console.log("Time with client: " + clientResult.rows[0]["now"]);
})();