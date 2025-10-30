import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, Element } from 'react-scroll';


const Home = () => {
  return (  
    <main>
      <div className="md:relative bg-no-repeat bg-bottom bg-cover h-screen w-full md:bg-[url('/imagemhome.jpg')]">
        <div className="md:bg-black/70 absolute inset-0"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center mb-30">
          <p className="text-white font-bold text-5xl w-120 uppercase">
            Venha jogar com 
          </p>
          <p className="bg-gradient-to-r from-purple-500 via-pink-500 to-green-500 bg-clip-text text-transparent font-bold text-5xl w-102 uppercase">
            o Passa a Bola
          </p>

          {/* Div redes sociais */}
          <div className='flex mr-7 mt-6 text-2xl gap-20 z-10'>
            <a href="https://www.instagram.com/passaabola" target="_blank" rel="noopener noreferrer">
              <div className='flex justify-center items-center md:bg-white rounded-full transition-all duration-300 p-4 hover:bg-gradient-to-r hover:from-purple-500 hover:to-green-500'>
                <span><FaInstagram/></span>
              </div>
            </a>
            <a href="https://www.youtube.com/@passabola" target="_blank" rel="noopener noreferrer">
              <div className='flex justify-center items-center md:bg-white rounded-full p-4 hover:bg-gradient-to-r hover:from-purple-500 hover:to-green-500 transition duration-300'>
                <span><FaYoutube/></span>
              </div>
            </a>
            <a href="https://x.com/passaabola" target="_blank" rel="noopener noreferrer">
              <div className='flex justify-center items-center md:bg-white rounded-full p-4 hover:bg-gradient-to-r hover:from-purple-500 hover:to-green-500 transition duration-300'>
                <span><FaXTwitter/></span>
              </div>
            </a>
          </div>
          <div className="flex gap-25 mt-20">
            <Link className="cursor-pointer flex justify-center items-center text-white bg-purple-500 rounded-2xl h-10 w-25"
            to="sobre"
            smooth={true}
            duration={500}
            >
            Sobre Nós
            </Link>
            <Link className="cursor-pointer flex justify-center items-center text-white bg-purple-500 rounded-2xl h-10 w-25"
            to="torneio"
            smooth={true}
            duration={500}
            >
            Torneios
            </Link>
          </div>
        </div>
        
      </div>

      <Element name="sobre" className="flex flex-col items-center justify-center text-center mt-30 ">
        <h1 className="font-bold text-5xl bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent">
          Nossas Criadoras
        </h1>
        
        <div className="max-w-2xl mt-15 border-2 border-gray-300 hover:border-purple-500 transition-colors duration-400 rounded-2xl p-3">
          <h2>Luana Maluf e Alê Xavier</h2>
          <p className="mb-3">Fundadoras do Passa a Bola</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, ullam facilis asperiores nesciunt sint assumenda quibusdam magnam odio consectetur veritatis non nam tempora rem soluta perspiciatis esse excepturi? Ut, accusantium!</p>
        </div> 
      </Element>

      <Element name="torneio" className="flex flex-col items-center justify-center mt-25">
        <h1 className="font-bold text-5xl bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent">
          Nossos Torneios
        </h1>
        <p className="mt-5">
          Como funciona nosso torneio
        </p>
      </Element>

      <div className="flex space-x-5 justify-center mt-10 mb-20">
        <div className="flex flex-col text-center justify-center  items-center border-2 border-gray-300 hover:border-purple-500 rounded-2xl h-80 w-80">
          <h2 className="mb-5 font-bold text-[20px] bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent">
            Porque participar?
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maxime adipisci libero inventore expedita quas.</p>
        </div>

        <div className="flex flex-col text-center justify-center  items-center border-2 border-gray-300 hover:border-pink-500 rounded-2xl h-80 w-80">
          <h2 className="mb-5 font-bold text-[20px] bg-gradient-to-r from-pink-700 to-pink-500 bg-clip-text text-transparent">
            Como funciona?
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maxime adipisci libero inventore expedita quas.</p>
        </div>

        <div className="flex flex-col text-center justify-center  items-center border-2 border-gray-300 hover:border-green-500 rounded-2xl h-80 w-80">
          <h2 className="mb-5 font-bold text-[20px] bg-gradient-to-r from-green-900 to-green-600 bg-clip-text text-transparent">
            Título?
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maxime adipisci libero inventore expedita quas.</p>
        </div>
      </div> 
      
      
    </main>
  )
}
export default Home