import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";


const TorneioAtivo = ({usuario, torneio}) => {
  const URL = "http://localhost:3001/participarTorneio"
  const [btnTexto, setBtnTexto] = useState("Inscreva-se")

    function formataData(data){
        const dataParcial = data.split("-")
        const dataFormatada = `${dataParcial[2]}/${dataParcial[1]}/${dataParcial[0]}`
        return dataFormatada
    }

    async function inscrever () {
      const data = {usuario: usuario}
      await axios.put(`${URL}/${torneio.id}`, data)
      setBtnTexto("Inscrito")
    }

    

  return (
    <main className="flex h-screen justify-center items-center">
      <div className="bg-gray-900 flex justify-center items-center flex-col max-w-[35rem] w-full h-40 rounded-2xl gap-3">
        <p className="text-white font-bold max-md:p-4">
          Inscrições abertas para o {torneio["nomeTorneio"]} até {formataData(torneio.fimInscricao)}
        </p>
        <div className="bg-white font-bold">
          {!usuario ? (
            <Link to="/cadastro" className="uppercase cursor-pointer">
              Cadastre-se
            </Link>
          ) : (btnTexto === "Inscreva-se" ? (
            <button
              className="uppercase cursor-pointer w-full h-full px-2 py-1 rounded-xl hover:bg-gray-200 transition-all duration-300"
              onClick={() => inscrever()}
            >
              {btnTexto}
            </button>
          ) : (
            <button
              className="uppercase w-full h-full px-2 py-1 rounded-xl bg-gray-300"
            >
              {btnTexto}
            </button>
          )
          )}
        </div>
        <p className="text-white max-md:p-4">
          Inscrições abertas até dia 25/10
        </p>
      </div>
    </main>
  );
};

export default TorneioAtivo;
