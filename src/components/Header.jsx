import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import usa from "../assets/header/flag-usa.png"

const Header = () => {
    return (
        <section className="absolute w-full z-20 top-0 start-0 bg-[#3661FC] rounded-b-full py-2 font-normal text-[14px] text-white">
            <div className="container mx-auto items-center flex justify-between">
                <div className="w-[50%] flex justify-between font-dmSans">
                    <h6 className="">Welcome to Ortencey Digital Market Agency</h6>
                </div>
                <div className="flex justify-between items-center w-[20%]">
                    <div className="flex items-center w-[50%]">
                        <img src={usa} alt="flag-usa" className="pr-1" />
                        <select className="bg-transparent font-nuni">
                            <option value="English">English</option>
                        </select>
                    </div>
                    <div className="flex justify-between w-[50%] ">
                        <FaFacebookF className="h-4 cursor-pointer text-[#95ACFF] hover:text-[#FE651B] duration-500" />
                        <div className="after:bg-[#708FFF] relative after:w-[2px] after:h-[18px] after:absolute after:left-[-100%] after:bottom-[0px] after:block">
                            <FaLinkedinIn className="h-4 cursor-pointer text-[#95ACFF] hover:text-[#FE651B] duration-500" />
                        </div>
                        <div className="after:bg-[#708FFF] relative after:w-[2px] after:h-[18px] after:absolute after:left-[-100%] after:bottom-[0px] after:block">
                            <FaTwitter className="h-4 cursor-pointer text-[#95ACFF] hover:text-[#FE651B] duration-500" />
                        </div>
                        <div className="after:bg-[#708FFF] relative after:w-[2px] after:h-[18px] after:absolute after:left-[-100%] after:bottom-[0px] after:block">
                            <FaYoutube className="h-4 cursor-pointer text-[#95ACFF] hover:text-[#FE651B] duration-500" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header