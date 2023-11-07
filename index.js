require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})

app.get('/env', (req, res) => {
  return res.json({
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
  })
})