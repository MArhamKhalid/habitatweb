import React from 'react'

const Detail = () => {
  return (
    <section className='w-full bg-[#112931] py-30 px-10'>
        <div className='flex justify-between items-center w-full gap-1'>
            <div className='w-full h-auto '>
                <img src='/owner.png'/>
                </div>
            <div className='flex flex-col justify-center text-right w-full h-200 gap-y-12 text-white'>
                <div>
                    <h2 className='text-6xl'>At Habitat Pools &<br/>Landscape, we do things<br/>differently</h2>
                </div>
                <div>  
                    <p className='text-2xl leading-10'>Habitat Pools builds custom swimming pools, luxury<br/>landscapes, and complete outdoor living spaces across<br/>Arizona's East Valley.</p>
                </div>
                <div>
                    <ul className='grid grid-cols-2 text-2xl leading-10'>
                        <li>Gilbert</li>
                        <li>Queen Creek</li>
                        <li>San Tan Valley</li>
                        <li>Mesa</li>
                        <li>Tempe</li>
                        <li>Scottsdale</li>
                        <li>Paradise Valley</li>
                        <li>Cave Creek</li>
                        <li>Ahwatukee</li>
                        <li>Phoenix</li>
                    </ul>
                </div>
                <div>
                    <p className='text-2xl text-right '>We've also done projects in Goodyear, Glendale, and Peoria,<br/>and we're always happy to discuss projects in nearby<br/>communities.</p>
                </div>
                <div className='btn-all pr-3 mt-3 '>
                    <a href='#' className=' capitalize relative text-[22px] py-2 px-20 leading-7.5 decoration-1 underline  text-white text-center cursor-pointer'>Book A service</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Detail
