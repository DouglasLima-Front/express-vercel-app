const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Olá, mundo! Este app está rodando no Vercel!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
