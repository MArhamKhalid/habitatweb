import React from 'react'

const Detail = () => {
  return (
    <section className='w-full h-dvh bg-[#112931]'>
        <div className='flex justify-between items-center w-full py-18 px-10 gap-60'>
            <div className='w-[35%] '><img src='/owner.png' className=' rounded-3xl' /></div>
            <div className='flex flex-col justify-center items-center text-left h-200 w-[40%] gap-5'>
                <h2 className='text-7xl text-white text-left'>At Habitat Pools & Landscape, we do things differently</h2>
                <p className='text-3xl text-white text-left'>When you work with us, you work directly with the owners.<br/> We’re on-site multiple times a week, overseeing every detail, making decisions in real time,<br/> and ensuring nothing gets lost in translation.</p>
                <div className='btn-all items-center mt-15'>
                    <a href='/' className='capitalize relative text-[22px] py-8 px-5 leading-7.5 decoration-1 underline  text-white text-center cursor-pointer'>Book A service</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Detail
