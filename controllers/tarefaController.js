const Tarefa = require('../models/Tarefa');

exports.criarTarefa = async (req, res) => {
  try {
    const { titulo, descricao, status, prioridade, data_vencimento } = req.body;
    if (!titulo || !status) {
      return res.status(400).json({ erro: 'Título e status são obrigatórios' });
    }
    const novaTarefa = new Tarefa({ titulo, descricao, status, prioridade, data_vencimento });
    await novaTarefa.save();
    res.status(201).json(novaTarefa);
  } catch (error) {
    res.status(400).json({ erro: 'Erro ao criar tarefa', detalhes: error.message });
  }
};

exports.listarTarefas = async (req, res) => {
  try {
    const { status, prioridade } = req.query;
    const filtro = {};
    if (status) filtro.status = status;
    if (prioridade) filtro.prioridade = prioridade;
    const tarefas = await Tarefa.find(filtro);
    res.json(tarefas);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar tarefas', detalhes: error.message });
  }
};

exports.buscarTarefa = async (req, res) => {
  try {
    const tarefa = await Tarefa.findById(req.params.id);
    if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada' });
    res.json(tarefa);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar tarefa', detalhes: error.message });
  }
};

exports.atualizarTarefa = async (req, res) => {
  try {
    const tarefaAtualizada = await Tarefa.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!tarefaAtualizada) return res.status(404).json({ erro: 'Tarefa não encontrada' });
    res.json(tarefaAtualizada);
  } catch (error) {
    res.status(400).json({ erro: 'Erro ao atualizar tarefa', detalhes: error.message });
  }
};

exports.excluirTarefa = async (req, res) => {
  try {
    const tarefaRemovida = await Tarefa.findByIdAndDelete(req.params.id);
    if (!tarefaRemovida) return res.status(404).json({ erro: 'Tarefa não encontrada' });
    res.json({ mensagem: 'Tarefa removida com sucesso' });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao excluir tarefa', detalhes: error.message });
  }
};
