import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import help from "../assets/contact/help.png"

const ContactUs = () => {
    return (
        <section className="">
            <div className="container my-28">
                <div className="bg-[#F4F4FF] rounded-xl flex items-center">
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
                    <div className="w-[50%] rounded-r-2xl rounded-tl-2xl bg-[#3661FC] py-[50px] px-[60px]  text-white">
                        <h4 className="font-nuni font-bold text-[46px] leading-[46px]"
                        >Need Any Help?</h4>
                        <p className="font-dmSans font-normal text-[16px] leading-[26px] pt-[10px]">Call us or message and we&apos;ll respond as soon as possible</p>
                        <div className="mt-[42px] flex items-center justify-between">
                            <div className="flex">
                                <div className="relative">
                                    <div className="py-[18.95px] pl-[19.74px] pr-[18.94px] bg-gradient-to-r from-startC to-endC rounded-full">
                                        <FaPhoneAlt className="w-[21.32px] h-[22.11px]" />
                                    </div>
                                </div>
                                <div className="ml-[25px]">
                                    <h6 className="font-nuni font-bold text-[25px] leading-[25px] pb-[12px]">Phone</h6>
                                    <p className="font-dmSans font-normal text-[16px] leading-[26px]">
                                        +(323) 9847 3847 383</p>
                                    <p className="font-dmSans font-normal text-[16px] leading-[26px]">
                                        +(434) 5466 5467 443</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="relative">
                                    <div className="py-[22.11px] pl-[18.95px] pr-[19.13px] bg-gradient-to-r from-startC to-endC rounded-full">
                                        <MdEmail className="w-[21.93px] h-[15.79px]" />
                                    </div>
                                </div>
                                <div className="ml-[25px]">
                                    <h6 className="font-nuni font-bold text-[25px] leading-[25px] pb-[12px]">Email</h6>
                                    <p className="font-dmSans font-normal text-[16px] leading-[26px]">
                                        infoyour@gmail.com</p>
                                    <p className="font-dmSans font-normal text-[16px] leading-[26px]">
                                        domaininfo@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-[46px] mb-[58px]">
                            <div className="relative">
                                <div className="pt-[19px] pb-[18.89px] pl-[22px] pr-[21.42px] bg-gradient-to-r from-startC to-endC rounded-full">
                                    <FaLocationDot className="w-[16.58px] h-[22.11px]" />
                                </div>
                            </div>
                            <div className="ml-[25px]">
                                <h6 className="font-nuni font-bold text-[25px] leading-[25px] pb-[12px]">Location</h6>
                                <p className="font-dmSans font-normal text-[16px] leading-[26px] w-[354px]">
                                    4517 Washington Ave. 32 King Street, Melbourne Manchester, Road USA</p>
                            </div>
                        </div>
                        <div className="bg-white pt-[35px] pr-[41.48px] pb-[35.18px] pl-[42px] rounded-3xl">
                            <img src={help} alt="help" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.717423219907!2d144.9576373!3d-37.8200873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4d8e6ee4eb%3A0x5b58e1c3675f8a5b!2s32%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1729425074532!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}

export default ContactUs