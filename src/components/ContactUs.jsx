import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ContactUs = () => {
    return (
        <section className="my-28">
            <div className="container">
                <div className="bg-[#F4F4FF] py-[50px] rounded-xl flex items-center">
                    <div className="w-[50%]">
                        <div className="px-[60px]">
                            <h4 className="font-nuni font-bold text-[46px] text-main leading-[56px]"
                            >Contact With Us
                            </h4>
                            <p className="font-dmSans font-normal text-[16px] text-ptag leading-[26px]"
                            >Send us a message and we&apos;ll respond as soon as possible
                            </p>
                            <div className="pt-[45px]">
                                <div className="flex justify-between items-center">
                                    <input type="text"
                                        placeholder="First Name*"
                                        className="py-5 px-6 rounded-full font-dmSans font-normal text-[14px] leading-[14px] placeholder:font-dmSans placeholder:font-normal placeholder:text-[14px] placeholder:text-[#9A9A9A] w-full mr-5"
                                    />
                                    <input type="text"
                                        placeholder="Last Name*"
                                        className="py-5 px-6 rounded-full font-dmSans font-normal text-[14px] leading-[14px] placeholder:font-dmSans placeholder:font-normal placeholder:text-[14px] placeholder:text-[#9A9A9A] w-full"
                                    />
                                </div>
                                <div className="flex justify-between items-center my-5">
                                    <input type="text"
                                        placeholder="Email Address*"
                                        className="py-5 px-6 rounded-full font-dmSans font-normal text-[14px] leading-[14px] placeholder:font-dmSans placeholder:font-normal placeholder:text-[14px] placeholder:text-[#9A9A9A] w-full mr-5"
                                    />
                                    <input type="text"
                                        placeholder="Phone Number*"
                                        className="py-5 px-6 rounded-full font-dmSans font-normal text-[14px] leading-[14px] placeholder:font-dmSans placeholder:font-normal placeholder:text-[14px] placeholder:text-[#9A9A9A] w-full"
                                    />
                                </div>
                                <input type="text"
                                    placeholder="Subject"
                                    className="py-5 px-6 rounded-full font-dmSans font-normal text-[14px] leading-[14px] placeholder:font-dmSans placeholder:font-normal placeholder:text-[14px] placeholder:text-[#9A9A9A] w-full"
                                />
                                <textarea
                                    className="py-5 px-6 rounded-2xl font-dmSans font-normal text-[14px] leading-[14px] placeholder:font-dmSans placeholder:font-normal placeholder:text-[14px] placeholder:text-[#9A9A9A] w-full min-h-[180px] my-5"
                                    placeholder="Your Message here">
                                </textarea>
                                <button className="font-dmSans font-normal text-[18px] text-[#fff] leading-[18px] text-center w-full py-5 bg-gradient-to-r from-[#FFAA52] to-endC via-[#FE651B] rounded-full mt-[10px] relative after:absolute after:w-[50%] after:h-full after:top-0 after:left-0 after:bg-[#00000015] after:rounded-l-full  hover:after:w-0 after:duration-500 overflow-hidden before:absolute before:w-[50%] before:h-full before:top-0 before:right-0 before:bg-[#00000015] before:rounded-r-full hover:before:w-0 before:duration-500"
                                >Send Message</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%] bg-[#3661FC] py-[50px] px-[60px] rounded-l-3xl text-white">
                        <h4 className="font-nuni font-bold text-[46px] leading-[46px]"
                        >Need Any Help?</h4>
                        <p className="font-dmSans font-normal text-[16px] leading-[26px] pt-[10px]">Call us or message and we&apos;ll respond as soon as possible</p>
                        <div className="">
                            <div className="flex">
                                <div className="relative">
                                    <div className="py-[18.95px] pl-[19.74px] pr-[18.94px] bg-gradient-to-r from-startC to-endC rounded-full">
                                        <FaPhoneAlt className="w-[23px] h-[22px]" />
                                    </div>
                                </div>
                                <div className="">
                                    <h6 className="font-nuni font-bold text-[25px] leading-[25px] pb-[12px]">Phone</h6>
                                    <p className="font-dmSans font-normal text-[16px] leading-[26px]">
                                        +(323) 9847 3847 383</p>
                                    <p className="font-dmSans font-normal text-[16px] leading-[26px]">
                                        +(434) 5466 5467 443</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs