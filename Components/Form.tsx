const Form = () => {
  return (
    <section className="w-full h-dvh justify-center  bg-white">
        <div className="flex justify-between items-center w-full  py-30 px-20 text-[#112931] gap-1">
            <div className="w-full flex justify-between items-center text-[#112931] gap-16">
                <div className="w-full flex flex-col gap-y-5">
                    <div>
                        <p className="text-2xl">Wanna transform your outdoor space? Let’s talk.</p>
                    </div>
                    <div>
                        <h2 className="text-7xl">Schedule Your Free <br />Consultation Today</h2>
                    </div>
                    <div>
                        <p className="text-xl mt-10">Call Us </p>
                        <a href="tel:+4804207515" className=" text-2xl border-b border-solid">( 480 ) 420 7515</a>
                    </div>
                    <div>
                        <p className="text-xl mt-10">Send An Email To</p>
                        <a href="email" className="text-2xl  border-b border-solid">habitatpoolsaz@gmail.com</a>
                    </div>
                    <p className="mt-5">Or complete our online contact form, and a member of our team will get back to you within 24 <br />hours to discuss your project.</p>
                </div>
                <div className=" w-full flex flex-col justify-center">
                    <form action="/" className="flex flex-col gap-4">
                        <div>
                            <input type="text" placeholder="Your Name" className="border border-[#112931] rounded-xl w-full ps-2 py-6 leading-2" required/>
                        </div>
                        <div >
                            <input type="Email" placeholder="Email" className="border border-[#112931] rounded-xl w-full ps-2 py-6 leading-2" required/>
                        </div>
                        <div >
                            <input type="text" placeholder="Mobile Number" className="border border-[#112931] rounded-2xl w-full ps-2 py-6 leading-2" required/>
                        </div>
                        <div >
                            <textarea name="text" placeholder="Message" className="border border-[#112931] rounded-xl w-full ps-2 py-6 leading-5 " rows={4} cols={20} >

                            </textarea>
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
