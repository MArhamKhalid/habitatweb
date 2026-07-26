import React from 'react'
// import ConImage from '../contactimg.png'

const Contact = () => {
  return (
    <>
    <section className='pt-44 pb-14 px-32 bg-[#112931]'>
        <div className='w-full h-screen flex justify-center relative'>
            
            {/* <div className='w-270 flex justify-center items-center relative'> */}
                <img src= '/contactimg.png' alt="image" className=' absolute top-23 left-69 rounded-3xl inset-0 w-184 h-200 bg-no-repeat bg-cover'/>
            {/* </div> */}
            <div className='flex justify center w-full z-10 gap-0 '>
                
                <div className=" w-130 pt-28">
                    <h4 className="text-[36px] text-[#86A3AC] ">Who We Are</h4>
                </div>
                <div className=' w-450 h-100 pl-14'>
                    <h5 className=' text-8xl text-white pl-5' >From Ordinary To <br/> Extraordinary <br/>Outdoors</h5>
                </div>
                <div className='w-270 h-100 mt-75 flex flex-col justify-center items-center text-white -pl-15'>
                    <h2 className='text-2xl capitalize leading-10 font-normal'>Habitat Pools was founded in 2024 by two brothers after more than 18 years of combined experience in Arizona's pool and landscape industry. As brothers and business partners, we're passionate about creating outdoor spaces that are as functional as they are beautiful. Unlike larger companies where projects often change hands between multiple departments, we stay involved, committed and transparent.</h2>
                    <div className='w-full'>
                        <div className='btn-all w-150 mt-15'>
                            <a href='#' className='capitalize relative text-[22px] py-4 px-19 leading-7.5 decoration-1 underline  text-white text-center cursor-pointer'>Call Us Today</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact
