import React from "react";
import { Link } from "react-router-dom";
import cadastroImg from "../assets/cadastro-imagem.png";


const Cadastro = () => {
  return (
    <div className="flex h-screen">
      {/* Formulário */}
      <div className="w-1/2 flex flex-col justify-center items-start p-16">
        <h1 className="text-4xl font-bold mb-8">Cadastro</h1>

        <div className="flex flex-col mb-4 w-full">
          <label htmlFor="nome" className="mb-2">Nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
            className="border rounded p-2 w-full"
          />
        </div>

        <div className="flex flex-col mb-4 w-full">
          <label htmlFor="email" className="mb-2">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            className="border rounded p-2 w-full"
          />
        </div>

        <div className="flex flex-col mb-4 w-full">
          <label htmlFor="username" className="mb-2">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            className="border rounded p-2 w-full"
          />
        </div>

        <div className="flex flex-col mb-4 w-full">
          <label htmlFor="senha" className="mb-2">Senha</label>
          <input
            type="password"
            name="senha"
            id="senha"
            className="border rounded p-2 w-full"
          />
        </div>

        <div className="flex flex-col mb-4 w-full">
          <label htmlFor="idade" className="mb-2">Idade</label>
          <input
            type="number"
            name="idade"
            id="idade"
            className="border rounded p-2 w-full"
          />
        </div>

        <div className="flex flex-col mb-6 w-full">
          <label htmlFor="role" className="mb-2">Tipo de usuário</label>
          <select
            name="role"
            id="role"
            className="border rounded p-2 w-full"
          >
            <option value="comum">Comum</option>
            <option value="adm">Administrador</option>
          </select>
        </div>

        <button className="bg-purple-600 text-white font-bold py-2 px-6 rounded hover:bg-purple-700">
          Cadastrar
        </button>
        <Link to="/login" className="mt-2 text-emerald-800 hover:text-fuchsia-500 transition-colors duration-300">Já tem uma conta? Faça login</Link>
      </div>

      {/* Imagem */}
      <div
        className="w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${cadastroImg})` }}
      ></div>
    </div>
  );
};

export default Cadastro;
