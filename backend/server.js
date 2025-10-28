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
const caminhoTorneios = path.join(__dirname, "./data/torneios.json");

const consultarDados = (caminho) => {
    const data = fs.readFileSync(caminho, "UTF-8");
    return JSON.parse(data);
};

const salvarDados = (caminho, dados) => {
    fs.writeFileSync(caminho, JSON.stringify(dados, null, 2));
};

// ROTAS USUARIOS
app.get("/usuarios", (req, res) => {
    try {
        const users = consultarDados(caminhoUsuarios);
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

        const users = consultarDados(caminhoUsuarios);
        if (users.find(user => user.email === email)) {
            return res.status(400).json({ message: "Email já cadastrado" });
        };
        
        const hashSenha = await bcrypt.hash(senha, 10);

        novoUsuario = { id: uuid(), nome: nome, email: email, senha: hashSenha, nascimento: nascimento, role: "User" };
        users.push(novoUsuario)
        salvarDados(caminhoUsuarios, users)
        return res.status(201).json({ message: "Usuário criado.", usuario: novoUsuario });
    } catch (error) {
        return res.status(500).json({ error: `Erro interno. ${error}` })
    }
})

app.get("/usuarios/:id", (req, res) => {
    try {
        const id = req.params.id; // pega o id da URL
        const users = consultarDados(caminhoUsuarios);

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
    const users = consultarDados(caminhoUsuarios);

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

// ROTAS TORNEIO
app.post("/torneios", async (req, res) => {
    try {
        const { nomeTorneio, quantidadeTimes, quantidadeJogadorasPorTime, inicioInscricao, fimInscricao, dataTorneio } = req.body;
        if (!quantidadeTimes || !quantidadeJogadorasPorTime || !inicioInscricao || !fimInscricao || !dataTorneio) {
            return res.status(400).json({ message: "É obrigatório informar a quantidade de times, a quantidade de pessoas por time, data de inicio das inscrições para o torneio, a data de término das inscrições e a data em que ocorrerá o torneio" });
        };

        const torneios = consultarDados(caminhoTorneios);
        const novoTorneio = { id: uuid(), nomeTorneio: nomeTorneio ? nomeTorneio : "Torneio", quantidadeTimes: quantidadeTimes, quantidadeJogadorasPorTime: quantidadeJogadorasPorTime, inicioInscricao: inicioInscricao, fimInscricao: fimInscricao, dataTorneio: dataTorneio, usuariosInscritos: [], vagasTotais: quantidadeTimes * quantidadeJogadorasPorTime, emAndamento: true };
        torneios.push(novoTorneio);
        salvarDados(caminhoTorneios, torneios);
        return res.status(201).json({ message: "Torneio criado", torneio: novoTorneio })
    } catch (error) {
        return res.status(500).json({ error: `Erro interno. ${error}` })
    }
});

app.get("/torneios", (req, res) => {
    try {
        const torneios = consultarDados(caminhoTorneios);
        return res.status(200).json(torneios);
    } catch (error) {
        return res.status(500).json({ error: `Erro interno. ${error}` });
    };
})

app.put("/finalizarTorneio/:id", (req, res) => {
    try {
        const { id } = req.params;
        const { emAndamento } = req.body;
        const torneios = consultarDados(caminhoTorneios);
        const torneio = torneios.find(torneio => torneio.id === id);
        
        if (!torneio) {
            return res.status(404).json({ message: "Torneio não encontrado" });
        }

        torneio.emAndamento = emAndamento;
        salvarDados(caminhoTorneios, torneios);
        return res.status(200).json({ message: "Torneio alterado com sucesso" });

    } catch (error) {
        return res.status(500).json({ error: `Erro interno. ${error}` });
    }
});

app.put("/participarTorneio/:id", (req, res) => {
    try {
        const { usuario } = req.body;
        const { id } = req.params;

        const torneios = consultarDados(caminhoTorneios);
        const torneio = torneios.find(torneio => torneio.id === id);

        if (!torneio) {
            return res.status(404).json({ message: "Torneio não encontrado" });
        }

        if (torneio.usuariosInscritos.length === torneio.vagasTotais) {
            return res.status(400).json({ error: "Não tem mais vagas no torneio" });
        }
        
        torneio.usuariosInscritos.push(usuario);
        salvarDados(caminhoTorneios, torneios);
        res.status(200).json({ message: "Inscrito com sucesso" });

    } catch (error) {
        return res.status(500).json({ error: `Erro interno. ${error}` });
    };
});

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));