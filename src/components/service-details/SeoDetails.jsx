import seoImage from '../../assets/Services/service-details/seo-main.jpeg'
import seoThree from '../../assets/Services/service-details/seo-three.jpg'
import seoTwo from '../../assets/Services/service-details/seo-two.jpg'
import one from '../../assets/Services/service-details/process-icon/one.png'
import two from '../../assets/Services/service-details/process-icon/two.png'
import three from '../../assets/Services/service-details/process-icon/three.png'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom'


const SeoDetails = () => {
    return (
        <section className='my-28'>
            <div className="container flex justify-between">
                <div className="w-[68%]">
                    <div className="p-[20px] bg-[#F4F4FF] rounded-2xl">
                        <img src={seoImage} alt="" className='rounded-2xl' />
                    </div>
                    <div className="">
                        <h4 className='font-nuni font-bold text-[25px] text-main'>Search Engine Optimization</h4>
                        <p className='font-dmSans font-normal text-[16px] text-ptag leading-[26px]'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of texts. All the Lorem Ipsum generators on the Internet tend to repeat
                        </p>
                    </div>
                    <div className="flex justify-between my-[45px]">
                        <div className="relative">
                            <img src={seoTwo} alt="seoTwo" className='rounded-2xl' />
                            <div className="absolute top-[20%] right-[-53%]">
                                <img src={seoThree} alt="seoThree" className='rounded-2xl p-[8px] bg-white' />
                            </div>
                        </div>
                        <div className="">
                            <h4 className='font-nuni font-bold text-[25px] text-main pb-[24px]'>Our Service Process</h4>
                            <div className="p-[20px] bg-[#F4F4FF] rounded-lg flex justify-between">
                                <div className="relative mr-[20px]">
                                    <div className="py-[17px] px-[16px] bg-white rounded-full">
                                        <img src={one} alt="one" className='w-[28px] h-[26px]' />
                                    </div>
                                </div>
                                <div className="">
                                    <h6 className='font-dmSans font-medium text-[20px] text-main'>Creative Analysis</h6>
                                    <p className='font-dmSans font-normal text-[16px] text-ptag leading-[24px] w-[252px]'>Creative analysis is important. It is
                                        common for marketers</p>
                                </div>
                            </div>
                            <div className="p-[20px] bg-[#F4F4FF] rounded-lg flex justify-between my-[20px]">
                                <div className="relative mr-[20px]">
                                    <div className="py-[17px] px-[16px] bg-white rounded-full">
                                        <img src={two} alt="two" className='w-[28px] h-[26px]' />
                                    </div>
                                </div>
                                <div className="">
                                    <h6 className='font-dmSans font-medium text-[20px] text-main'>Design & Scratches</h6>
                                    <p className='font-dmSans font-normal text-[16px] text-ptag leading-[24px] w-[252px]'>Creative analysis is important. It is
                                        common for marketers</p>
                                </div>
                            </div>
                            <div className="p-[20px] bg-[#F4F4FF] rounded-lg flex justify-between">
                                <div className="relative mr-[20px]">
                                    <div className="py-[17px] px-[16px] bg-white rounded-full">
                                        <img src={three} alt="three" className='w-[28px] h-[26px]' />
                                    </div>
                                </div>
                                <div className="">
                                    <h6 className='font-dmSans font-medium text-[20px] text-main'>Development & Delivery</h6>
                                    <p className='font-dmSans font-normal text-[16px] text-ptag leading-[24px] w-[252px]'>Creative analysis is important. It is
                                        common for marketers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h4 className='font-nuni font-bold text-[25px] text-main'>We Hope You Find What You are Looking for</h4>
                        <p className='font-dmSans font-normal text-[16px] text-ptag leading-[26px] py-[20px]'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of texts. All the Lorem Ipsum generators on the Internet tend to repeat
                        </p>
                        <div className="">
                            <div className="flex items-center py-[4px]">
                                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.55937 17.216C3.89468 17.2823 0.0884849 13.3574 0.0805787 8.71497C0.0726724 4.05797 3.89271 0.167515 8.56728 0.174815C13.1694 0.182115 17.0408 4.01682 17.0059 8.72294C16.9703 13.443 13.2491 17.214 8.55937 17.216ZM12.1508 6.04833C12.1613 5.62955 11.3187 5.05946 10.9438 5.23865C10.8581 5.2798 10.7817 5.35346 10.7184 5.42779C10.6262 5.53664 10.5478 5.65809 10.4674 5.77622C9.55029 7.12746 8.62921 8.47605 7.72131 9.83326C7.57504 10.0516 7.4637 10.0801 7.25616 9.91489C6.93859 9.66071 6.60257 9.42842 6.26722 9.19813C5.79943 8.87691 5.5853 8.92005 5.25192 9.38395C5.20712 9.44634 5.16298 9.51005 5.12015 9.57443C4.84343 9.99122 4.87967 10.2281 5.28882 10.5261C5.98259 11.0319 6.679 11.5336 7.38134 12.028C7.80564 12.3267 8.05337 12.2749 8.34524 11.8455C9.55358 10.0655 10.7599 8.28358 11.967 6.50228C12.0599 6.36424 12.1442 6.22221 12.1508 6.04833Z" fill="url(#paint0_linear_221_30)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_221_30" x1="0.0763865" y1="8.68645" x2="17.0156" y2="8.68645" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#FE651B" />
                                            <stop offset="1" stopColor="#FFAA52" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <h6 className='font-dmSans font-normal text-[16px] text-main pl-[10px]'>Research beyond the business plan</h6>
                            </div>
                            <div className="flex items-center py-[4px]">
                                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.55937 17.216C3.89468 17.2823 0.0884849 13.3574 0.0805787 8.71497C0.0726724 4.05797 3.89271 0.167515 8.56728 0.174815C13.1694 0.182115 17.0408 4.01682 17.0059 8.72294C16.9703 13.443 13.2491 17.214 8.55937 17.216ZM12.1508 6.04833C12.1613 5.62955 11.3187 5.05946 10.9438 5.23865C10.8581 5.2798 10.7817 5.35346 10.7184 5.42779C10.6262 5.53664 10.5478 5.65809 10.4674 5.77622C9.55029 7.12746 8.62921 8.47605 7.72131 9.83326C7.57504 10.0516 7.4637 10.0801 7.25616 9.91489C6.93859 9.66071 6.60257 9.42842 6.26722 9.19813C5.79943 8.87691 5.5853 8.92005 5.25192 9.38395C5.20712 9.44634 5.16298 9.51005 5.12015 9.57443C4.84343 9.99122 4.87967 10.2281 5.28882 10.5261C5.98259 11.0319 6.679 11.5336 7.38134 12.028C7.80564 12.3267 8.05337 12.2749 8.34524 11.8455C9.55358 10.0655 10.7599 8.28358 11.967 6.50228C12.0599 6.36424 12.1442 6.22221 12.1508 6.04833Z" fill="url(#paint0_linear_221_30)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_221_30" x1="0.0763865" y1="8.68645" x2="17.0156" y2="8.68645" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#FE651B" />
                                            <stop offset="1" stopColor="#FFAA52" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <h6 className='font-dmSans font-normal text-[16px] text-main pl-[10px]'>Customer Oriented Program Daily</h6>
                            </div>
                            <div className="flex items-center py-[4px]">
                                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.55937 17.216C3.89468 17.2823 0.0884849 13.3574 0.0805787 8.71497C0.0726724 4.05797 3.89271 0.167515 8.56728 0.174815C13.1694 0.182115 17.0408 4.01682 17.0059 8.72294C16.9703 13.443 13.2491 17.214 8.55937 17.216ZM12.1508 6.04833C12.1613 5.62955 11.3187 5.05946 10.9438 5.23865C10.8581 5.2798 10.7817 5.35346 10.7184 5.42779C10.6262 5.53664 10.5478 5.65809 10.4674 5.77622C9.55029 7.12746 8.62921 8.47605 7.72131 9.83326C7.57504 10.0516 7.4637 10.0801 7.25616 9.91489C6.93859 9.66071 6.60257 9.42842 6.26722 9.19813C5.79943 8.87691 5.5853 8.92005 5.25192 9.38395C5.20712 9.44634 5.16298 9.51005 5.12015 9.57443C4.84343 9.99122 4.87967 10.2281 5.28882 10.5261C5.98259 11.0319 6.679 11.5336 7.38134 12.028C7.80564 12.3267 8.05337 12.2749 8.34524 11.8455C9.55358 10.0655 10.7599 8.28358 11.967 6.50228C12.0599 6.36424 12.1442 6.22221 12.1508 6.04833Z" fill="url(#paint0_linear_221_30)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_221_30" x1="0.0763865" y1="8.68645" x2="17.0156" y2="8.68645" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#FE651B" />
                                            <stop offset="1" stopColor="#FFAA52" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <h6 className='font-dmSans font-normal text-[16px] text-main pl-[10px]'>The ability to turnaround consulting</h6>
                            </div>
                            <div className="flex items-center py-[4px]">
                                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.55937 17.216C3.89468 17.2823 0.0884849 13.3574 0.0805787 8.71497C0.0726724 4.05797 3.89271 0.167515 8.56728 0.174815C13.1694 0.182115 17.0408 4.01682 17.0059 8.72294C16.9703 13.443 13.2491 17.214 8.55937 17.216ZM12.1508 6.04833C12.1613 5.62955 11.3187 5.05946 10.9438 5.23865C10.8581 5.2798 10.7817 5.35346 10.7184 5.42779C10.6262 5.53664 10.5478 5.65809 10.4674 5.77622C9.55029 7.12746 8.62921 8.47605 7.72131 9.83326C7.57504 10.0516 7.4637 10.0801 7.25616 9.91489C6.93859 9.66071 6.60257 9.42842 6.26722 9.19813C5.79943 8.87691 5.5853 8.92005 5.25192 9.38395C5.20712 9.44634 5.16298 9.51005 5.12015 9.57443C4.84343 9.99122 4.87967 10.2281 5.28882 10.5261C5.98259 11.0319 6.679 11.5336 7.38134 12.028C7.80564 12.3267 8.05337 12.2749 8.34524 11.8455C9.55358 10.0655 10.7599 8.28358 11.967 6.50228C12.0599 6.36424 12.1442 6.22221 12.1508 6.04833Z" fill="url(#paint0_linear_221_30)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_221_30" x1="0.0763865" y1="8.68645" x2="17.0156" y2="8.68645" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#FE651B" />
                                            <stop offset="1" stopColor="#FFAA52" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <h6 className='font-dmSans font-normal text-[16px] text-main pl-[10px]'>Customer engagement matters</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[30%]">
                    <div className="pt-[25px] pb-[30px] px-[30px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl">
                        <h5 className='font-nuni font-bold text-[25px] text-main relative after:absolute after:h-[2px] after:w-full after:bg-[#EDEDFF] after:left-0 after:bottom-0 after:z-10 before:absolute before:h-[2px] before:w-[60px] before:bg-gradient-to-r before:from-startC before:to-endC before:bottom-0 before:z-20'>Our All Service</h5>
                        <Link to='/seo-service-details'>
                            <div className="mt-[25px] group">
                                <button className='w-full pt-[15px] pb-[14px] px-[30px] bg-[#F4F4FF] group-hover:bg-gradient-to-r from-startC to-endC font-dmSans font-medium text-[20px] group-hover:text-white text-main rounded-full flex justify-between items-center duration-500'>Search Engine Optimization
                                    <span><IoIosArrowRoundForward className='w-[25px] h-[19px] group-hover:w-[30px] group-hover:h-[30px] duration-500' /></span>
                                </button>
                            </div>
                        </Link>
                        <div className="mt-[25px] group">
                            <button className='w-full pt-[15px] pb-[14px] px-[30px] bg-[#F4F4FF] group-hover:bg-gradient-to-r from-startC to-endC font-dmSans font-medium text-[20px] group-hover:text-white text-main rounded-full flex justify-between items-center duration-500'>Web Design & Development
                                <span><IoIosArrowRoundForward className='w-[25px] h-[19px] group-hover:w-[30px] group-hover:h-[30px] duration-500' /></span>
                            </button>
                        </div>
                        <div className="mt-[25px] group">
                            <button className='w-full pt-[15px] pb-[14px] px-[25px] bg-[#F4F4FF] group-hover:bg-gradient-to-r from-startC to-endC font-dmSans font-medium text-[20px] group-hover:text-white text-main rounded-full flex justify-between items-center duration-500'>Email and Content Marketing
                                <span><IoIosArrowRoundForward className='w-[25px] h-[19px] group-hover:w-[30px] group-hover:h-[30px] duration-500' /></span>
                            </button>
                        </div>
                        <div className="mt-[25px] group">
                            <button className='w-full pt-[15px] pb-[14px] px-[25px] bg-[#F4F4FF] group-hover:bg-gradient-to-r from-startC to-endC font-dmSans font-medium text-[20px] group-hover:text-white text-main rounded-full flex justify-between items-center duration-500'>Social Media Network Marting
                                <span><IoIosArrowRoundForward className='w-[25px] h-[19px] group-hover:w-[25px] group-hover:h-[25px] duration-500' /></span>
                            </button>
                        </div>
                    </div>
                    <div className="my-[50px] bg-[rgb(0,0,0,.7)] shadow-[0_3px_10px_rgb(0,0,0,0.2)] pt-[25px] pb-[30px] px-[30px] rounded-xl">
                        <h5 className='font-nuni font-bold text-[25px] text-white relative after:absolute after:h-[2px] after:w-full after:bg-[#EDEDFF] after:left-0 after:bottom-0 after:z-10 before:absolute before:h-[2px] before:w-[60px] before:bg-gradient-to-r before:from-startC before:to-endC before:bottom-0 before:z-20 pb-[5px]'>Get a free quote</h5>
                        <div className="">
                            <input type="text" placeholder='Your Name' className='mt-[25px] mb-[20px] w-full rounded-full py-[15px] px-[26px] font-dmSans font-normal text-main text-[16px] leading-[26px]' />
                            <input type="text" placeholder='Your Email Address' className='mb-[20px] w-full rounded-full py-[15px] px-[26px] font-dmSans font-normal text-main text-[16px] leading-[26px]' />
                            <textarea
                                className="py-[15px] px-[26px] rounded-2xl font-dmSans font-normal text-main text-[16px] leading-[26px] w-full min-h-[170px]"
                                placeholder="Your Message here">
                            </textarea>
                            <button className='mt-[30px] py-[15px] px-[33px] bg-gradient-to-r from-startC to-endC rounded-full font-dmSans font-normal text-[18px] text-white leading-[30px] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:bg-[rgb(0,0,0,.2)] after:rounded-full overflow-hidden hover:after:w-0 after:duration-500'>Send Message</button>
                        </div>
                    </div>
                    <div className="pt-[25px] pb-[30px] px-[30px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl">
                        <h5 className='font-nuni font-bold text-[25px] text-main relative after:absolute after:h-[2px] after:w-full after:bg-[#EDEDFF] after:left-0 after:bottom-0 after:z-10 before:absolute before:h-[2px] before:w-[60px] before:bg-gradient-to-r before:from-startC before:to-endC before:bottom-0 before:z-20'>Download</h5>
                        <div className="mt-[25px] group">
                            <button className='w-full pt-[15px] pb-[14px] px-[25px] bg-[#F4F4FF] group-hover:bg-gradient-to-r from-startC to-endC font-dmSans font-medium text-[20px] group-hover:text-white text-main rounded-full flex justify-between items-center duration-500'>Our Brochures 2023
                                <span><IoIosArrowRoundForward className='w-[25px] h-[19px] group-hover:w-[30px] group-hover:h-[30px] duration-500' /></span>
                            </button>
                        </div>
                        <div className="mt-[25px] group">
                            <button className='w-full pt-[15px] pb-[14px] px-[25px] bg-[#F4F4FF] group-hover:bg-gradient-to-r from-startC to-endC font-dmSans font-medium text-[20px] group-hover:text-white text-main rounded-full flex justify-between items-center duration-500'>About Our Company
                                <span><IoIosArrowRoundForward className='w-[25px] h-[19px] group-hover:w-[30px] group-hover:h-[30px] duration-500' /></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SeoDetails