import React from 'react'

const Preview = () => {
  return (
    <section className="w-full justify-center bg-white">
        <div className=' pt-34 pb-190 px-24 '>
            <div className="flex justify-center items-center w-full h-full text-[#112931] gap-1">
                <h2 className="text-8xl leading-1.1 capitalize ">before & after</h2>
            </div>
            <div className='w-full h-full flex justify-center mt-60 relative'>
                <div className=' flex justify-center items-center absolute w-210 h-120 gap-px '>
                    <img src="/img/before-pool.png" alt="before" className=' rounded-l-2xl'/>
                    <div className='bg-white w-1 h-210 absolute flex justify-center items-center'>
                        <div className='p-2 bg-white flex justify-center rounded-3xl'>
                            <svg  xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 24 24" className='text-black' >
                            <path d="m13.29 7.71 4.3 4.29-4.3 4.29 1.42 1.42 5.7-5.71-5.7-5.71zm-2.58 8.58L6.41 12l4.3-4.29-1.42-1.42L3.59 12l5.7 5.71z"></path>
                            </svg>
                        </div>
                    </div>
                    <img src="/img/after-pool.png" alt="after"  className=' rounded-r-2xl'/>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Preview
