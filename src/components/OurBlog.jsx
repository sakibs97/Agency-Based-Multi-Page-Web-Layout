import blog from '../assets/blog/blog.png';
import blog2 from '../assets/blog/blog2.png';
import blog3 from '../assets/blog/blog3.png';
import { CiUser } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";

const OurBlog = () => {
    return (
        <section className='pt-20 pb-40 bg-[#F4F4FF]'>
            <div className="container">
                <div className="text-center">
                    <h4 className='font-dmSans font-medium text-[20px] text-transparent bg-gradient-to-r from-startC to-endC bg-clip-text'>
                        Our Blog
                    </h4>
                    <h3 className='font-nuni font-bold text-[30px] md:text-[46px] text-main leading-[40px] md:leading-[56px]'>
                        Latest Blogs & Articles
                    </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
                    {/* Blog 1 */}
                    <div className="relative group z-50 my-5">
                        <img src={blog} alt="" className='rounded-3xl bg-[#CCCCCC] w-full h-auto object-cover' />
                        <div className="text-white text-center py-[6px] pr-[16px] pl-[60px] bg-gradient-to-l from-startC to-endC rounded-3xl absolute bottom-0 left-[10%] md:left-[13%]">
                            <p className='font-dmSans font-normal text-[16px] leading-[26px]'>Digital Agency</p>
                        </div>
                        <div className="text-white text-center p-[23px] bg-gradient-to-r from-startC to-endC rounded-3xl absolute bottom-0">
                            <p className='font-dmSans font-normal text-[16px] leading-[26px]'>09 Dec</p>
                            <span className='font-dmSans font-medium text-[20px]'>2022</span>
                        </div>
                        <div className="absolute bottom-[-35%] w-full bg-[#FFFFFF] rounded-3xl -z-10 pt-[100px] pl-[20px] md:pl-[30px] pr-[20px] md:pr-[48px] pb-[20px]">
                            <div className="grid grid-cols-3">
                                <div className="flex items-center">
                                    <CiUser className='text-[#3661FC]' />
                                    <p className='font-dmSans font-normal text-[14px] md:text-[16px] text-ptag leading-[26px] pl-[6px]'>by Admin</p>
                                </div>
                                <div className="flex items-center">
                                    <TiMessages className='text-[#3661FC]' />
                                    <p className='font-dmSans font-normal text-[14px] md:text-[16px] text-ptag leading-[26px] pl-[6px]'>25</p>
                                </div>
                                <div className="flex items-center">
                                    <FaRegEye className='text-[#3661FC]' />
                                    <p className='font-dmSans font-normal text-[14px] md:text-[16px] text-ptag leading-[26px] pl-[6px]'>120 Views</p>
                                </div>
                            </div>
                            <h6 className='font-nuni font-bold text-[18px] md:text-[22px] text-main group-hover:text-[#3661FC] duration-300 ease-in-out cursor-pointer group-hover:underline underline-offset-4'>
                                Successful business partner have a meeting and discussing
                            </h6>
                        </div>
                    </div>

                    {/* Blog 2 */}
                    <div className="relative group z-50 my-5">
                        <img src={blog2} alt="" className='rounded-3xl bg-[#CCCCCC] w-full h-auto object-cover' />
                        <div className="text-white text-center py-[6px] pr-[16px] pl-[60px] bg-gradient-to-l from-startC to-endC rounded-3xl absolute bottom-0 left-[10%] md:left-[13%]">
                            <p className='font-dmSans font-normal text-[16px] leading-[26px]'>Digital Agency</p>
                        </div>
                        <div className="text-white text-center p-[23px] bg-gradient-to-r from-startC to-endC rounded-3xl absolute bottom-0">
                            <p className='font-dmSans font-normal text-[16px] leading-[26px]'>09 Dec</p>
                            <span className='font-dmSans font-medium text-[20px]'>2022</span>
                        </div>
                        <div className="absolute bottom-[-35%] w-full bg-[#FFFFFF] rounded-3xl -z-10 pt-[100px] pl-[20px] md:pl-[30px] pr-[20px] md:pr-[48px] pb-[20px]">
                            <div className="grid grid-cols-3">
                                <div className="flex items-center">
                                    <CiUser className='text-[#3661FC]' />
                                    <p className='font-dmSans font-normal text-[14px] md:text-[16px] text-ptag leading-[26px] pl-[6px]'>by Admin</p>
                                </div>
                                <div className="flex items-center">
                                    <TiMessages className='text-[#3661FC]' />
                                    <p className='font-dmSans font-normal text-[14px] md:text-[16px] text-ptag leading-[26px] pl-[6px]'>50</p>
                                </div>
                                <div className="flex items-center">
                                    <FaRegEye className='text-[#3661FC]' />
                                    <p className='font-dmSans font-normal text-[14px] md:text-[16px] text-ptag leading-[26px] pl-[6px]'>350 Views</p>
                                </div>
                            </div>
                            <h6 className='font-nuni font-bold text-[18px] md:text-[22px] text-main group-hover:text-[#3661FC] duration-300 ease-in-out cursor-pointer group-hover:underline underline-offset-4'>
                                Motivated colleagues celebrating corporate success together
                            </h6>
                        </div>
                    </div>

                    {/* Blog 3 */}
                    <div className="relative group z-50 my-5">
                        <img src={blog3} alt="" className='rounded-3xl bg-[#CCCCCC] w-full h-auto object-cover' />
                        <div className="text-white text-center py-[6px] pr-[16px] pl-[60px] bg-gradient-to-l from-startC to-endC rounded-3xl absolute bottom-0 left-[13%]">
                            <p className='font-dmSans font-normal text-[16px] leading-[26px]'>Digital Agency</p>
                        </div>
                        <div className="text-white text-center p-[23px] bg-gradient-to-r from-startC to-endC rounded-3xl absolute bottom-0">
                            <p className='font-dmSans font-normal text-[16px] leading-[26px]'>09 Dec</p>
                            <span className='font-dmSans font-medium text-[20px]'>2022</span>
                        </div>
                        <div className="absolute w-full bg-[#FFFFFF] rounded-3xl -z-10 pt-[100px] pl-[20px] md:pl-[30px] pr-[20px] md:pr-[48px] pb-[20px]">
                            <div className="grid grid-cols-3">
                                <div className="flex items-center">
                                    <CiUser className='text-[#3661FC]' />
                                    <p className='font-dmSans font-normal text-[14px] md:text-[16px] text-ptag leading-[26px] pl-[6px]'>by Admin</p>
                                </div>
                                <div className="flex items-center">
                                    <TiMessages className='text-[#3661FC]' />
                                    <p className='font-dmSans font-normal text-[14px] md:text-[16px] text-ptag leading-[26px] pl-[6px]'>30</p>
                                </div>
                                <div className="flex items-center">
                                    <FaRegEye className='text-[#3661FC]' />
                                    <p className='font-dmSans font-normal text-[14px] md:text-[16px] text-ptag leading-[26px] pl-[6px]'>150 Views</p>
                                </div>
                            </div>
                            <h6 className='font-nuni font-bold text-[18px] md:text-[22px] text-main group-hover:text-[#3661FC] duration-300 ease-in-out cursor-pointer group-hover:underline underline-offset-4'>
                                Man using a tablet to a work and connect with others
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurBlog;
