import React from 'react'

const Detail = () => {
  return (
    <section className='w-full h-dvh bg-[#112931]'>
      <div className='flex justify-between w-full h-full items-center py-18 gap-40'>
          <div className='w-150 '><img className='rounded-2xl' src='/owner.png' /></div>
          <div className='flex flex-col justify-center items-right text-left h-200 w-220 gap-8'>
              <h2 className='text-7xl'>At Habitat Pools & Landscape,<br/> we do things differently</h2>
              <p className='text-3xl capitalize'>When you work with us, you work directly with the owners. We’re<br/> on-site multiple times a week, overseeing every detail,<br/> making decisions in real time, and ensuring nothing<br/> gets lost in translation.</p>
              <div className='btn-all relative mt-10 '>
                <a className='relative py-4 px-8 text-xl text-center underline'>Call Us Today</a>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Detail
