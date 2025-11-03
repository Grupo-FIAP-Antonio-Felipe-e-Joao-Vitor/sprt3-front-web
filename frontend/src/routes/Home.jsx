import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, Element } from 'react-scroll';

const Home = () => {
  return (  
    <main>
      <div className="relative bg-no-repeat bg-center bg-cover h-screen w-full bg-[url('/imagemhome.jpg')]">
      
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <p className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase leading-snug drop-shadow-lg">
            Venha jogar com 
          </p>
          <p className="bg-gradient-to-r from-purple-500 via-pink-500 to-green-500 bg-clip-text text-transparent font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase">
            o Passa a Bola
          </p>

          <div className="flex mt-8 text-2xl gap-8 sm:gap-14 z-10">
            <a href="https://www.instagram.com/passaabola" target="_blank" rel="noopener noreferrer">
              <div className="flex justify-center items-center bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 p-4 hover:bg-gradient-to-r hover:from-purple-500 hover:to-green-500 text-white hover:scale-110">
                <FaInstagram />
              </div>
            </a>
            <a href="https://www.youtube.com/@passabola" target="_blank" rel="noopener noreferrer">
              <div className="flex justify-center items-center bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 p-4 hover:bg-gradient-to-r hover:from-purple-500 hover:to-green-500 text-white hover:scale-110">
                <FaYoutube />
              </div>
            </a>
            <a href="https://x.com/passaabola" target="_blank" rel="noopener noreferrer">
              <div className="flex justify-center items-center bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 p-4 hover:bg-gradient-to-r hover:from-purple-500 hover:to-green-500 text-white hover:scale-110">
                <FaXTwitter />
              </div>
            </a>
          </div>


          <div className="flex flex-col sm:flex-row gap-6 mt-12">
            <Link
              className="relative cursor-pointer flex justify-center items-center font-semibold text-white text-lg px-8 py-3 rounded-full
              bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg hover:shadow-purple-500/50
              transition-all duration-300 hover:scale-105 active:scale-95"
              to="sobre"
              smooth={true}
              duration={500}
            >
              Sobre Nós
            </Link>

            <Link
              className="relative cursor-pointer flex justify-center items-center font-semibold text-white text-lg px-8 py-3 rounded-full
              bg-gradient-to-r from-green-500 to-purple-600 shadow-lg hover:shadow-green-500/50
              transition-all duration-300 hover:scale-105 active:scale-95"
              to="torneio"
              smooth={true}
              duration={500}
            >
              Torneios
            </Link>
          </div>
        </div>
      </div>

      <Element name="sobre" className="flex flex-col items-center justify-center mt-30 px-4">
        <h1 className="font-bold text-4xl sm:text-5xl bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent text-center">
          Nossas Criadoras
        </h1>
        
        <div className="flex flex-col gap max-w-2xl mt-10 border-2 border-gray-300 hover:border-purple-500 transition-colors duration-400 rounded-2xl p-5">
          <div className="flex justify-around w-full mb-7 mt-5 flex-wrap gap-6">
            <div className="flex flex-col justify-center items-center">
              <div className="w-20 h-20">
                <img src="./public/luanafoto.jpg" alt="Imagem" 
                className="h-full w-full rounded-full object-cover"
                />
              </div>
              <h2 className="font-bold mt-2">
                Luana Maluf
              </h2>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="w-20 h-20">
                <img src="./public/alefoto.jpg" alt="Imagem" 
                className="h-full w-full rounded-full object-cover"
                />
              </div>
              <h2 className="font-bold mt-2">
                Alê Xavier
              </h2>
            </div>
          </div>
          <p className="text-center text-sm sm:text-base">
            Ale Xavier e Luana Maluf são as fundadoras do Passa a Bola, uma plataforma dedicada ao futebol feminino. Com a missão de dar visibilidade e empoderar mulheres no esporte, elas uniram suas experiências — Ale no jornalismo esportivo e Luana como ex-atleta — para criar um espaço que inspira e promove a igualdade no futebol.
          </p>
        </div> 
      </Element>

      <Element name="torneio" className="flex flex-col items-center justify-center mt-25 px-4">
        <h1 className="font-bold text-4xl sm:text-5xl bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent text-center">
          Nossos Torneios
        </h1>
      </Element>

      <div className="flex flex-wrap justify-center gap-8 mt-10 mb-20 px-4">
        <div className="flex flex-col text-center justify-center items-center border-2 border-gray-300 hover:border-purple-500 rounded-2xl h-auto min-h-[20rem] w-72 sm:w-80 p-5">
          <h2 className="mb-3 font-bold text-[20px] bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent">
            Porque participar?
          </h2>
          <p className="text-sm sm:text-base">
            Participar dos nossos torneios é uma oportunidade única de mostrar seu talento, fazer novas conexões e viver a paixão pelo futebol feminino.
          </p>
        </div>

        <div className="flex flex-col text-center justify-center items-center border-2 border-gray-300 hover:border-pink-500 rounded-2xl h-auto min-h-[20rem] w-72 sm:w-80 p-5">
          <h2 className="mb-3 font-bold text-[20px] bg-gradient-to-r from-pink-700 to-pink-500 bg-clip-text text-transparent">
            Como funciona?
          </h2>
          <p className="text-sm sm:text-base">
            Nossos torneios seguem uma estrutura simples e organizada. As equipes competem em partidas emocionantes, sempre com foco no espírito esportivo.
          </p>
        </div>

        <div className="flex flex-col text-center justify-center items-center border-2 border-gray-300 hover:border-green-500 rounded-2xl h-auto min-h-[20rem] w-72 sm:w-80 p-5">
          <h2 className="mb-3 font-bold text-[20px] bg-gradient-to-r from-green-900 to-green-600 bg-clip-text text-transparent">
            Qual o Prêmio?
          </h2>
          <p className="text-sm sm:text-base">
            O prêmio vai além da medalha: visibilidade, oportunidades e a chance de representar o futebol feminino em grandes palcos.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Home;
