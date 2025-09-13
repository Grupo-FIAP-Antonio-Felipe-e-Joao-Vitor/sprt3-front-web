
const Footer = () => {
  return (
    <footer className='bg-purple-400 text-white flex h-20 mt-15 justify-between'>
        {/* Redes sociais */}
        <div className="ml-3">
            <h3 className='text-bold'>
                Redes
            </h3>
        </div>

        {/* Direitos */}
        <div>
            <h3 className='text-bold '>
                Todos os direitos reservados
            </h3>
        </div>

        {/* Contato */}
        <div className="mr-3">
            <h3 className='text-bold'>
                Contato
            </h3>
            <link rel="stylesheet" href="" />
        </div>

    </footer>
  )
}

export default Footer