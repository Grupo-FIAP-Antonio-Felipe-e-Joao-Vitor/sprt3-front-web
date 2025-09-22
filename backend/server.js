const express = require("express");
const cors = require("cors");
const { v4: uuid } = require("uuid")
const bcrypt = require("bcrypt");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3001;

const caminhoUsuarios = path.join(__dirname, "./data/usuarios.json");

const consultarUsuarios = () => {
    const data = fs.readFileSync(caminhoUsuarios, "UTF-8");
    return JSON.parse(data);
};

const salvarUsuarios = (users) => {
    fs.writeFileSync(caminhoUsuarios, JSON.stringify(users, null, 2));
};

app.get("/usuarios", (req, res) => {
    try {
        const users = consultarUsuarios();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: `Erro interno. ${error}` })
    }
});

app.post("/registro", async (req, res) => {
    const { nome, email, senha, nascimento } = req.body;
    try {
        if (!nome || !email || !senha || !nascimento) {
            return res.status(400).json({ error: "Todos os dados são obrigatórios" });
        }

        const users = consultarUsuarios();
        if (users.find(user => user.email === email)) {
            return res.status(400).json({ message: "Email já cadastrado" });
        };
        
        const hashSenha = await bcrypt.hash(senha, 10);

        novoUsuario = { id: uuid(), nome: nome, email: email, senha: hashSenha, nascimento: nascimento, role: "User" };
        users.push(novoUsuario)
        salvarUsuarios(users)
        return res.status(201).json({ message: "Usuário criado.", usuario: novoUsuario });
    } catch (error) {
        return res.status(500).json({ error: `Erro interno. ${error}` })
    }
})

app.get("/usuarios/:id", (req, res) => {
    try {
        const id = req.params.id; // pega o id da URL
        const users = consultarUsuarios();

        const usuario = users.find(user => user.id === id);

        if (!usuario) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }

        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ error: `Erro interno. ${error}` })
    }
});

app.post("/login", async (req, res) => {
    const { email, senha } = req.body;
    const users = consultarUsuarios();

    const usuario = users.find(user => user.email === email);
    
    if (!usuario) {
        return res.status(404).json({ error: "Email não encontrado" });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
        return res.status(400).json({ message: "Senha inválida" });
    }

    return res.status(200).json({ message: "Login realizado com sucesso", usuario: usuario });
})

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));