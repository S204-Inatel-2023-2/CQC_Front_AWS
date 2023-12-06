const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// Defina suas rotas aqui

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
