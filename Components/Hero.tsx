import React from 'react'

const Home = () => {
  return (
    <section className='relative w-full h-screen flex flex-col justify-center items-center text-white '>
            <video className=" absolute top-0px left-0px inset-0 object-cover h-full w-full  overflow-hidden  "  
                autoPlay
                muted
                loop
                playsInline>
                <source src="/HOMEVideo.webm" type="video/webm" />
            </video>

        <div className='relative top-78 gap-20 flex justify-center  items-center z-10'>
            <div className=' -pr-3 ' >
                <h1 className='text-white text-[80px] leading-19 font-normal '>Custom Pool<br/>Builders In<br/>Phoenix, Arizona</h1>
            </div>
            <div className='w-88 '>
                <img src='/img/arrow.png' alt='for scroll'  />
            </div>
            <div className='-ml-12  '>
                <h2 className='text-white text-[22px] leading-11 capitalize font-normal'>We design and build custom pools, luxury landscapes, and<br/>complete outdoor living spaces throughout Gilbert, Queen<br/>Creek, Mesa, Scottsdale, Tempe, Paradise Valley, Phoenix, and<br/>the surrounding East & West Valley.</h2>
            </div>
        </div>
    </section>
  )
}

export default Home
