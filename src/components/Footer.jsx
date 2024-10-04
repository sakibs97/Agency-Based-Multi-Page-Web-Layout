import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import laptop from "../assets/footer/laptop.jpg"
import laptop2 from "../assets/footer/laptop2.jpg"
import date from "../assets/footer/date.png"
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <section className='bg-[url("/src/assets/footer/footer.png")] bg-opacity-100 bg-cover bg-no-repeat bg-center'>
            <section className="bg-[rgb(244,244,255,.5)]">
                <div className="container">
                    <div className="flex justify-between py-[60px] border-b-[2px] border-[#D7DFFE]">
                        <div className="">
                            <p className="font-dmSans font-normal text-[16px] text-ptag leading-[26px]">For Digital Marketing Agency</p>
                            <h6 className="font-nuni font-bold text-[25px] text-main">Join Our Agency Community</h6>
                        </div>
                        <div className="p-[1px] bg-gradient-to-r from-startC to-endC rounded-full">
                            <div className="py-[10px] pr-[10px] pl-[40px] bg-white rounded-full">
                                <input type="text" placeholder="Enter your email address" className="bg-white w-[180px] outline-none" />
                                <button className="font-dmSans font-normal text-[18px] ml-10 text-white py-[15px] px-[33px] bg-gradient-to-r from-startC to-endC rounded-full">Subscribe Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="py-[80px] flex justify-between">
                        <div className="flex justify-between w-[48%]">
                            <div className="w-[340px]">
                                <h5 className="font-nuni font-bold text-[25px] text-main pb-[12px] after:h-[2px] after:w-[85px] after:bg-main after:absolute relative after:bottom-0 after:left-0">About Company</h5>
                                <p className="font-dmSans font-normal text-[16px] text-ptag py-[22px]">
                                    There are many variations of passages of Lore
                                    Ipsum availab but the majority have suffereds
                                    alteration in some form, by injected humour a
                                    randomised words which</p>
                                <div className="flex justify-between w-[175px] relative">
                                    <div className="p-[10px] bg-[#FFFFFF] rounded-full shadow-custom hover:shadow-custom-shadow  cursor-pointer">
                                        <FaFacebookF className="text-[#3661FC]" />
                                    </div>
                                    <div className="p-[10px] bg-[#FFFFFF] rounded-full shadow-custom hover:shadow-custom-shadow cursor-pointer">
                                        <FaTwitter className="text-[#3661FC]" />
                                    </div>
                                    <div className="p-[10px] bg-[#FFFFFF] rounded-full shadow-custom hover:shadow-custom-shadow cursor-pointer">
                                        <FaLinkedinIn className="text-[#3661FC]" />
                                    </div>
                                    <div className="p-[10px] bg-[#FFFFFF] rounded-full shadow-custom hover:shadow-custom-shadow cursor-pointer">
                                        <FaYoutube className="text-[#3661FC]" />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <h5 className="font-nuni font-bold text-[25px] text-main pb-[12px] after:h-[2px] after:w-[85px] after:bg-main after:absolute relative after:bottom-0 after:left-0 ">Featured Services</h5>
                                <ul className="list-disc pt-[22px]">
                                    <li className="marker:text-[#3661FC] font-dmSans font-normal text-[16px] leading-[36px] text-ptag hover:text-[#3661fc]">Social Media Marketing</li>
                                    <li className="marker:text-[#3661FC] font-dmSans font-normal text-[16px] leading-[36px] text-ptag hover:text-[#3661fc]">Pay Per Click Management</li>
                                    <li className="marker:text-[#3661FC] font-dmSans font-normal text-[16px] leading-[36px] text-ptag hover:text-[#3661fc]">Search Engine Optimization</li>
                                    <li className="marker:text-[#3661FC] font-dmSans font-normal text-[16px] leading-[36px] text-ptag hover:text-[#3661fc]">Free SEO Analysis</li>
                                    <li className="marker:text-[#3661FC] font-dmSans font-normal text-[16px] leading-[36px] text-ptag hover:text-[#3661fc]">Case Studies</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-[48%] flex justify-between">
                            <div className="w-[250px]">
                                <h5 className="font-nuni font-bold text-[25px] text-main pb-[12px] after:h-[2px] after:w-[85px] after:bg-main after:absolute relative after:bottom-0 after:left-0 ">Recent Post</h5>
                                <div className="flex pt-[22px]">
                                    <img src={laptop} alt="" className="rounded-lg" />
                                    <div className="pl-[20px]">
                                        <p className="font-dmSans font-normal text-[16px] text-ptag leading-[22px]">
                                            Thoughtful man using
                                            laptop pondering
                                        </p>
                                        <div className="flex items-center pt-[11px]">
                                            <img src={date} alt="" className="w-[13px] h-[13px]" />
                                            <p className="font-pop font-normal text-[14px] text-ptag leading-[24px] pl-[10px]">09 Dec 2022</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex pt-[22px]">
                                    <img src={laptop2} alt="" className="rounded-lg" />
                                    <div className="pl-[20px]">
                                        <p className="font-dmSans font-normal text-[16px] text-ptag leading-[22px]">
                                            Young man with a lap
                                            top in a business
                                        </p>
                                        <div className="flex items-center pt-[11px]">
                                            <img src={date} alt="" className="w-[13px] h-[13px]" />
                                            <p className="font-pop font-normal text-[14px] text-ptag leading-[24px] pl-[10px]">09 Dec 2022</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[330px]">
                                <h5 className="font-nuni font-bold text-[25px] text-main pb-[12px] after:h-[2px] after:w-[85px] after:bg-main after:absolute relative after:bottom-0 after:left-0 ">Contact Us</h5>
                                <div className="pt-[22px]">
                                    <div className="flex items-center">
                                        <IoCall className="text-[#3661FC]" />
                                        <p className="font-dmSans font-normal text-[16px] text-ptag leading-[26px] pl-[20px]">+(323) 750-1234</p>
                                    </div>
                                    <div className="flex items-center py-[14px]">
                                        <MdEmail className="text-[#3661FC]" />
                                        <p className="font-dmSans font-normal text-[16px] text-ptag leading-[26px] pl-[20px]">infoyourortencey@gmail.com</p>
                                    </div>
                                    <div className="flex items-center">
                                        <FaLocationDot className="text-[#3661FC] w-[18px] h-[25px]" />
                                        <p className="font-dmSans font-normal text-[16px] text-ptag leading-[26px] pl-[20px]">374 FA Tower, William S Blvd, Melbourne 2721, IL, USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container py-[22px]">
                    <p>2022 © All rights reserved by devsnest-llc</p>
                    <p></p>
                </div>
            </section>
        </section>
    )
}

export default Footer