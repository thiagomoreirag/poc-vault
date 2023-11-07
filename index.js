require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})

app.get('/env', (req, res) => {
  const envs = {
    NODE_ENV,
    PORT,
    DEMO_ENV,
    DB_USER,
    DB_PASS
  } = process.env

  return res.json({ envs })
})