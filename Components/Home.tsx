import React from 'react'

const Home = () => {
  return (
    <section className='relative w-full h-dvh flex justify-center items-end text-white '>
        
        {/* <div className="relative h-screen w-full overflow-hidden flex items-center justify-center"> */}
            <video className="w-full h-full absolute inset-0 object-cover "  
                autoPlay
                muted
                loop
                playsInline>
                <source src="/HOMEVideo.webm" type="video/webm" />
            </video> 
        {/* </div> */}
        <div className='w-full flex justify-evenly items-center gap-y-5 z-10'>
            <div className='w-120 h-40 ' >
                <h2 className='text-7xl font-bold '>Luxury Pools <br/> & Landscape</h2>
            </div>
            <div className='flex flex-col justify-center items-center w-70 h-40 '>
                <div><img src='/img/arrow.png' alt='for scroll' className='size-xl ' /></div>
            </div>
            <div className='w-100 h-34'>
                <h2 className='text-2xl'>Experience a level of craftsmanship where the people<br/> you meet are the ones who build your</h2>
            </div>
        </div>
    </section>
  )
}

export default Home
