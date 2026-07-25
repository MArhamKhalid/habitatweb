import React from 'react'

const Header = () => {
  return (
    <>
    <header className='absolute top-0 left-0 w-full h-35.2 border-b border-[#e1e1e140] z-10'>
      <nav className='flex justify-between h-full py-0 px-8 text-white ' >

        <div className='flex justify-center items-center text-xl pl-[54px] pr-[180px] py-[40px] border-r border-[#e1e1e140]'>
          <a href="#"  className='underline decoration-1 underline-offset-3'>
            Menu
          </a>
        </div>
        <div className='flex justify-center items-center px-[104px] py-[40px] border-x border-[#e1e1e140]'>
          <a href="#">
            <img src='/img/logo-main.png' className='h-[58px]' />
          </a>
        </div>
        <div className='flex justify-center items-center text-xl py-[40px] pr-[54px] pl-[101px]  border-l border-[#e1e1e140]'>
          <a href="#" className='underline decoration-1 underline-offset-3'>
            See Our Work
          </a>
        </div>

      </nav>
    </header>
    </>
  )
}

export default Header
