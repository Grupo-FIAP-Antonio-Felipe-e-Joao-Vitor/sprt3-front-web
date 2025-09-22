import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Error from "./routes/Error"
import Home from "./routes/Home"
import Torneio from "./routes/Torneio"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HeaderLogado from "./components/HeaderLogado"
import Login from "./routes/Login"
import Cadastro from "./routes/Cadastro"
import Admin from "./routes/Admin"

function App() {
  const [usuario, setUsuario] = useState(() => {
    const usuarioSalvo = localStorage.getItem("usuario");
    return usuarioSalvo ? JSON.parse(usuarioSalvo) : null;
  });


  return (

    <BrowserRouter>
      {usuario ? <HeaderLogado setUsuario={setUsuario} /> : <Header />}
      <main>
        <Routes>

          <Route path="*" element={<Error/>}/>

          <Route path="/" element={<Home/>}/>

          <Route path="/torneio" element={<Torneio/>}/>

          <Route path="/login" element={<Login setUsuario={setUsuario}/>}/>
          
          <Route path="/cadastro" element={<Cadastro/>}/>

          <Route path="/admin" element={<Admin usuario={usuario}/>}/>

        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
