import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import cadastroImg from "../assets/cadastro-imagem.png";

const Cadastro = () => {
  const { register, handleSubmit, reset } = useForm();

  async function cadastrarUsuario(data) {
    try {
      const response = await fetch("http://localhost:3001/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // já vem pronto do formulário
      });

      const result = await response.json();
      console.log("Resposta da API:", result);

      if (response.ok) {
        alert("Usuário cadastrado com sucesso!");
        reset(); // limpa o formulário
      } else {
        alert("Erro: " + (result.error || "Não foi possível cadastrar"));
      }
    } catch (err) {
      console.error("Erro ao cadastrar:", err);
      alert("Erro de conexão com a API");
    }
  }

  return (
    <div className="flex h-screen">
      {/* Formulário */}
      <form
        onSubmit={handleSubmit(cadastrarUsuario)}
        className="w-full md:w-1/2 flex flex-col justify-center items-start p-16"
      >
        <h1 className="text-4xl font-bold mb-8">Cadastro</h1>

        <div className="flex flex-col mb-4 w-full">
          <label htmlFor="nome" className="mb-2">Nome</label>
          <input
            type="text"
            {...register("nome")}
            className="border rounded p-2 w-full"
          />
        </div>

        <div className="flex flex-col mb-4 w-full">
          <label htmlFor="email" className="mb-2">E-mail</label>
          <input
            type="email"
            {...register("email")}
            className="border rounded p-2 w-full"
          />
        </div>

        <div className="flex flex-col mb-4 w-full">
          <label htmlFor="username" className="mb-2">Username</label>
          <input
            type="text"
            {...register("username")}
            className="border rounded p-2 w-full"
          />
        </div>

        <div className="flex flex-col mb-4 w-full">
          <label htmlFor="senha" className="mb-2">Senha</label>
          <input
            type="password"
            {...register("senha")}
            className="border rounded p-2 w-full"
          />
        </div>

        <div className="flex flex-col mb-4 w-full">
          <label htmlFor="idade" className="mb-2">Idade</label>
          <input
            type="number"
            {...register("idade")}
            className="border rounded p-2 w-full"
          />
        </div>

        <div className="flex flex-col mb-6 w-full">
          <label htmlFor="role" className="mb-2">Tipo de usuário</label>
          <select
            {...register("role")}
            className="border rounded p-2 w-full"
          >
            <option value="comum">Comum</option>
            <option value="adm">Administrador</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-purple-600 text-white font-bold py-2 px-6 rounded hover:bg-purple-700"
        >
          Cadastrar
        </button>
        <Link
          to="/login"
          className="mt-2 text-emerald-800 hover:text-fuchsia-500 transition-colors duration-300"
        >
          Já tem uma conta? Faça login
        </Link>
      </form>

      {/* Imagem */}
      <div
        className=" md:w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${cadastroImg})` }}
      ></div>
    </div>
  );
};

export default Cadastro;
