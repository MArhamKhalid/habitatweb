import React from 'react'

const Header = () => {
  return (
    <>
    <header className='absolute w-full h-24 border border-b-white z-10 '>
      <nav className='flex justify-around w-full h-100% py-0 px-8 text-white gap-x-60 ' >
        <div className='flex justify-center items-center text-2xl w-80 h-23 border-r border-white underline'>Menu</div>
        <div className='flex flex-col justify-center items-center w-100 h-23 border-x border-white'>
          <h2 className='text-3xl font-semibold   '>HABITAT</h2>
          <h4 className='text-2xl font-bold'>POOL&LANDSACPE</h4>
        </div>
        <div className='flex justify-center items-center text-2xl w-80 h-23.5 border-l border-white underline '><h3>See Our Works</h3> </div>
      </nav>
    </header>
    </>
  )
}

export default Header
