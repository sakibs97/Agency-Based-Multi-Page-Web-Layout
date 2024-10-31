import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import laptop from "../assets/footer/laptop.jpg";
import laptop2 from "../assets/footer/laptop2.jpg";
import date from "../assets/footer/date.png";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <section className='bg-[url("/src/assets/footer/footer.png")] bg-opacity-100 bg-cover bg-no-repeat bg-center'>
            <section className="bg-[rgba(244,244,255,0.5)]">
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-between md:py-[60px] py-[40px] border-b-[2px] border-[#D7DFFE]">
                        <div className="mb-[20px] md:mb-0 w-full md:w-auto text-center md:text-left">
                            <p className="font-dmSans font-normal text-[14px] md:text-[16px] text-ptag leading-[26px]">
                                For Digital Marketing Agency
                            </p>
                            <h6 className="font-nuni font-bold text-[22px] md:text-[25px] text-main">
                                Join Our Agency Community
                            </h6>
                        </div>
                        <div className="w-full md:w-auto p-[1px] bg-gradient-to-r from-startC to-endC rounded-full">
                            <div className="flex flex-col md:flex-row justify-center md:py-[10px] md:pr-[10px] md:pl-[40px] p-2 bg-white rounded-full">
                                <input
                                    type="text"
                                    placeholder="Enter your email address"
                                    className="bg-white w-full md:w-[180px] outline-none my-2 px-7 md:px-0 md:rounded-none rounded-full"
                                />
                                <button className="font-dmSans font-normal text-[18px] md:ml-10 mx-4 text-white md:py-[15px] md:px-[33px] py-2 px-4 bg-gradient-to-r from-startC to-endC rounded-full">
                                    Subscribe Now
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="md:py-[80px] py-[40px] flex flex-wrap justify-between">
                        <div className="w-full md:w-[48%] flex flex-wrap justify-between">
                            <div className="w-full md:w-[340px] mb-6">
                                <h5 className="font-nuni font-bold text-[25px] text-main pb-[12px] relative">
                                    About Company
                                    <span className="block h-[2px] w-[85px] bg-main absolute bottom-0 left-0"></span>
                                </h5>
                                <p className="font-dmSans font-normal text-[16px] text-ptag py-[22px]">
                                    There are many variations of passages of Lore Ipsum available,
                                    but the majority have suffered alteration in some form, by
                                    injected humour, or randomised words which.
                                </p>
                                <div className="flex justify-start space-x-4">
                                    <div className="p-[10px] bg-[#FFFFFF] rounded-full shadow-custom hover:shadow-custom-shadow cursor-pointer">
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
                            <div className="w-full md:w-auto my-6 md:mb-6 md:my-0">
                                <h5 className="font-nuni font-bold text-[25px] text-main pb-[12px] relative">
                                    Featured Services
                                    <span className="block h-[2px] w-[85px] bg-main absolute bottom-0 left-0"></span>
                                </h5>
                                <ul className="list-disc pt-[22px] space-y-2 mx-5 marker:text-[#3661FC]">
                                    <li>
                                        <Link to='/' className="font-dmSans font-normal text-[16px] leading-[36px] text-ptag hover:text-[#3661fc]">
                                            Social Media Marketing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/pricing' className="font-dmSans font-normal text-[16px] leading-[36px] text-ptag hover:text-[#3661fc]">
                                            Pay Per Click Management
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/seo-service-details' className="font-dmSans font-normal text-[16px] leading-[36px] text-ptag hover:text-[#3661fc]">
                                            Search Engine Optimization
                                        </Link>
                                    </li>
                                    <li className="marker:text-[#3661FC] font-dmSans font-normal text-[16px] leading-[36px] text-ptag hover:text-[#3661fc]">
                                        Free SEO Analysis
                                    </li>
                                    <li className="marker:text-[#3661FC] font-dmSans font-normal text-[16px] leading-[36px] text-ptag hover:text-[#3661fc]">
                                        Case Studies
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full md:w-[48%] flex flex-wrap justify-between">
                            <div className="w-full md:w-[250px] mb-6">
                                <h5 className="font-nuni font-bold text-[25px] text-main pb-[12px] relative">
                                    Recent Post
                                    <span className="block h-[2px] w-[85px] bg-main absolute bottom-0 left-0"></span>
                                </h5>
                                <div className="flex pt-[22px]">
                                    <img src={laptop} alt="laptop" className="rounded-lg w-[80px]" />
                                    <div className="pl-[20px]">
                                        <p className="font-dmSans font-normal text-[16px] text-ptag leading-[22px]">
                                            Thoughtful man using laptop pondering
                                        </p>
                                        <div className="flex items-center pt-[11px]">
                                            <img src={date} alt="date" className="w-[13px] h-[13px]" />
                                            <p className="font-pop font-normal text-[14px] text-ptag leading-[24px] pl-[10px]">
                                                09 Dec 2022
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex pt-[22px]">
                                    <img src={laptop2} alt="laptop2" className="rounded-lg w-[80px]" />
                                    <div className="pl-[20px]">
                                        <p className="font-dmSans font-normal text-[16px] text-ptag leading-[22px]">
                                            Young man with a laptop in a business
                                        </p>
                                        <div className="flex items-center pt-[11px]">
                                            <img src={date} alt="date" className="w-[13px] h-[13px]" />
                                            <p className="font-pop font-normal text-[14px] text-ptag leading-[24px] pl-[10px]">
                                                09 Dec 2022
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-[330px]">
                                <h5 className="font-nuni font-bold text-[25px] text-main pb-[12px] relative">
                                    Contact Us
                                    <span className="block h-[2px] w-[85px] bg-main absolute bottom-0 left-0"></span>
                                </h5>
                                <div className="pt-[22px] space-y-4">
                                    <div className="flex items-center">
                                        <IoCall className="text-[#3661FC]" />
                                        <p className="font-dmSans font-normal text-[16px] text-ptag leading-[26px] pl-[20px]">
                                            +(323) 750-1234
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        <MdEmail className="text-[#3661FC]" />
                                        <p className="font-dmSans font-normal text-[16px] text-ptag leading-[26px] pl-[20px]">
                                            infoyourortencey@gmail.com
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        <FaLocationDot className="text-[#3661FC] w-[18px] h-[25px]" />
                                        <p className="font-dmSans font-normal text-[16px] text-ptag leading-[26px] pl-[20px]">
                                            374 FA Tower, William S Blvd, Melbourne 2721, IL, USA
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="">
                <div className="font-dmSans font-normal text-[16px] text-main container py-[22px] flex flex-wrap text-center justify-between items-center">
                    <p>2022 © All rights reserved by devsnest-llc</p>
                    <div className="flex items-center space-x-4">
                        <p className="hover:text-[#3661fc] duration-500 ease-in-out">Privacy Policy</p>
                        <p className="hover:text-[#3661fc] duration-500 ease-in-out">Terms & Conditions</p>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Footer;
