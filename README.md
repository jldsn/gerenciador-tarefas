# API RESTful para Gerenciamento de Tarefas

## Descrição
Esta API permite a criação, leitura, atualização e exclusão de tarefas. Também é possível filtrar as tarefas com base no seu status.

## Tecnologias Utilizadas
- Node.js
- Express.js
- MongoDB
- Mongoose

## Como Executar o Projeto

### 1. Clonar o repositório
```sh
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_REPOSITORIO>
```

### 2. Instalar dependências
```sh
npm install
```

### 3. Configurar o banco de dados
Certifique-se de ter o MongoDB rodando localmente na porta padrão (`mongodb://localhost:27017/gerenciador_tarefas`). Caso queira mudar a conexão, edite o arquivo `config/database.js`.

### 4. Iniciar o servidor
```sh
npm start
```
O servidor será iniciado na porta 3000 (ou na porta definida pela variável de ambiente `PORT`).

## Endpoints da API

### Criar uma tarefa
- **POST** `/tarefas`
- **Corpo da requisição (JSON):**
```json
{
  "titulo": "Estudar API",
  "descricao": "Estudar como criar uma API RESTful",
  "status": "pendente",
  "data_vencimento": "2024-12-31"
}
```

### Listar todas as tarefas
- **GET** `/tarefas`

### Buscar uma tarefa por ID
- **GET** `/tarefas/{id}`

### Atualizar uma tarefa
- **PUT** `/tarefas/{id}`
- **Corpo da requisição (JSON):**
```json
{
  "titulo": "Estudar API - Revisão",
  "descricao": "Revisar os conceitos de API RESTful",
  "status": "realizando",
  "data_vencimento": "2024-12-28"
}
```

### Excluir uma tarefa
- **DELETE** `/tarefas/{id}`

### Filtrar tarefas por status
- **GET** `/tarefas?status={status}`
