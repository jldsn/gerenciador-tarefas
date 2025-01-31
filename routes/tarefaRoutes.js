const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

router.post('/', tarefaController.criarTarefa);
router.get('/', tarefaController.listarTarefas);
router.get('/:id', tarefaController.buscarTarefa);
router.put('/:id', tarefaController.atualizarTarefa);
router.delete('/:id', tarefaController.excluirTarefa);

module.exports = router;
