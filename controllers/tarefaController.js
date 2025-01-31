const Tarefa = require('../models/Tarefa');

exports.criarTarefa = async (req, res) => {
  try {
    const { titulo, descricao, status, data_vencimento } = req.body;
    if (!titulo || !status) {
      return res.status(400).json({ erro: 'Título e status são obrigatórios' });
    }
    const novaTarefa = new Tarefa({ titulo, descricao, status, data_vencimento });
    await novaTarefa.save();
    res.status(201).json(novaTarefa);
  } catch (error) {
    res.status(400).json({ erro: 'Erro ao criar tarefa' });
  }
};

exports.listarTarefas = async (req, res) => {
  try {
    const { status } = req.query;
    const filtro = status ? { status } : {};
    const tarefas = await Tarefa.find(filtro);
    res.json(tarefas);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar tarefas' });
  }
};

exports.buscarTarefa = async (req, res) => {
  try {
    const tarefa = await Tarefa.findById(req.params.id);
    if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada' });
    res.json(tarefa);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar tarefa' });
  }
};

exports.atualizarTarefa = async (req, res) => {
  try {
    const tarefaAtualizada = await Tarefa.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!tarefaAtualizada) return res.status(404).json({ erro: 'Tarefa não encontrada' });
    res.json(tarefaAtualizada);
  } catch (error) {
    res.status(400).json({ erro: 'Erro ao atualizar tarefa' });
  }
};

exports.excluirTarefa = async (req, res) => {
  try {
    const tarefaRemovida = await Tarefa.findByIdAndDelete(req.params.id);
    if (!tarefaRemovida) return res.status(404).json({ erro: 'Tarefa não encontrada' });
    res.json({ mensagem: 'Tarefa removida com sucesso' });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao excluir tarefa' });
  }
};

