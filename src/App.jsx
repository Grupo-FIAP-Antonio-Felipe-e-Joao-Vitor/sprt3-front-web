import { BrowserRouter, Route, Routes } from "react-router-dom"
import Error from "./routes/Error"
import Home from "./routes/Home"
import Torneio from "./routes/Torneio"
import Header from "./components/Header"
import Login from "./routes/Login"
import Cadastro from "./routes/Cadastro"



function App() {

  return (

    <BrowserRouter>
      <Header/>
      <main>
        <Routes>

          <Route path="*" element={<Error/>}/>

          <Route path="/" element={<Home/>}/>

          <Route path="/torneio" element={<Torneio/>}/>

          <Route path="/login" element={<Login/>}/>
          
          <Route path="/cadastro" element={<Cadastro/>}/>

        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
