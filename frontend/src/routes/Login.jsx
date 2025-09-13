import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../assets/login-image.png";

const Login = () => {
  const [email, setEmail] = useState();  
  const [senha, setSenha] = useState();  
  const navigate = useNavigate();
  
  function handleEmail (e) {
    setEmail(e.target.value);
  }

  function handleSenha (e) {
    setSenha(e.target.value);
  }

  async function verificaConta (e) {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3001/usuarios/email/${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });

      if (response.status === 404) {
        alert("Email não encontrado")
        setEmail("");
        setSenha("");
      } else {
        const result = await response.json();
        if (result.senha === senha) {
          navigate("/torneio")
        } else {
          alert("Senha incorreta");
          setSenha("");
        }
      }
      
    } catch (err) {
      console.error("Erro ao cadastrar:", err);
      alert("Erro de conexão com a API");
    }
  }

  return (
    <div className="flex h-screen">
      {/* Imagem */}
      <div
        className="w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${loginImg})` }}
      ></div>

      {/* Formulário */}
      <div className="w-1/2 flex flex-col justify-center items-start p-16">
        <h1 className="text-4xl font-bold mb-8">Login</h1>

        <form className="w-full" onSubmit={verificaConta}>
          <div className="flex flex-col mb-4 w-full">
            <label htmlFor="email-username" className="mb-2">E-mail/Username</label>
            <input
              onChange={handleEmail}
              value={email}
              type="text"
              name="email-username"
              id="email-username"
              className="border rounded p-2 w-full"
              required
            />
          </div>

          <div className="flex flex-col mb-6 w-full">
            <label htmlFor="senha" className="mb-2">Senha</label>
            <input
              onChange={handleSenha}
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
