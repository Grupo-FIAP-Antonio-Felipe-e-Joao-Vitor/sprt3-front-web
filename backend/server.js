const express = require("express");
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3001;

const usuarios = [
    {
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


app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));