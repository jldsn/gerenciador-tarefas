const express = require('express');
const cors = require('cors');
const mongoose = require('./config/database');
const tarefaRoutes = require('./routes/tarefaRoutes');

const app = express();
app.use(express.json());
app.use(cors());

// Rotas
app.use('/tarefas', tarefaRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
