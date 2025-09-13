const express = require("express");
const cors = require("cors");
const { v4: uuid } = require("uuid")

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3001;

const usuarios = [
    {
        id: 1,
        nome: "Teste Nome",
        email: "Teste Email",
        username: "Teste Username",
        senha: "SenhaTeste",
        role: "User"
    },
];

app.get("/usuarios", (req, res) => {
    try {
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: `Erro interno. ${error}` })
    }
});

app.post("/usuarios", (req, res) => {
    const { nome, email, username, senha, role } = req.body;
    try {
        if (nome && email && username && senha && role) {
            novoUsuario = { id: uuid(), nome: nome, email: email, username: username, senha: senha, role: role };
            usuarios.push(novoUsuario)
            res.status(201).json({ message: "Usuário criado." });
        } else {
            res.status(400).json({ error: "Todos os dados são obrigatórios" });
        }
    } catch (error) {
        res.status(500).json({ error: `Erro interno. ${error}` })
    }
})


app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));