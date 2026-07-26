import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full h-150 flex justify-center items-center px-20 bg-white'>
        <div className='w-full'>
            
            <div className='w-full h-120 bg-[#112931] rounded-4xl text-white flex justify-center items-center px-10 gap-2'>
                <div className='w-full flex flex-col'>
                    <h2 className='text-6xl'>
                    Talk To Us About <br />
                    Your Project
                    </h2>

                    <div className='flex gap-10 ps-3 text-2xl'>
                        <a href="#">Instagram</a>
                        <a href="#">Facebook</a>
                    </div>
                </div>
                <div className='w-full '>
                    <div className='w-full flex justify-center'>
                        <a href="#" className='flex flex-col justify-center items-center'>
                            <img src="/img/back-top.svg" className='w-7 h-7'/>
                            <h4 className='text-2xl'>Back To Top</h4>
                        </a>
                    </div>
                </div>

                <div className=' w-full flex justify-center'>
                    <div className='grid grid-cols-2 gap-2 capitalize w-50 text-xl leading-10'>

                        <a href="#">home</a>
                        <a href="#">about</a>
                        <a href="#">services</a>
                        <a href="#">projects</a>
                        <a href="#">reviews</a>
                        <a href="#">contact</a>
                    </div>
                </div>
            </div>
            
            <div className='w-full py-10 flex justify-center items-center text-[#112931]'>
                <h1>© 2026 – Copyright HABITAT</h1>
            </div>
        </div>

    </footer>
  )
}

export default Footer
