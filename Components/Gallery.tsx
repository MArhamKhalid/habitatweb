import React from 'react'

const items = [
    {
        name: "Luminara",
        imagePath: "/01.png",
        description: "Custom pools designed around your space, your lifestyle, and your vision"
    },
    {
        name: "Soluna",
        imagePath: "/02.png",
        description: "Custom pools designed around your space, your lifestyle, and your vision"
    },
    {
        name: "Orchard",
        imagePath: "/03.png",
        description: "Custom pools designed around your space, your lifestyle, and your vision"
    },
    {
        name: "Loller",
        imagePath: "/04.png",
        description: "Custom pools designed around your space, your lifestyle, and your vision"
    },
    {
        name: "Tranquil",
        imagePath: "/05.png",
        description: "Custom pools designed around your space, your lifestyle, and your vision"
    },
    {
        name: "Amani",
        imagePath: "/06.png",
        description: "Custom pools designed around your space, your lifestyle, and your vision"
    },
]

const Project = () => {

  return (
    <section className=' w-full h-500 flex flex-col bg-white text-black rounded-3xl  py-15 px-21 '>

        <div className='flex flex-col justify-center w-full h-full '>

            <div className='w-full h-36 flex justify-center items-center relative  '>
                <span className='text-4xl absolute text-[#86A3AC] left-0 top-13 '>Projects</span>
                <h4 className='text-8xl'>Explore Our Work</h4>
            </div>

            <div className=' grid grid-cols-3 justify-center gap-4 mt-20'>
                {items.map((item) => (
                    <div className='h-180 w-142 rounded-4xl bg-white border border-gray px-2 flex flex-col justify-center items-center text-center gap-y-8 group hover:bg-[#112931] hover:text-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] ' key={item.name}>
                        <div className='w-12 h-12 rounded-4xl bg-black flex justify-center items-center'>
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className=' text-white p-2 ' ><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg>
                        </div>
                        <h2 className='h-20 w-full text-center text-4xl'>{item.name}</h2>
                        <div className='w-100 h-80 -rotate-3 overflow-hidden rounded-2xl'>
                        <img className='rounded-2xl w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out'  src={item.imagePath} alt={item.name} />

                        </div>
                        <p className='h-24 w-full flex justify-center items-center text-xl'>{item.description}</p>
                    </div>
                ))}
            </div>
            
            <div className='w-full h-50 flex justify-center items-center'>
                        <div className='btn-all btn-s items-center mt-15 flex'>
                            <a href='# ' className='capitalize relative text-[22px] py-8 px-5 leading-7.5 decoration-1 underline  text-[#171717] text-center cursor-pointer'>load more projects</a>
                        </div>
            </div>

        </div>
        
    </section>
  )
}

export default Project
