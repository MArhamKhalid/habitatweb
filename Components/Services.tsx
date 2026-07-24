import React from 'react'

const Services = () => {
  return (
    <section className="w-full h-dvh grid-cols-1 justify-center items-start">
        <img src='/service-01.png ' className='w-full h-full absolute object-cover' />

        <div className="flex grid-rows-2 justify-between items-end w-full px-20 z-10 h-120 text-white">
            <div className="text-7xl font-bold w-250 z-10">
                <h4>Pool Design & Build</h4>
            </div>
            <div className="w-150  text-xl z-10">
                <h3>Custom pools designed around your space, your lifestyle, and your vision—built with precision and long-term durability in mind.</h3>
                <div className='btn-all btn-light relative mt-20'>
                    <a className='relative py-4 px-8 text-xl text-center underline cursor-pointer'>Book A service</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
