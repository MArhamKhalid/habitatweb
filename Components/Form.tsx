const Form = () => {
  return (
    <section className="w-full justify-center  bg-white">
        <div className="flex justify-between items-center w-full  py-30 px-20 text-[#112931] gap-1">
            <div className=" flex justify-between items-center w-full">
                <div className="w-full flex flex-col gap-5">
                    <p className="text-2xl">Wanna transform your outdoor space? Let’s talk.</p>
                    <h2 className="text-7xl">Schedule Your Free <br />Consultation Today</h2>
                    <h4 className="text-3xl">Call Us <br /><span className="underline text-2xl decoration-px">( 480 ) 420 7515</span></h4>
                    <h4 className="text-3xl">Send An Email To <br /><span className="underline text-2xl decoration-px">habitatpoolsaz@gmail.com</span></h4>
                    <p>Or complete our online contact form, and a member of our team will get back to you within <br /> 24 hours to discuss your project.</p>
                </div>
                <div className=" w-full flex flex-col justify-center">
                    <form action="/" className="flex flex-col gap-10">
                        <div>
                            <input type="text" placeholder="Your Name" className="border border-[#112931] rounded-2xl w-full ps-2 py-6 leading-2" required/>
                        </div>
                        <div >
                            <input type="Email" placeholder="Email" className="border border-[#112931] rounded-2xl w-full ps-2 py-6 leading-2" required/>
                        </div>
                        <div >
                            <input type="text" placeholder="Mobile Number" className="border border-[#112931] rounded-2xl w-full ps-2 py-6 leading-2" required/>
                        </div>
                        <div >
                            <textarea name="text" placeholder="Message" className="border border-[#112931] rounded-2xl w-full ps-2 py-6 leading-2" id=""></textarea>
                        </div>
                        <div className='btn-all btn-s h-16 w-50  items-center mt-12'>
                            <a href='# ' className='capitalize relative flex justify=center text-[22px] py-3 px-30 leading-7.5 decoration-1 underline  text-[#171717] text-center cursor-pointer'> 
                                <img src='/img/arrow-right.svg' className="absolute left-16 top-2" /> submit
                            </a>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Form
