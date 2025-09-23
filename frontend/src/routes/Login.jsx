import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../assets/login-image.png";
import axios from "axios";

const Login = ( { setUsuario } ) => {
  const [email, setEmail] = useState();  
  const [senha, setSenha] = useState();  
  const navigate = useNavigate();

  const url = "http://localhost:3001/login"

  async function verificaConta (e) {
    e.preventDefault();

    const data = { email: email, senha: senha };
    try {
      const response = await axios.post(url, data);
      
      if (response.status === 200) {
        setUsuario(response.data.usuario);
        localStorage.setItem("usuario", JSON.stringify(response.data.usuario));

        if (response.data.usuario.role === "Admin") {
          return navigate("/admin");
        } else {
          return navigate("/torneio")
        }
      };

    } catch (error) {
      if (error.response.status === 404) {
        setEmail("");
        setSenha("");
        return alert("Email não encontrado");
      }
      if (error.response.status === 400) {
        setSenha("");
        return alert("Senha invalida");
      }
      else {
        console.error("erroro ao conectar:", error);
        return alert("erroro de conexão com a API");
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
        <h1 className="text-4xl text-center w-full md:text-left font-bold text-purple-700 mb-10">Login</h1>

        <form className="w-full" onSubmit={verificaConta}>
          <div className="flex flex-col gap-2 mb-4 w-full">
            <label className="text-xl font-bold uppercase">E-mail</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              name="email"
              className="text-xl border rounded p-2 w-full" 
              placeholder="Obrigatório"
              required
            />
          </div>

          <div className="flex flex-col mb-6 w-full">
            <label className="text-xl font-bold uppercase">Senha</label>
            <input
              onChange={(e) => setSenha(e.target.value)}
              value={senha}
              type="password"
              name="senha"
              className="text-xl border rounded p-2 w-full" 
              placeholder="Obrigatório"
              required
            />
          </div>

          <button
            type="submit"
            className="text-2xl uppercase bg-purple-600 cursor-pointer text-white font-medium py-2 px-6 rounded-xl hover:bg-purple-700"
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
