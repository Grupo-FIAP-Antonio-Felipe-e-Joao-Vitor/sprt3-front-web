import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // precisa importar useNavigate
import { FaBars, FaTimes, FaBell } from "react-icons/fa";
import Logo from '../assets/logo.png';

const Header = ({ setUsuario, usuario }) => {
  const [showNot, setShowNot] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-purple-400 p-4 text-white relative z-50">
      <nav className="flex justify-between items-center w-full max-w-7xl mx-auto">
        
        {/* Logo */}
        <Link to="/" className="flex cursor-pointer items-center">
          <img className="w-20 h-20" src={Logo} alt="logo" />
        </Link>

        {/* Menu links (desktop) */}
        <ul className="hidden md:flex gap-6 text-lg font-semibold items-center">
          <li>
            <Link to="/" className="hover:text-black cursor-pointer font-bold transition-colors duration-300">Home</Link>
          </li>
          <li>
            <Link to="/torneio" className="hover:text-black cursor-pointer font-bold transition-colors duration-300">Torneio</Link>
          </li>
          {usuario && usuario.role === "Admin" ?
            (
            <li>
              <Link to="/admin" className="hover:text-black cursor-pointer font-bold transition-colors duration-300">Admin</Link>
            </li>
            ) : null}
        </ul>

        {/* Direita */}
        <div className="flex items-center gap-4">
          {!usuario ? (
            // Se não tem usuário → Sign in
            <Link
              to="/login"
              className="hidden md:inline-block cursor-pointer bg-purple-600 px-4 py-2 rounded-2xl hover:bg-purple-400 hover:text-black transition duration-300"
            >
              Sign in
            </Link>
          ) : (
            // Se tem usuário → Sign out
            <button
              onClick={() => {
                setUsuario(null);
                localStorage.removeItem("usuario");
                navigate("/");
              }}
              className="hidden md:inline-block cursor-pointer bg-purple-600 px-4 py-2 rounded-2xl hover:bg-purple-400 hover:text-black transition duration-300"
            >
              Sign out
            </button>
          )}

          {/* Sino */}
          <button className="cursor-pointer" onClick={() => setShowNot(!showNot)}>
            <FaBell className="w-6 h-6 text-purple-600 hover:text-white transition duration-300"/>
          </button>

          {/* Menu hamburguer (mobile) */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu mobile */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 mt-4 text-lg font-semibold bg-purple-300 p-4 rounded-xl">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/torneio" onClick={() => setMenuOpen(false)}>Torneio</Link>
          </li>
          {usuario && usuario.role === "Admin" ? (
            <li>
              <Link to="/admin" onClick={() => setMenuOpen(false)}>
                Admin
              </Link>
            </li>
          ) : null}

          {!usuario ? (
            <li>
              <Link
                to="/login"
                className="bg-purple-600 px-4 py-2 rounded-2xl hover:bg-purple-400 hover:text-black"
                onClick={() => setMenuOpen(false)}
              >
                Sign in
              </Link>
            </li>
          ) : (
            <li>
              <button
                onClick={() => {
                  setUsuario(null);
                  localStorage.removeItem("usuario");
                  navigate("/");
                  setMenuOpen(false);
                }}
                className="bg-purple-600 px-4 py-2 rounded-2xl hover:bg-purple-400 hover:text-black"
              >
                Sign out
              </button>
            </li>
          )}
        </ul>
      )}

      {/* Notificações */}
      {showNot && (
        <div className="absolute top-24 right-4 w-64 h-40 bg-white text-black rounded-xl shadow-lg flex items-center justify-center animate-slideInRight z-40">
          Notificações!
        </div>
      )}
    </header>
  );
};

export default Header;
