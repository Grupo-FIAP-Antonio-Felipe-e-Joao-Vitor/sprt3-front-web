import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import TorneioAtivo from "../components/TorneioAtivo";

const Torneio = ({ usuario }) => {
  const [torneiosAtivos, setTorneiosAtivos] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "http://localhost:3001/torneios";
  async function pegarTorneios() {
    try {
      const response = await axios.get(url);
      const torneios = response.data;
      setTorneiosAtivos(torneios.filter((t) => t.emAndamento === true));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    pegarTorneios();
  }, []);

  return (
    <>
      {loading ? (
        <p>Carregando torneios...</p>
      ) : (
        torneiosAtivos.map((torneio) => (
          <TorneioAtivo key={torneio.id} usuario={usuario} torneio={torneio} />
        ))
      )}
    </>
  );
};

export default Torneio;
