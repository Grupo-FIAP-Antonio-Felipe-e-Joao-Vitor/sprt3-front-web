import { Link } from "react-router-dom";


const TorneioAtivo = ({usuario, torneio}) => {
    function formataData(data){
        const dataParcial = data.split("-")
        const dataFormatada = `${dataParcial[2]}/${dataParcial[1]}/${dataParcial[0]}`
        return dataFormatada
    }

  return (
    <main className="flex h-screen justify-center items-center">
      <div className="bg-gray-900 flex justify-center items-center flex-col max-w-[35rem] w-full h-40 rounded-2xl gap-3">
        <p className="text-white font-bold max-md:p-4">
          Inscrições abertas para o {torneio["nomeTorneio"]} até {formataData(torneio.fimInscricao)}
        </p>
        <div className="bg-white rounded-2xl">
          {!usuario ? (
            <Link to="/cadastro" className="p-2">
              Cadastre-se
            </Link>
          ) : (
            <button>Inscreva-se</button>
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
