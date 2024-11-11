import any from '../../assets/faq/faq_banner.jpg'

const AnyQuestion = () => {
    return (
        <section className="py-28 z-10 bg-[#F4F4FF] relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[url('/src/assets/faq/after.png')] after:-z-20">
            <div className="container z-40">
                <div className="flex justify-between">
                    <div className="">
                        <img src={any} alt="" className='rounded-3xl' />
                    </div>
                    <div className="">
                        <div className="">
                            <h4
                                className='font-nuni font-bold text-[46px] text-[#252424] leading-[56px]'>Ask any Question
                            </h4>
                            <p
                                className='font-dmSans font-normal text-[16px] text-ptag leading-[26px] w-[70%] py-[18px]'>
                                Sed primis eu conubia erat ut nam vitae a habitant dui adipiscing as dignissim eu a ad venenatis.
                            </p>
                        </div>
                        <div className="flex justify-between items-center pt-5">
                            <input
                                type="text"
                                placeholder='Your Name'
                                className='py-[21px] px-[23px] rounded-full w-[48%] font-dmSans font-normal text-[14px] text-main leading-[14px]'
                            />
                            <input
                                type="email" name="" id=""
                                placeholder='Email Address'
                                className='py-[21px] px-[23px] rounded-full w-[48%] font-dmSans font-normal text-[14px] text-main leading-[14px]'
                            />
                        </div>
                        <textarea
                            className="py-5 px-6 rounded-2xl font-dmSans font-normal text-[14px] leading-[14px] w-full min-h-[170px] my-5"
                            placeholder="Your Message">
                        </textarea>
                        <button
                            className="font-dmSans font-normal text-[18px] text-[#fff] leading-[18px] text-center px-[33px] py-5 bg-gradient-to-r from-[#FFAA52] to-endC via-[#FE651B] rounded-full mt-[10px] relative after:absolute after:w-[50%] after:h-full after:top-0 after:left-0 after:bg-[#00000015] after:rounded-l-full  hover:after:w-0 after:duration-500 overflow-hidden before:absolute before:w-[50%] before:h-full before:top-0 before:right-0 before:bg-[#00000015] before:rounded-r-full hover:before:w-0 before:duration-500"
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AnyQuestion