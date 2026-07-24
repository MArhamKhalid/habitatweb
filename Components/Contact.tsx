import React from 'react'
// import ConImage from '../contactimg.png'

const Contact = () => {
  return (
    <>
    <section className='w-full h-dvh bg-[#112931] px-5'>
        <div className='w-full h-full flex justify-evenly items-center py-0 px-10'>
            <div className="flex justify-center items-center w-70 h-full relative">
                <span className="absolute left-0 top-24 text-[36px] text-[#86A3AC]">Who We Are</span>
            </div>
            <div className='w-200 h-full flex flex-col justify-center items-start '>
                <h2 className='relative  font-extrabold text-7xl text-white left-10 top-30' >From Ordinary To <br/> Extraordinary <br/>Outdoors</h2>
                <img src= '/contactimg.png' alt="image" className='w-160 h-[70%] rounded-xl'/>
            </div>
            <div className='w-200 h-full flex flex-col justify-center items-center text-[#86A3AC]'>
                <h2 className='text-3xl'>Experience a level of craftsmanship where the people you meet are the ones who build your project. No handoffs. No layers. Just direct involvement, every step of the way</h2>
                <div className='btn-all h-16 w-50  items-center mt-15'>
                    <a href='/' className='capitalize relative text-[22px] py-8 px-6 leading-7.5 decoration-1 underline  text-white text-center cursor-pointer'>Call Us Today</a>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact
