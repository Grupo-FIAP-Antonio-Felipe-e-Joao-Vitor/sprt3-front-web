import { useState } from "react"
import { Link } from "react-router-dom"
import Logo from '../assets/logo.png'
import IconSino from '../assets/iconSino.png'

const Header = () => {
    // Setando o valor padrão do showNot
  const [showNot, setShowNot] = useState(false) 
  
  return (
    <header className="bg-purple-400 p-4 text-white">
        <nav className=" mx-2.5 flex justify-between items-center ">
        <Link to="/"> 
            <img className="w-auto h-20" src={Logo} alt="logo" />
        </Link>   
            <ul className="flex gap-2 pr-7 text-lg font-semibold items-center">
                <li className="list-none">    
                    <Link to="/" className="hover:text-black transition-colors duration-300">Home</Link>
                </li>

                <li className="list-none">
                    <Link to="/torneio" className="hover:text-black transition-colors duration-300">Torneio</Link>
                </li>
                
                <Link to="/login" className="bg-purple-600 px-4 py-2 cursor-pointer rounded-2xl hover:bg-purple-400 transition-colors duration-300 hover:text-black">Sign in</Link>
                <button className="cursor-pointer" onClick={() => setShowNot(!showNot)}><img src={IconSino} alt="Notificações" className="w-7 h-7"/></button>
                
            </ul>
        </nav>

        {/* Animação das notificações */}
        {showNot && (
            <div className="absolute top-20 right-4 w-64 h-40 bg-white text-black rounded-xl shadow-lg flex items-center justify-center animate-slideInRight">
                Notificações!
            </div>    
        )}
        

        
    </header>
  )
}

export default Header