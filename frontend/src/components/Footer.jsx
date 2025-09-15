import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-purple-400 p-2 text-white flex h-20 flex-col">
      <div className="flex justify-around">
            {/* Redes sociais */}
            <div className="ml-3 flex flex-col justify-center items-center ">
                <h3 className="text-bold">Redes</h3>
                <div className="flex flex-row gap-2 ">
                    <span className="cursor-pointer">
                       <a href="https://www.instagram.com/passaabola" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    </span>
                    <span className="cursor-pointer">
                      <a href="https://www.youtube.com/@passabola" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                    </span>
                    <span className="cursor-pointer">
                        <a href="https://x.com/passaabola" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
                    </span>
                </div>
            </div>
            {/* Contato */}
            <div className="mr-3 flex flex-col items-center justify-center">
                <h3 className="text-bold">Contato</h3>
                <p>contato@passabola.com.br</p>
            </div>
        </div>

      {/* Direitos */}
      <div className="flex justify-center">
        <h3 className="text-bold ">&copy; 2025 - Todos os direitos reservados</h3>
      </div>
    </footer>
  );
};

export default Footer;
