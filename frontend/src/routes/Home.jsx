  import Imagem1 from '../assets/imagemhome.jpg';
  import { FaInstagram } from "react-icons/fa";
  import { FaYoutube } from "react-icons/fa";
  import { FaXTwitter } from "react-icons/fa6";


const Home = () => {
  return (
    <main>
        <img src={Imagem1} alt="foto1" className='w-screen'/>

        <div className='flex w-full ml-18'>

          {/* Texto sobre o Passa a Bola */}
          <div className='flex flex-col justify-center text-center p-1 gap-5'>

            <h2 className='flex font-bold justify-center text-purple-600 text-3xl mt-10'>Quem somos?</h2>

            <p className='max-w-4xl text-2xl text-center'> O Passa a Bola é um projeto de mídia independente que dá visibilidade ao esporte   feminino, especialmente ao futebol.
              Criado por Alê Xavier e Luana Maluf, o canal promove transmissões, entrevistas, reportagens e conteúdos digitais com  foco em valorizar atletas mulheres, 
              combater o machismo no esporte e ampliar a presença feminina na mídia esportiva.</p>
          </div>

          {/* Div redes sociais */}
          <div className='flex flex-col justify-center items-center text-center w-1/2 mt-10 text-2xl gap-2'>
            <div className='flex gap-0.5'>
              <span className='mt-[5px]'><FaInstagram/></span>
              <p>Instagram</p>
            </div>

            <div className='flex gap-0.5'>
              <span className='mt-[5px]'><FaYoutube/></span>
              <p>YouTube</p>
            </div>

            <div className='flex gap-0.5'>
              <span className='mt-[5px]'><FaXTwitter/></span>
              <p>Twitter</p>
              
            </div>

          </div>

        </div>



        {/* Texto sobro os Torneios */}

        {/* Div pai para centralizar a section */}
        <div className='relative flex justify-center mt-17 group'> 

          {/* Card principal */}
          <div className='flex bg-gradient-to-r from-purple-500 to-purple-600 max-w-3xl w-full justify-center items-center flex-col text-center p-6 rounded-[50px] transition duration-700 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-[-10px_10px_0px_3px_rgba(92,_6,_177,_1)]'>

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