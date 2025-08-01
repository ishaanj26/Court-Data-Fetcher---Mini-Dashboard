
require('dotenv').config({ quiet: true });
const searchRoutes = require('./routes/searchRoutes');
const express = require('express');
const cors = require('cors');
// const pool = require('./db');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Test PostgreSQL connection
// app.get('/api/test-db', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT NOW()');
//     res.json({ time: result.rows[0].now });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });



app.use('/api', searchRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
