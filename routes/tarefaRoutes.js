const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

router.get('/', (req, res) => {
  res.send('Bem-vindo ao Gerenciador de Tarefas! Acesse /tarefas para ver as tarefas.');
});

router.post('/tarefas', tarefaController.criarTarefa);
router.get('/tarefas', tarefaController.listarTarefas);
router.get('/tarefas/:id', tarefaController.buscarTarefa);
router.put('/tarefas/:id', tarefaController.atualizarTarefa);
router.delete('/tarefas/:id', tarefaController.excluirTarefa);

module.exports = router;
