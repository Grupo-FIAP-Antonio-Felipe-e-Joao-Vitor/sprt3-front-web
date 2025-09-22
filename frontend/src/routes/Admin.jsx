import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaUsers, FaTrophy, FaClock, FaPlusCircle, FaList } from "react-icons/fa";

const Admin = ({ usuario }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!usuario) {
      navigate("/login");
      return;
    }

    if (usuario.role === "User") {
      alert("Você não tem permissão de acessar esta área");
      navigate("/");
      return;
    }
  }, [usuario, navigate]);

  return (
    <main className="bg-purple-50 min-h-screen flex flex-col items-center py-10">
      {/* Título */}
      <h1 className="text-4xl font-bold text-purple-700 mb-10">Painel Administrativo</h1>

      {/* Cards do painel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-11/12 max-w-5xl">
        {/* Usuários cadastrados */}
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-2xl shadow-xl text-white flex flex-col items-center gap-4 transition duration-500 hover:scale-105">
          <FaUsers size={40} />
          <h2 className="text-2xl font-bold">Usuários Cadastrados</h2>
          <p className="text-lg text-center">Veja todos os usuários registrados na plataforma.</p>
          <Link to="/admin/usuarios" className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-200 transition">Ver usuários</Link>
        </div>

        {/* Torneios criados */}
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-2xl shadow-xl text-white flex flex-col items-center gap-4 transition duration-500 hover:scale-105">
          <FaTrophy size={40} />
          <h2 className="text-2xl font-bold">Torneios Criados</h2>
          <p className="text-lg text-center">Confira a lista de torneios já cadastrados.</p>
          <Link to="/admin/torneios" className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-200 transition">Ver torneios</Link>
        </div>

        {/* Torneios em andamento */}
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-2xl shadow-xl text-white flex flex-col items-center gap-4 transition duration-500 hover:scale-105">
          <FaClock size={40} />
          <h2 className="text-2xl font-bold">Torneios em Andamento</h2>
          <p className="text-lg text-center">Veja quais torneios estão ativos agora.</p>
          <Link to="/admin/torneios-ativos" className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-200 transition">Ver andamento</Link>
        </div>

        {/* Criar novo torneio */}
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-2xl shadow-xl text-white flex flex-col items-center gap-4 transition duration-500 hover:scale-105">
          <FaPlusCircle size={40} />
          <h2 className="text-2xl font-bold">Criar Torneio</h2>
          <p className="text-lg text-center">Adicione novos torneios ao sistema.</p>
          <Link to="/admin/criar-torneio" className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-200 transition">Criar</Link>
        </div>
      </div>
    </main>
  );
};

export default Admin;
