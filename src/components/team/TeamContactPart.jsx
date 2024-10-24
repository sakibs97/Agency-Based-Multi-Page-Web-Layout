import contact from '../../assets/team/details/contact.png'

const TeamContactPart = () => {
    return (
        <section>
            <div className="container mb-28">
                <div className="bg-[#F4F4FF] rounded-xl flex items-center p-[50px]">
                    <div className="w-[50%]">
                        <div className="px-[60px]">
                            <h4 className="font-nuni font-bold text-[46px] text-main leading-[36px]"
                            >Contact Me
                            </h4>
                            <p className="font-dmSans font-normal text-[16px] text-ptag leading-[36px]"
                            >Send us a message and we&apos;ll respond as soon as possible
                            </p>
                            <div className="pt-[30px]">
                                <div className="flex justify-between items-center">
                                    <input type="text"
                                        placeholder="Your Name"
                                        className="py-5 px-6 rounded-full font-dmSans font-normal text-[14px] leading-[14px] placeholder:font-dmSans placeholder:font-normal placeholder:text-[14px] placeholder:text-[#9A9A9A] w-full mr-5"
                                    />
                                    <input type="text"
                                        placeholder="Email Address"
                                        className="py-5 px-6 rounded-full font-dmSans font-normal text-[14px] leading-[14px] placeholder:font-dmSans placeholder:font-normal placeholder:text-[14px] placeholder:text-[#9A9A9A] w-full"
                                    />
                                </div>
                                <input type="text"
                                    placeholder="Business Topic"
                                    className="my-[20px] py-5 px-6 rounded-full font-dmSans font-normal text-[14px] leading-[14px] placeholder:font-dmSans placeholder:font-normal placeholder:text-[14px] placeholder:text-[#9A9A9A] w-full"
                                />
                                <textarea
                                    className="py-5 px-6 rounded-2xl font-dmSans font-normal text-[14px] leading-[14px] placeholder:font-dmSans placeholder:font-normal placeholder:text-[14px] placeholder:text-[#9A9A9A] w-full min-h-[171px] mb-5"
                                    placeholder="Your Message here">
                                </textarea>
                                <button className="font-dmSans font-normal text-[18px] text-[#fff] leading-[18px] text-center py-[15px] px-[33px] bg-gradient-to-r from-[#FFAA52] to-endC via-[#FE651B] rounded-full mt-[10px] relative after:absolute after:w-[50%] after:h-full after:top-0 after:left-0 after:bg-[#00000015] after:rounded-l-full  hover:after:w-0 after:duration-500 overflow-hidden before:absolute before:w-[50%] before:h-full before:top-0 before:right-0 before:bg-[#00000015] before:rounded-r-full hover:before:w-0 before:duration-500"
                                >Send Message</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[47%]">
                        <img src={contact} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamContactPart