import Imagem1 from '../assets/imagem1home.png'


const Home = () => {
  return (
    <main>
        <img src={Imagem1} alt="foto1" className='w-screen'/>

        <h2 className='flex justify-center font-bold text-purple-600 text-3xl mt-10'>Quem somos?</h2>

        {/* Texto sobre o Passa a Bola */}
        <div className='flex justify-center items-center text-center p-1 mt-13'>
          <p className='max-w-2xl'> O Passa a Bola é um projeto de mídia independente que dá visibilidade ao esporte feminino, especialmente ao futebol.
            Criado por Alê Xavier e Luana Maluf, o canal promove transmissões, entrevistas, reportagens e conteúdos digitais com foco em valorizar atletas mulheres, 
            combater o machismo no esporte e ampliar a presença feminina na mídia esportiva.</p>
        </div>

        {/* Texto sobro os Torneios */}

        {/* Div pai para centralizar a section */}
        <div className='relative flex justify-center mt-17 group'> 

          {/* Div sombra */}
          <div className='absolute top-3 left-134 bg-purple-800 rounded-[50px] max-w-3xl w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
          
          {/* Card principal */}
          <div className='flex bg-gradient-to-r from-purple-500 to-purple-600 max-w-3xl w-full justify-center items-center flex-col text-center p-6 rounded-[50px] transition-transform duration-700 group-hover:translate-x-1 group-hover:translate-y-1'>
            <h2 className='flex justify-center font-bold text-white text-3xl'>Sobre os torneios</h2>

            <p className='text-white mt-10'> O Passa a Bola organiza torneios de futebol feminino que valorizam a presença das mulheres no esporte.
              Os eventos reúnem jogadoras amadoras, influenciadoras e entusiastas em partidas descontraídas, 
              promovendo empoderamento e criando um ambiente acolhedor e seguro para diferentes perfis e estilos de jogo.</p>
          </div>
        </div>
    </main>
  )
}
export default Home