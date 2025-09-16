import Imagemtorneio from '../assets/imagemtorneio.png';

const Torneio = () => {
  return (
    <div className='flex justify-center text-center items-center'>
      <section className='flex flex-col h-screen justify-center'>
        <img src={Imagemtorneio} alt="" className='h-70 md:h-100'/>
        <span className='text-2xl uppercase text-purple-800 font-bold'>Página em construção</span>
        <span className='text-[20px]'>disponível em breve</span>
      </section>
    </div>
  )
}

export default Torneio