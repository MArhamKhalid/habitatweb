import React from 'react'

const Header = () => {
  return (
    <>
    <header className='absolute w-full h-32 border-b border-b-white z-10 '>
      <nav className='flex justify-between h-full py-0 px-8 text-white ' >

        <div className='flex justify-center items-center text-2xl w-50 h-full border-r border-white underline'>Menu</div>
        <div className='flex justify-center items-center w-100 h-full border-x border-white'>
          <img src='/img/logo-main.png' />
        </div>
        <div className='flex justify-center items-center text-2xl w-50 h-full border-l border-white underline '><a href="#">See Our Works</a></div>

      </nav>
    </header>
    </>
  )
}

export default Header
