import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTrophy, FaCheckCircle } from "react-icons/fa";

const TorneioCard = ({ usuario, torneio }) => {
  const URL = "http://localhost:3001/participarTorneio";
  const [btnTexto, setBtnTexto] = useState("Inscreva-se");
  const [inscrito, setInscrito] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já está inscrito no torneio
    if (usuario && torneio.participantes?.some(p => p.id === usuario.id)) {
      setBtnTexto("Inscrito");
      setInscrito(true);
    }
  }, [usuario, torneio.participantes]);

  function formataData(data) {
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
  }

  async function inscrever() {
    if (!usuario) return;
    try {
      const data = { usuario };
      await axios.put(`${URL}/${torneio.id}`, data);
      setBtnTexto("Inscrito");
      setInscrito(true);
      // Opcional: atualizar lista de participantes no card sem refresh
      torneio.participantes = [...(torneio.participantes || []), usuario];
    } catch (error) {
      console.error("Erro ao se inscrever:", error);
    }
  }

  return (
    <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-2xl shadow-xl text-white flex flex-col items-center gap-4 transition duration-500 hover:scale-105 w-full max-w-md">
      <FaTrophy size={40} className="text-yellow-400" />
      <h2 className="text-2xl font-bold text-center">{torneio.nomeTorneio}</h2>
      <p className="text-center text-white/80">
        Inscrições até {formataData(torneio.fimInscricao)}
      </p>

      {usuario ? (
        <button
          onClick={inscrever}
          disabled={inscrito}
          className={`w-full py-2 rounded-xl font-bold uppercase transition-all duration-300
            ${inscrito 
              ? "bg-gray-300 cursor-not-allowed text-gray-700 flex items-center justify-center gap-2" 
              : "bg-white text-purple-600 cursor-pointer hover:bg-purple-200 flex items-center justify-center gap-2"}
          `}
        >
          {inscrito && <FaCheckCircle />}
          {btnTexto}
        </button>
      ) : (
        <Link
          to="/cadastro"
          className="w-full py-2 rounded-xl bg-white text-purple-600 font-bold uppercase text-center hover:bg-purple-200 transition-all duration-300"
        >
          Cadastre-se
        </Link>
      )}

      <p className="text-center text-white/70 text-sm md:text-base">
        Participe antes do fim das inscrições!
      </p>
    </div>
  );
};

export default TorneioCard;
