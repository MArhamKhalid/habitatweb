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
    <section className=' w-full min-h-screen flex bg-white text-black rounded-t-3xl px-20 pt-24 rounded-4xl '>

        <div className='flex flex-col justify-center items-center w-full '>

            <div className='relative w-full text-center flex items-center justify-center mb-20'>
                <div className='h-full flex items-center absolute left-0'>
                    <h4 className='text-4xl  text-[#86A3AC] '>Projects</h4>
                </div>
                <h4 className='text-8xl text-[#112931]'>Explore Our Work</h4>
            </div>

            <div className=' grid grid-cols-3 justify-center gap-8'>
                {items.map((item) => (
                    <div className=' group h-200 w-140 rounded-4xl border border-gray-200 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] px-15 flex flex-col justify-center items-center text-center gap-y-8 hover:bg-[#112931] hover:text-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] ' key={item.name}>
                        <div className='w-19 h-19 rounded-[50%] bg-[#112931] group-hover:bg-white flex justify-center items-center  ml-110'>
                            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className=' bg-[#112931] text-white group-hover:bg-white rounded-4xl group-hover:text-[#112931] p-2 ' ><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg>
                        </div>
                        <h2 className='h-20 w-full text-center text-6xl'>{item.name}</h2>
                        <div className='w-128 h-95 -rotate-4 overflow-hidden rounded-3xl'>
                            <img className='rounded-2xl w-full h-full object-cover'  src={item.imagePath} alt={item.name} />

                        </div>
                        <p className='h-24 w-full flex justify-center items-center text-xl'>{item.description}</p>
                    </div>
                ))}
            </div>
            
            <div className=' h-30 w-full flex justify-center items-center'>
                    <div className='btn-all flex justify-center btn-s items-center w-250'>
                            <a href='# ' className='flex justify-center capitalize relative text-[22px] py-5 px-16 leading-7.5 decoration-1 underline  text-[#171717] text-center cursor-pointer'>load more projects</a>
                    </div>
            </div>

        </div>
        
    </section>
  )
}

export default Project
