const express = require("express");
const cors = require("cors");
const { v4: uuid } = require("uuid")

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3001;

const usuarios = [];

app.get("/usuarios", (req, res) => {
    try {
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: `Erro interno. ${error}` })
    }
});

app.post("/usuarios", (req, res) => {
    const { nome, email, senha, role, nascimento } = req.body;
    try {
        if (nome && email && senha && role && nascimento) {
            novoUsuario = { id: uuid(), nome: nome, email: email, senha: senha, role: role };
            usuarios.push(novoUsuario)
            res.status(201).json({ message: "Usuário criado." });
        } else {
            res.status(400).json({ error: "Todos os dados são obrigatórios" });
        }
    } catch (error) {
        res.status(500).json({ error: `Erro interno. ${error}` })
    }
})

app.get("/usuarios/:id", (req, res) => {
    try {
        const usuarioID = req.params.id; // pega o id da URL
        const usuario = usuarios.find(item => String(item.id) === String(usuarioID)); // compara como string

        if (!usuario) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }

        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ error: `Erro interno. ${error}` })
    }
});

app.get("/usuarios/email/:email", (req, res) => {
    try {
        const usuarioEMAIL = req.params.email; // pega o enail da URL
        const usuario = usuarios.find(item => String(item.email) === String(usuarioEMAIL)); // compara como string

        if (!usuario) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }

        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ error: `Erro interno. ${error}` })
    }
});


app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));