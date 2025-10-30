const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const qoutesRoutes = require('./routes/qoutesRoutes.js')

dotenv.config();

app.use(express.json());
app.use('/api/qoutes', qoutesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));