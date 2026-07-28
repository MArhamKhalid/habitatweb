import React from 'react'

const Services = () => {
  return (
    <section className="relative w-full h-280 bg-white ">
        <img src='/service-01.png ' className=' absolute w-full h-full bg-cover object-cover rounded-3xl' />

        <div className="relative flex justify-between  px-20 pt-54 z-10  text-white">
            <div className="w-244 uppercase pt-16">
                <h4 className="text-[66px] leading-16">Custom Swimming Pool<br/>Construction</h4>
            </div>
            <div className='w-90% '>
                <p className="  text-2xl leading-9 ">Every phase of swimming pool construction is<br/>carefully coordinated, from excavation and<br/>engineering to plumbing, electrical work, shotcrete,<br/>tile installation, coping, decking, landscaping, and<br/>premium pebble finishes. 90 days is all it takes!</p>
                <div className='btn-all w-full  mt-8 relative'>
                    <a href='#' className='  capitalize relative text-[22px] py-6 px-21 leading-7.5 decoration-1 underline  text-white text-center cursor-pointer'>Book A service</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
