import React from 'react'

const Error = () => {
  return (
    <div className='h-screen flex justify-center items-center text-center'>
      <section className='flex flex-col'>
        <span className='text-9xl text-purple-500 font-bold'>404</span>
        <span className='text-2xl text-black uppercase'>Page Not Found</span>
      </section>
    </div>
  )
}

export default Error