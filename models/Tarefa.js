const mongoose = require('mongoose');

const TarefaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String },
  status: { type: String, required: true, enum: ['pendente', 'realizando', 'concluída'] },
  data_vencimento: { 
    type: Date, 
    validate: {
      validator: function(value) {
        return !value || !isNaN(Date.parse(value));
      },
      message: 'Data de vencimento inválida'
    }
  }
});

module.exports = mongoose.model('Tarefa', TarefaSchema);

