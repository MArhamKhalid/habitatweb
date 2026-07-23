import React from 'react'
// import ConImage from '../contactimg.png'

const Contact = () => {
  return (
    <>
    <section className='w-full h-dvh bg-[#112931] px-5'>
        <div className='w-full h-full flex justify-evenly items-center py-0 px-10'>
            <div className='w-100 h-100 text-[#86A3AC]  '>
                <h2 className='text-4xl'>Who we are</h2>
            </div>
            <div className='w-200 h-full flex flex-col justify-center items-start text- '>
                <h2 className='relative  font-extrabold text-7xl text-white left-10 top-34' >From Ordinary To <br/> Extraordinary <br/>Outdoors</h2>
                <img src= '/contactimg.png' alt="image" className='w-100 h-[60%] rounded-xl'/>
            </div>
            <div className='w-200 h-full flex flex-col justify-center items-center text-[#86A3AC]'>
                <h2 className='text-3xl'>Experience a level of craftsmanship where the people you meet are the ones who build your project. No handoffs. No layers. Just direct involvement, every step of the way</h2>
                <div className='button'>Call Us Today
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact
