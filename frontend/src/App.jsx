import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Error from "./routes/Error"
import Home from "./routes/Home"
import Torneio from "./routes/Torneio"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Login from "./routes/Login"
import Cadastro from "./routes/Cadastro"
import Admin from "./routes/Admin"
import AdminUsuarios from "./routes/AdminUsuarios"
import AdminTorneios from "./routes/AdminTorneios"
import AdminCriarTorneio from "./routes/AdminCriarTorneio"

function App() {
  const [usuario, setUsuario] = useState(() => {
    const usuarioSalvo = localStorage.getItem("usuario");
    return usuarioSalvo ? JSON.parse(usuarioSalvo) : null;
  });


  return (

    <BrowserRouter>
      <Header setUsuario={setUsuario} usuario={usuario} />
      <main>
        <Routes>

          <Route path="*" element={<Error/>}/>

          <Route path="/" element={<Home/>}/>

          <Route path="/torneio" element={<Torneio usuario={usuario}/>}/>

          <Route path="/login" element={<Login setUsuario={setUsuario}/>}/>
          
          <Route path="/cadastro" element={<Cadastro setUsuario={setUsuario}/>}/>

          <Route path="/admin" element={<Admin usuario={usuario}/>}/>

          <Route path="/admin/usuarios" element={<AdminUsuarios usuario={usuario}/>}/>
          
          <Route path="/admin/torneios" element={<AdminTorneios usuario={usuario}/>}/>

          <Route path="/admin/criar-torneio" element={<AdminCriarTorneio usuario={usuario}/>}/>
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
