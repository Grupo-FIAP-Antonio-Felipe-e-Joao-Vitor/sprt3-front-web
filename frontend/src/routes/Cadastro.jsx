import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import cadastroImg from "../assets/cadastro-imagem.png";
import axios from "axios";

const Cadastro = () => {
  const { register, handleSubmit, reset } = useForm();
  const url = "http://localhost:3001/registro"

  async function cadastrarUsuario(data) {
  try {
    const response = await axios.post(url, data);

    if (response.status === 201) {
      alert("Usuário cadastrado com sucesso!");
      reset();
    }
  } 
  catch (error) {
    if (error.response) {
      // Erro vindo do backend
      const status = error.response.status;
      const result = error.response.data;

      if (status === 400 && result.error) {
        alert("Todos os campos são obrigatórios");
        reset();
      }

      if (status === 400 && result.message) {
        alert("Este email já está sendo utilizado");
        reset();
      }
    } else {
      // Erro inesperado (sem resposta do servidor)
      alert("Erro inesperado. Tente novamente mais tarde.");
      console.log(error);
    }
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
          <label htmlFor="senha" className="mb-2">Senha</label>
          <input
            type="password"
            {...register("senha")}
            className="border rounded p-2 w-full"
          />
        </div>

        <div className="flex flex-col mb-4 w-full">
          <label htmlFor="idade" className="mb-2">Data de nascimento</label>
          <input
            type="date"
            {...register("nascimento")}
            className="border rounded p-2 w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-purple-600 cursor-pointer text-white font-bold py-2 px-6 rounded hover:bg-purple-700"
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
