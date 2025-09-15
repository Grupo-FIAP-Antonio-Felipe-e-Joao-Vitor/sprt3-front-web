import Imagem1 from '../assets/imagemhome.jpg';
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, Links } from 'react-router-dom';


const Home = () => {
  return (
    <main>
      <div className="relative bg-cover bg-center bg-no-repeat h-screen" style={{ backgroundImage: `url(${Imagem1})` }}>
        <div className="bg-black/50 w-full h-full absolute inset-0 z-0"></div>

        <div className='opacity-90 relative flex flex-col w-full justify-center items-center h-screen z-10'>
          {/* Texto sobre o Passa a Bola */}
          <div className='bg-white max-w-4xl flex flex-col justify-center text-center items-center p-4 gap-5 rounded-2xl'>

            <h2 className='flex font-bold justify-center text-purple-600 text-3xl'>Quem somos?</h2>
            <p className='max-w-4xl text-2xl text-center'> O Passa a Bola é um projeto de mídia independente que dávisibilidade  ao esporte   feminino, especialmente ao futebol.
              Criado por Alê Xavier e Luana Maluf, o canal promove transmissões, entrevistas, reportagens e conteúdos digitais com  foco em valorizar atletas mulheres, 
              combater o machismo no esporte e ampliar a presença feminina na mídia esportiva.</p>
          </div>
          {/* Div redes sociais */}
          <div className='flex justify-center items-center text-center w-1/2 mt-10 text-2xl gap-20'>
            <a href="https://www.instagram.com/passaabola" target="_blank" rel="noopener noreferrer">
              <div className='flex justify-center items-center bg-white rounded-full p-4 hover:bg-purple-400 transition duration-300'>
                <span><FaInstagram/></span>
              </div>
            </a>

            <a href="https://www.youtube.com/@passabola" target="_blank" rel="noopener noreferrer">
              <div className='flex justify-center items-center bg-white rounded-full p-4 hover:bg-purple-400 transition duration-300'>
                <span><FaYoutube/></span>
              </div>
            </a>

            <a href="https://x.com/passaabola" target="_blank" rel="noopener noreferrer">
              <div className='flex justify-center items-center bg-white rounded-full p-4 hover:bg-purple-400 transition duration-300'>
                <span><FaXTwitter/></span>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      <div className='flex w-full '>

        {/* Botão participe já */}
        <div className='flex w-1/2 text-center justify-center items-center'>
          <section className='bg-purple-500 max-w-35 w-full rounded-[10px] text-2xl p-2 hover:text-white hover:bg-purple-700 transition duration-300'>
            <Link to="/torneio">
              Participe já
            </Link>
          </section>
        </div>

        {/* Texto sobre os Torneios */}
        {/* Div pai para centralizar a section */}
        <div className='mb-10 relative flex w-1/2 mt-17 group mr-5'> 
          {/* Card principal */}
          <div className='flex bg-gradient-to-r from-purple-500 to-purple-600 max-w-3xl w-full justify-center items-center  flex-col text-center p-6 rounded-[50px] transition duration-700 group-hover:translate-x-1group-hover:translate-y-1  group-hover:shadow-[-10px_10px_0px_3px_rgba(92,_6,_177,_1)]'>
            <h2 className='flex justify-center font-bold text-white text-3xl'>Sobre os torneios</h2>
            <p className='text-white mt-10'> O Passa a Bola organiza torneios de futebol feminino que valorizam apresençadas    mulheres no esporte.
              Os eventos reúnem jogadoras amadoras, influenciadoras e entusiastas em partidas descontraídas, 
              promovendo empoderamento e criando um ambiente acolhedor e seguro para diferentes perfis e estilos de jogo.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
export default Home