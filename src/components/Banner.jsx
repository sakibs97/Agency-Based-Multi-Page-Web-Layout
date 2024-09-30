import image1 from "../assets/banner/Image1.png"
import { FaCircleStop } from "react-icons/fa6";
import { GiCrossMark } from "react-icons/gi";
import { BsTriangleFill } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";

const Banner = () => {
    return (
        <section className='bg-[#CCCCCC] py-28'>
            <div className='container flex justify-between items-center relative'>
                <div className="">
                    <FaCircleStop className="text-[#0F7AEF] absolute left-0 -top-5" />
                    <GiCrossMark className="absolute bg-gradient-to-r from-[#FE651B] to-[#FFAA52] right-[50%] bottom-0 text-white" />
                    <BsTriangleFill className="absolute right-0 -top-12 -rotate-45" />
                    <FaCircle className="absolute left-[50%] top-[20%] text-[#FE651B]" />
                </div>
                <div className="">
                    <p className="font-dmSans font-medium text-[25px] text-[#3661FC] leading-[25px]">Get Started With Ortencey</p>
                    <h1 className="font-nuni font-bold text-[60px] text-[#1A1A1A] leading-[70px] py-4">Our We Are The Best Digital
                        <span className="bg-gradient-to-r from-[#FE651B] to-[#FFAA52] bg-clip-text text-transparent pl-2">Marketing</span> Agency.</h1>
                    <p className="font-dmSans font-medium text-5 text-[#6B6161] leading-[30px]">The 3 golden rules professional Digital Marketing Agency don’t
                        want you to know about.</p>
                    <div className="flex items-center py-10">
                        <button className="font-sans font-normal text-[18px] text-white py-[15px] px-[33px] bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-full">
                            Discover More
                        </button>
                        <button className="font-sans font-normal text-[18px] hover:text-white py-[15px] px-[33px] hover:bg-gradient-to-r hover:from-[#FE651B] hover:to-[#FFAA52] rounded-full ml-5 bg-white duration-500">
                            Discover More
                        </button>
                    </div>
                </div>
                <div className="">
                    <img src={image1} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Banner