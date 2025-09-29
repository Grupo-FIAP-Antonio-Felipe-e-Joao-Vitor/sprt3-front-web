import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Torneio = ({usuario}) => {

  const [torneiosAtivos, setTorneiosAtivos] =useState()


  const url = "http://localhost:3001/torneios"
  async function pegarTorneios(){
    const torneios = await axios.get(url)
    setTorneiosAtivos(torneios.find((torneio)=>{
      torneio.emAndamento === true
    }))
  }

  return (
    <main className='flex h-screen justify-center items-center'>
      <div className='bg-gray-900 flex justify-center items-center flex-col max-w-[35rem] w-full h-40 rounded-2xl gap-3'>
        <p className='text-white font-bold max-md:p-4'>Inscrições para o próximo torneio abertas, garanta já sua vaga!</p>
        <div className="bg-white rounded-2xl">
        {!usuario ?
        (<Link to="/cadastro" className="p-2">
          Cadastre-se
        </Link>
        ):(<button>Inscreva-se</button>)}
        </div>
        <p className='text-white max-md:p-4' >Inscrições abertas até dia 25/10</p>
      </div>

    </main>
  )
}

export default Torneio