import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../assets/login-image.png";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState();  
  const [senha, setSenha] = useState();  
  const navigate = useNavigate();

  async function verificaConta (e) {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:3001/usuarios/email/${email}`)
      const result = response.data;
      
      if (result.senha === senha) {
        navigate("/torneio")
      } else {
        alert("Senha incorreta");
        setSenha("");
      }
    } catch (err) {
      if (err.response && err.response.status === 404) {
        alert("Email não encontrado");
        setEmail("");
        setSenha("");
      } else {
        console.error("Erro ao conectar:", err);
        alert("Erro de conexão com a API");
      }
    }
  }

  return (
    <div className="flex h-screen">
      {/* Imagem */}
      <div
        className="md:w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${loginImg})` }}
      ></div>

      {/* Formulário */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-16">
        <h1 className="text-4xl font-bold mb-8">Login</h1>

        <form className="w-full" onSubmit={verificaConta}>
          <div className="flex flex-col mb-4 w-full">
            <label htmlFor="email-username" className="mb-2">E-mail</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              name="email"
              id="email"
              className="border rounded p-2 w-full"
              required
            />
          </div>

          <div className="flex flex-col mb-6 w-full">
            <label htmlFor="senha" className="mb-2">Senha</label>
            <input
              onChange={(e) => setSenha(e.target.value)}
              value={senha}
              type="password"
              name="senha"
              id="senha"
              className="border rounded p-2 w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-purple-600 text-white font-bold py-2 px-6 rounded hover:bg-purple-700"
          >
            Entrar
          </button>
        </form>

        <Link
          to="/cadastro"
          className="mt-2 text-emerald-800 hover:text-fuchsia-500 transition-colors duration-300"
        >
          Não tem uma conta? Faça o cadastro!
        </Link>
      </div>
    </div>
  );
};

export default Login;
