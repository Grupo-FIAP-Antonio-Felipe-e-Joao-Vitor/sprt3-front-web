import React from "react";
import { Link } from "react-router-dom";
import loginImg from "../assets/login-image.png";

const Login = () => {
  return (
    <div className="flex h-screen">
      <div
        className="w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${loginImg})` }}
      ></div>

      <div className="w-1/2 flex flex-col justify-center items-start p-16">
        <div>

        </div>
        <h1 className="text-4xl font-bold mb-8">Login</h1>

        <div className="flex flex-col mb-4 w-full">
          <label htmlFor="email-username" className="mb-2">E-mail/Username</label>
          <input
            type="text"
            name="email-username"
            id="email-username"
            className="border rounded p-2 w-full"
          />
        </div>

        <div className="flex flex-col mb-6 w-full">
          <label htmlFor="senha" className="mb-2">Senha</label>
          <input
            type="password"
            name="senha"
            id="senha"
            className="border rounded p-2 w-full"
          />
        </div>

        <button className="bg-purple-600 text-white font-bold py-2 px-6 rounded hover:bg-purple-700">
          Entrar
        </button>
                <Link to="/cadastro" className="mt-2 text-emerald-800 hover:text-fuchsia-500 transition-colors duration-300">Não tem uma conta? Faça o cadastro!</Link>

      </div>
    </div>
  );
};

export default Login;
