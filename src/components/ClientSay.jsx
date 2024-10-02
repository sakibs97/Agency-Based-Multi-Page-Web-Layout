import { FaQuoteRight } from "react-icons/fa";
import client from "../assets/client/client1.jpg"
import client2 from "../assets/client/client2.jpg"
import client3 from "../assets/client/client3.jpg"
import client4 from "../assets/client/client4.jpg"
import client5 from "../assets/client/client5.jpg"
import client6 from "../assets/client/client6.jpg"
import client7 from "../assets/client/client7.jpg"


const ClientSay = () => {
    return (
        <section className='bg-[url("/src/assets/map/map.png")] bg-no-repeat bg-cover bg-center h-[1000px] relative'>
            <div className="text-center pt-[100px]">
                <h6 className='font-dmSans font-medium text-[20px] text-transparent bg-gradient-to-r from-startC to-endC bg-clip-text '>Testimonial</h6>
                <h3 className='font-nuni font-bold text-[46px] text-main'>What Our Client Say</h3>
            </div>
            <div className="group absolute top-[33.2%] left-[18%]">
                <div className="p-[3px] bg-gradient-to-r from-startC to-endC rounded-full h-[60px] w-[60px] flex items-center justify-center cursor-pointer">
                    <div className="relative">
                        <img src={client} alt="" className="h-[54px] w-[54px] rounded-full" />
                    </div>
                </div>
                <div className="absolute top-[50%] left-[-50%] translate-y-[-50%] translate-x-[21%] p-[2px] hidden group-hover:block bg-gradient-to-r from-startC to-endC rounded-3xl z-50">
                    <div className="bg-white w-[420px] px-[23px] pt-[23px] pb-[16px] rounded-3xl">
                        <div className="flex justify-between ">
                            <img src={client} alt="" width={105} className="rounded-ss-3xl h-[79px]" />
                            <div className="relative after:absolute after:h-[3px] after:w-full after:bg-[#D7DFFE] after:bottom-0">
                                <h4 className="font-nuni font-bold text-[25px] text-main">Christopher</h4>
                                <p className="font-dmSans font-normal text-[16px] text-ptag leading-[26px]">Senior Manager</p>
                            </div>
                            <FaQuoteRight className="w-[58px] h-[50px] text-[#3661FC] opacity-20" />
                        </div>
                        <p className="font-dmSans font-normal text-[16px] text-ptag leading-[26px] pt-[30px]">
                            There are many variations of passages of rem Ipsum available, but the majoritsy have suffer eration in some form, by injecteld humour, or mised words which don&#39;t look even.
                        </p>
                    </div>
                </div>
            </div>
            <div className="group absolute top-[50%] left-[29.5%]">
                <div className="p-[3px] bg-gradient-to-r from-startC to-endC rounded-full h-[60px] w-[60px] flex items-center justify-center cursor-pointer">
                    <div className="relative">
                        <img src={client2} alt="" className="h-[54px] w-[54px] rounded-full" />
                    </div>
                </div>
                <div className="absolute left-[50%] translate-x-[-50%] p-[2px]  hidden group-hover:block bg-gradient-to-r from-startC to-endC rounded-3xl z-50">
                    <div className="bg-white w-[420px] px-[23px] pt-[23px] pb-[16px] rounded-3xl">
                        <div className="flex justify-between ">
                            <img src={client2} alt="" width={105} className="rounded-ss-3xl h-[79px]" />
                            <div className="relative after:absolute after:h-[3px] after:w-full after:bg-[#D7DFFE] after:bottom-0">
                                <h4 className="font-nuni font-bold text-[25px] text-main">Christopher</h4>
                                <p className="font-dmSans font-normal text-[16px] text-ptag leading-[26px]">Senior Manager</p>
                            </div>
                            <FaQuoteRight className="w-[58px] h-[50px] text-[#3661FC] opacity-20" />
                        </div>
                        <p className="font-dmSans font-normal text-[16px] text-ptag leading-[26px] pt-[30px]">
                            There are many variations of passages of rem Ipsum available, but the majoritsy have suffer eration in some form, by injecteld humour, or mised words which don&#39;t look even.
                        </p>
                    </div>
                </div>
            </div>
            <div3 className="group absolute top-[66%] left-[38%]">
                <div className="p-[3px] bg-gradient-to-r from-startC to-endC rounded-full h-[60px] w-[60px] flex items-center justify-center cursor-pointer">
                    <div className="relative">
                        <img src={client3} alt="" className="h-[54px] w-[54px] rounded-full" />
                    </div>
                </div>
                <div className="absolute top-[50%] left-[100%] translate-y-[-50%] p-[2px] hidden group-hover:block bg-gradient-to-r from-startC to-endC rounded-3xl z-50">
                    <div className="bg-white w-[420px] px-[23px] pt-[23px] pb-[16px] rounded-3xl">
                        <div className="flex justify-between ">
                            <img src={client3} alt="" width={105} className="rounded-ss-3xl h-[79px]" />
                            <div className="relative after:absolute after:h-[3px] after:w-full after:bg-[#D7DFFE] after:bottom-0">
                                <h4 className="font-nuni font-bold text-[25px] text-main">Christopher</h4>
                                <p className="font-dmSans font-normal text-[16px] text-ptag leading-[26px]">Senior Manager</p>
                            </div>
                            <FaQuoteRight className="w-[58px] h-[50px] text-[#3661FC] opacity-20" />
                        </div>
                        <p className="font-dmSans font-normal text-[16px] text-ptag leading-[26px] pt-[30px]">
                            There are many variations of passages of rem Ipsum available, but the majoritsy have suffer eration in some form, by injecteld humour, or mised words which don&#39;t look even.
                        </p>
                    </div>
                </div>
            </div3>
            <div className="group absolute top-[31.5%] left-[38.5%]">
                <div className="p-[3px] bg-gradient-to-r from-startC to-endC rounded-full h-[60px] w-[60px] flex items-center justify-center cursor-pointer">
                    <div className="relative">
                        <img src={client4} alt="" className="h-[54px] w-[54px] rounded-full" />
                    </div>
                </div>
                <div className="absolute left-[50%] translate-x-[-50%] p-[2px]  hidden group-hover:block bg-gradient-to-r from-startC to-endC rounded-3xl z-50">
                    <div className="bg-white w-[420px] px-[23px] pt-[23px] pb-[16px] rounded-3xl">
                        <div className="flex justify-between ">
                            <img src={client4} alt="" width={105} className="rounded-ss-3xl h-[79px]" />
                            <div className="relative after:absolute after:h-[3px] after:w-full after:bg-[#D7DFFE] after:bottom-0">
                                <h4 className="font-nuni font-bold text-[25px] text-main">Christopher</h4>
                                <p className="font-dmSans font-normal text-[16px] text-ptag leading-[26px]">Senior Manager</p>
                            </div>
                            <FaQuoteRight className="w-[58px] h-[50px] text-[#3661FC] opacity-20" />
                        </div>
                        <p className="font-dmSans font-normal text-[16px] text-ptag leading-[26px] pt-[30px]">
                            There are many variations of passages of rem Ipsum available, but the majoritsy have suffer eration in some form, by injecteld humour, or mised words which don&apos;t look even.
                        </p>
                    </div>
                </div>
            </div>
            <div className="group absolute top-[30%] right-[38.5%]">
                <div className="p-[3px] bg-gradient-to-r from-startC to-endC rounded-full h-[60px] w-[60px] flex items-center justify-center cursor-pointer">
                    <div className="relative">
                        <img src={client5} alt="" className="h-[54px] w-[54px] rounded-full" />
                    </div>
                </div>
                <div className="absolute top-[50%] right-[100%] translate-y-[-10%] p-[2px] hidden group-hover:block bg-gradient-to-r from-startC to-endC rounded-3xl z-50">
                    <div className="bg-white w-[420px] px-[23px] pt-[23px] pb-[16px] rounded-3xl">
                        <div className="flex justify-between ">
                            <img src={client5} alt="" width={105} className="rounded-ss-3xl h-[79px]" />
                            <div className="relative after:absolute after:h-[3px] after:w-full after:bg-[#D7DFFE] after:bottom-0">
                                <h4 className="font-nuni font-bold text-[25px] text-main">Christopher</h4>
                                <p className="font-dmSans font-normal text-[16px] text-ptag leading-[26px]">Senior Manager</p>
                            </div>
                            <FaQuoteRight className="w-[58px] h-[50px] text-[#3661FC] opacity-20" />
                        </div>
                        <p className="font-dmSans font-normal text-[16px] text-ptag leading-[26px] pt-[30px]">
                            There are many variations of passages of rem Ipsum available, but the majoritsy have suffer eration in some form, by injecteld humour, or mised words which don&#39;t look even.
                        </p>
                    </div>
                </div>
            </div>
            <div className="group absolute bottom-[46%] right-[42.5%]">
                <div className="p-[3px] bg-gradient-to-r from-startC to-endC rounded-full h-[60px] w-[60px] flex items-center justify-center cursor-pointer">
                    <div className="relative">
                        <img src={client6} alt="" className="h-[54px] w-[54px] rounded-full" />
                    </div>
                </div>
                <div className="absolute left-[50%] translate-x-[-50%] p-[2px] hidden group-hover:block bg-gradient-to-r from-startC to-endC rounded-3xl z-50">
                    <div className="bg-white w-[420px] px-[23px] pt-[23px] pb-[16px] rounded-3xl">
                        <div className="flex justify-between ">
                            <img src={client6} alt="" width={105} className="rounded-ss-3xl h-[79px]" />
                            <div className="relative after:absolute after:h-[3px] after:w-full after:bg-[#D7DFFE] after:bottom-0">
                                <h4 className="font-nuni font-bold text-[25px] text-main">Christopher</h4>
                                <p className="font-dmSans font-normal text-[16px] text-ptag leading-[26px]">Senior Manager</p>
                            </div>
                            <FaQuoteRight className="w-[58px] h-[50px] text-[#3661FC] opacity-20" />
                        </div>
                        <p className="font-dmSans font-normal text-[16px] text-ptag leading-[26px] pt-[30px]">
                            There are many variations of passages of rem Ipsum available, but the majoritsy have suffer eration in some form, by injecteld humour, or mised words which don&#39;t look even.
                        </p>
                    </div>
                </div>
            </div>
            <div className="group absolute bottom-[23%] right-[19%]">
                <div className="p-[3px] bg-gradient-to-r from-startC to-endC rounded-full h-[60px] w-[60px] flex items-center justify-center cursor-pointer">
                    <div className="relative">
                        <img src={client7} alt="" className="h-[54px] w-[54px] rounded-full" />
                    </div>
                </div>
                <div className="absolute top-[50%] right-[100%] translate-y-[-50%] p-[2px] hidden group-hover:block bg-gradient-to-r from-startC to-endC rounded-3xl z-50">
                    <div className="bg-white w-[420px] px-[23px] pt-[23px] pb-[16px] rounded-3xl">
                        <div className="flex justify-between">
                            <img src={client7} alt="" width={105} className="rounded-ss-3xl h-[79px]" />
                            <div className="relative after:absolute after:h-[3px] after:w-full after:bg-[#D7DFFE] after:bottom-0">
                                <h4 className="font-nuni font-bold text-[25px] text-main">Christopher</h4>
                                <p className="font-dmSans font-normal text-[16px] text-ptag leading-[26px]">Senior Manager</p>
                            </div>
                            <FaQuoteRight className="w-[58px] h-[50px] text-[#3661FC] opacity-20" />
                        </div>
                        <p className="font-dmSans font-normal text-[16px] text-ptag leading-[26px] pt-[30px]">
                            There are many variations of passages of rem Ipsum available, but the majoritsy have suffer eration in some form, by injecteld humour, or mised words which don&#39;t look even.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientSay