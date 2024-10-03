import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <section className='bg-[url("/src/assets/footer.png")] bg-opacity-100 bg-cover bg-no-repeat bg-center'>
            <section className="bg-[rgb(244,244,255)]">
                <div className="container">
                    <div className="flex justify-between py-[60px] border-b-[2px] border-[#D7DFFE]">
                        <div className="">
                            <p className="font-dmSans font-normal text-[16px] text-ptag leading-[26px]">For Digital Marketing Agency</p>
                            <h6 className="font-nuni font-bold text-[25px] text-main">Join Our Agency Community</h6>
                        </div>
                        <div className="py-[10px] pr-[10px] pl-[40px] bg-white rounded-full">
                            <input type="text" placeholder="Enter your email address" className="bg-white w-[180px] outline-none" />
                            <button className="font-dmSans font-normal text-[18px] ml-10 text-white py-[15px] px-[33px] bg-gradient-to-r from-startC to-endC rounded-full">Subscribe Now</button>
                        </div>
                    </div>
                    <div className="py-[80px]">
                        <div className="w-[48%] grid grid-cols-2 ">
                            <div className="">
                                <h5 className="font-nuni font-bold text-[25px] text-main pb-[12px] after:h-[2px] after:w-[85px] after:bg-main after:absolute relative after:bottom-0 after:left-0">About Company</h5>
                                <p className="font-dmSans font-normal text-[16px] text-ptag py-[22px]">
                                    There are many variations of passages of Lore
                                    Ipsum availab but the majority have suffereds
                                    alteration in some form, by injected humour a
                                    randomised words which</p>
                                <div className="flex justify-between">
                                    <div className="py-[10px] px-[8px] bg-[#FFFFFF] rounded-full items-center shadow-2xl">
                                        <FaFacebookF className="" />
                                    </div>
                                    <div className="py-[10px] px-[8px] bg-[#FFFFFF]">
                                        <FaTwitter className="" />
                                    </div>
                                    <div className="py-[10px] px-[8px] bg-[#FFFFFF]">
                                        <FaLinkedinIn className="" />
                                    </div>
                                    <div className="py-[10px] px-[8px] bg-[#FFFFFF]">
                                        <FaYoutube className="" />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <h5 className="font-nuni font-bold text-[25px] text-main pb-[12px] after:h-[2px] after:w-[85px] after:bg-main after:absolute relative after:bottom-0 after:left-0 ">Featured Services</h5>
                                <ul>
                                    <li className="font-dmSans font-normal text-[16px] leading-[36px] text-ptag hover:text-[#3661FC]">Social Media Marketing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Footer