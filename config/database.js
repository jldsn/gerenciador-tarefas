const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/gerenciador_tarefas', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
