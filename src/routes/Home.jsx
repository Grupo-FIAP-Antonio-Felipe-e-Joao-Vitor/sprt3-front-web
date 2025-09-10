import Imagem1 from '../assets/imagem1home.png'


const Home = () => {
  return (
    <main>
        <img src={Imagem1} alt="foto1" className='w-screen'/>
        <h2 className='flex justify-center font-bold text-purple-600 text-3xl'>Quem somos?</h2>
    </main>
  )
}

export default Home