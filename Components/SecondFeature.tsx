const SecondFeature = () => {
  return (
    <section className="w-full h-auto grid-cols-1 justify-center items-start bg-[#112931]">

        <div className="flex flex-col justify-between items-center w-full  py-30 px-24 text-white gap-12">
            <div className=" flex justify-center items-center w-full relative">
                <span className="absolute left-0 text-[36px] text-[#86A3AC]">Features</span>
                <h2 className="text-8xl leading-1.1 capitalize ">Enhance Your Pool with <br/>Premium Features</h2>
            </div>
            <div className="flex justify-evenly items-center overflow-hidden h-full">
                <div className="w-140  overflow-hidden relative" >
                    <img src='/img/features_1.png' className="absolute w-full h-full " />
                
                    <div className="relative z-10 flex items-end h-135 left-2 ">
                        <h2 className="text-3xl">Water Features</h2>
                    </div>
                </div>
                <div className="w-70 overflow-hidden relative" >
                    <img src='/img/features_2.jpg' className="absolute w-full h-full " />
                
                    <div className="relative z-10 flex items-end h-135 left-2 ">
                        <h2 className="text-3xl">Outdoor Fire Features</h2>
                    </div>
                </div>
                <div className="w-70 overflow-hidden relative" >
                    <img src='/img/features_3.jpg' className="absolute w-full h-full " />
                
                    <div className="relative z-10 flex items-end h-135 left-2 ">
                        <h2 className="text-3xl">lighting features</h2>
                    </div>
                </div>
                <div className="w-70 overflow-hidden relative " >
                    <img src='/img/features_4.png' className="absolute w-full h-full " />
                
                    <div className="relative z-10 flex items-end h-135 left-2 ">
                        <h2 className="text-3xl">Outdoor Kitchens</h2>
                    </div>
                </div>
            </div>
        </div>    
    </section>
    
  )
}

export default SecondFeature
