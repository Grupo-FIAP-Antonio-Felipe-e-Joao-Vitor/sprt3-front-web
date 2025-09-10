import { Link } from "react-router-dom"
import Logo from '../assets/logo.png'
import IconSino from '../assets/iconSino.png'

const Header = () => {
  return (
    <header className="bg-purple-400 p-4 text-white">
        <nav className=" mx-2.5 flex justify-between items-center ">
        <Link to="/"> 
            <img className="w-auto h-20" src={Logo} alt="logo" />
        </Link>   
            <ul className="flex gap-2 pr-7 text-lg font-semibold items-center">
                <li className="list-none">    
                    <Link to="/" className="hover:text-lime-600 transition-colors duration-300">Home</Link>
                </li>

                <li className="list-none">
                    <Link to="/torneio" className="hover:text-lime-600 transition-colors duration-300">Torneio</Link>
                </li>
                
                <button className="cursor-pointer" ><img src={IconSino} alt="Notificações" className="w-7 h-7"/></button>
            </ul>

        </nav>
    </header>
  )
}

export default Header