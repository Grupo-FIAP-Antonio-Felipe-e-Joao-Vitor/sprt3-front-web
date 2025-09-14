import { useState } from "react"
import { Link } from "react-router-dom"
import Logo from '../assets/logo.png'
import IconSino from '../assets/iconSino.png'

const Header = () => {
    // Setando o valor padrão do showNot
  const [showNot, setShowNot] = useState(false) 
  
  return (
  <header className="bg-purple-400 p-4 text-white">
    <nav className="flex flex-col md:flex-row md:justify-between md:items-center w-full max-w-7xl mx-auto">
      {/* Logo */}
      <Link to="/" className="flex justify-center md:justify-start mb-4 md:mb-0">
        <img className="w-20 h-20" src={Logo} alt="logo" />
      </Link>

      {/* Menu */}
      <ul className="flex gap-4 md:gap-6 text-lg font-semibold justify-center items-center">
        <li className="list-none">
          <Link
            to="/"
            className="hover:text-black transition-colors duration-300"
          >
            Home
          </Link>
        </li>

        <li className="list-none">
          <Link
            to="/torneio"
            className="hover:text-black transition-colors duration-300"
          >
            Torneio
          </Link>
        </li>

        <li className="list-none">
          <Link
            to="/login"
            className="bg-purple-600 px-4 py-2 rounded-2xl hover:bg-purple-400 transition-colors duration-300 hover:text-black"
          >
            Sign in
          </Link>
        </li>

        <li className="list-none">
          <button
            className="cursor-pointer"
            onClick={() => setShowNot(!showNot)}
          >
            <img
              src={IconSino}
              alt="Notificações"
              className="w-7 h-7"
            />
          </button>
        </li>
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