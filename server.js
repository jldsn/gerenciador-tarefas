const express = require('express');
const cors = require('cors');
const mongoose = require('./config/database');
const tarefaRoutes = require('./routes/tarefaRoutes');

const app = express();
app.use(express.json());
app.use(cors());
