const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Serve os arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, "../public")));

// Serve o `index.html` quando o usuário acessa a raiz
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Endpoint para receber dados do formulário
app.post("/api/work", (req, res) => {
  const data = req.body;

  // Salva os dados em um arquivo "dados.json"
  fs.appendFile("dados.json", JSON.stringify(data) + "\n", (err) => {
    if (err) {
      console.error("Erro ao salvar os dados:", err);
      res.status(500).json({ message: "Erro ao salvar os dados" });
    } else {
      res.status(200).json({ message: "Dados salvos com sucesso!" });
    }
  });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
