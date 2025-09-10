import Imagem1 from '../assets/imagem1home.png'


const Home = () => {
  return (
    <main>
        <img src={Imagem1} alt="foto1" className='w-screen'/>
        <h2 className='flex justify-center font-bold text-purple-600 text-3xl'>Quem somos?</h2>
        <div className='w-200 flex justify-center p-4'>
          <p className='overflow-hidden text-clip'> O Passa a Bola é um projeto de mídia independente que dá visibilidade ao esporte feminino, especialmente ao futebol.
            Criado por Alê Xavier e Luana Maluf, o canal promove transmissões, entrevistas, reportagens e conteúdos digitais com foco em valorizar atletas mulheres, 
            combater o machismo no esporte e ampliar a presença feminina na mídia esportiva.</p>
        </div>
    </main>
  )
}

export default Home