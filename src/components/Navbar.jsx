import icon from "../assets/navbar/icon.png"
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        // fixed w-full z-20 top-0 start-0
        <section className="absolute w-full z-20 top-8 start-0">
            <div className="container flex justify-between items-center bg-transparent py-4">
                <div className="flex items-center">
                    <img src={icon} alt="" />
                    <div className="pl-4">
                        <h6 className="font-nuni font-bold text-[22px] text-[#000000] uppercase">ortencey</h6>
                        <p className="font-dmSans font-normal text-[15px] text-[#000000]">Digital Marketing</p>
                    </div>
                </div>
                <div className="w-[60%] flex items-center justify-between">
                    <div className="flex items-center group">
                        <div className="">
                            <div className="px-[15px] pt-[14px] pb-[16px] bg-white rounded-full">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.12658 0C4.52248 0.0878085 4.90372 0.204886 5.22141 0.47319C5.2654 0.512216 5.31428 0.546364 5.35338 0.58539C6.2527 1.48299 7.15691 2.37571 8.05135 3.27818C8.71606 3.95138 8.82848 4.87337 8.36415 5.63926C8.15399 5.98561 7.85584 6.22953 7.47461 6.36612C6.9223 6.56612 6.49708 6.90272 6.25759 7.44909C6.10118 7.81496 6.07675 8.1857 6.17939 8.57108C6.4482 9.576 7.00051 10.4199 7.675 11.1907C8.48146 12.1176 9.40522 12.903 10.5196 13.4493C10.9839 13.6786 11.4629 13.8737 12.0005 13.8006C12.7093 13.703 13.2518 13.3566 13.5304 12.6834C13.7112 12.2395 13.936 11.8444 14.3662 11.5907C15.0651 11.1809 15.9498 11.2346 16.5509 11.781C17.0983 12.2786 17.6164 12.8152 18.1394 13.342C18.6184 13.8201 19.1169 14.2835 19.5617 14.7957C20.1238 15.4348 20.1384 16.4397 19.6448 17.1324C19.5422 17.2739 19.4297 17.4105 19.3076 17.5324C18.7797 18.0642 18.2372 18.5813 17.7191 19.1276C17.1668 19.7081 16.4874 19.9618 15.7103 19.9959C14.8745 20.0301 14.0778 19.8447 13.2958 19.5813C11.7562 19.0593 10.3681 18.2544 9.05331 17.3178C6.87343 15.7616 4.96237 13.9225 3.32012 11.8151C2.10799 10.2638 1.07182 8.60523 0.431536 6.73198C0.152941 5.91732 -0.0376763 5.07826 0.00631236 4.20505C0.0454134 3.44404 0.294682 2.77572 0.866535 2.23912C1.34552 1.78544 1.80985 1.32201 2.2644 0.843937C2.66518 0.424408 3.10018 0.078052 3.69647 0C3.83821 0 3.97995 0 4.12658 0Z" fill="url(#paint0_linear_310_7188)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_310_7188" x1="-0.00493917" y1="9.98903" x2="20.0113" y2="9.98903" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#FE651B" />
                                            <stop offset="1" stopColor="#FFAA52" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="mx-3">
                            <h6 className="font-dmSans font-normal text-[14px] text-[#5B5B5B] leading-[24px]">Phone Number</h6>
                            <h5 className="font-dmSans font-normal text-[18px] text-main leading-[24px]">+88 ( 5548 ) 6548</h5>
                        </div>
                    </div>
                    <div className="flex items-center group">
                        <div className="">
                            <div className="px-[15px] py-[18px] bg-white rounded-full">
                                <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.611 12.3499C19.5547 12.5191 19.5036 12.6832 19.4524 12.8371C17.4723 10.8626 15.5025 8.90353 13.5275 6.9393C15.5127 4.96482 17.4826 3.00573 19.4627 1.0415C19.5036 1.16459 19.5599 1.33383 19.611 1.50307C19.611 5.11868 19.611 8.73428 19.611 12.3499Z" fill="url(#paint0_linear_310_7194)" />
                                    <path d="M0.990845 0.144419C1.22109 0.0931339 1.42063 0.0469772 1.61506 0.0110776C1.67646 -0.00430796 1.74298 0.000820563 1.80437 0.000820563C7.13069 0.000820563 12.4621 0.000820563 17.7884 0.00594908C18.0494 0.00594908 18.3103 0.0726198 18.5713 0.108519C18.5764 0.134162 18.5764 0.154676 18.5815 0.180319C18.5355 0.226475 18.4894 0.277761 18.4434 0.323917C15.7469 3.0369 13.0556 5.75502 10.3592 8.46801C9.98572 8.84752 9.62245 8.84752 9.24894 8.47314C6.55252 5.75502 3.85099 3.0369 1.15457 0.318789C1.10853 0.272632 1.06759 0.226475 0.990845 0.144419Z" fill="url(#paint1_linear_310_7194)" />
                                    <path d="M12.6725 7.79639C14.6475 9.76061 16.6123 11.7146 18.618 13.7096C18.3826 13.7609 18.1933 13.807 17.9938 13.8429C17.917 13.8583 17.8403 13.848 17.7635 13.848C12.4525 13.848 7.14668 13.848 1.83572 13.848C1.55431 13.848 1.28313 13.8224 1.00684 13.6788C2.98694 11.7095 4.95169 9.75548 6.93179 7.78613C6.95226 7.80152 6.99831 7.84767 7.04947 7.89383C7.52019 8.36566 7.9858 8.83748 8.45652 9.3093C9.24958 10.1042 10.3496 10.1042 11.1427 9.3093C11.6646 8.79645 12.1814 8.2836 12.6725 7.79639Z" fill="url(#paint2_linear_310_7194)" />
                                    <path d="M0.131629 12.8371C0.0906965 12.6166 0.00371533 12.3807 0.00371533 12.1448C-0.00140121 8.66762 -0.00140121 5.19049 0.00371533 1.70822C0.00371533 1.47231 0.08558 1.2364 0.131629 1.01074C2.12708 2.99548 4.09695 4.9597 6.07705 6.92906C4.10206 8.88815 2.1322 10.8472 0.131629 12.8371Z" fill="url(#paint3_linear_310_7194)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_310_7194" x1="13.526" y1="6.93283" x2="19.6145" y2="6.93283" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#FE651B" />
                                            <stop offset="1" stopColor="#FFAA52" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_310_7194" x1="0.986501" y1="4.37184" x2="18.5914" y2="4.37184" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#FE651B" />
                                            <stop offset="1" stopColor="#FFAA52" />
                                        </linearGradient>
                                        <linearGradient id="paint2_linear_310_7194" x1="1.00249" y1="10.8154" x2="18.6279" y2="10.8154" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#FE651B" />
                                            <stop offset="1" stopColor="#FFAA52" />
                                        </linearGradient>
                                        <linearGradient id="paint3_linear_310_7194" x1="-0.00162288" y1="6.91744" x2="6.08047" y2="6.91744" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#FE651B" />
                                            <stop offset="1" stopColor="#FFAA52" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="mx-3">
                            <h6 className="font-dmSans font-normal text-[14px] text-[#5B5B5B] leading-[24px]">Email</h6>
                            <h5 className="font-dmSans font-normal text-[18px] text-main leading-[24px]">infoyour@gmail.com</h5>
                        </div>
                    </div>
                    <div className="flex items-center group">
                        <div className="">
                            <div className="px-[15px] pt-[14px] pb-[16px] bg-white rounded-full">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 9.98721C0 4.46055 4.46055 0 10.0128 0C15.5139 0 20 4.46908 20 9.97015C20.0085 15.5309 15.548 20 9.9872 20C4.45202 19.9915 0 15.5309 0 9.98721ZM9.08315 7.23241C9.08315 8.08529 9.09168 8.93817 9.08315 9.79105C9.07462 10.1834 9.20255 10.4989 9.484 10.7804C10.3198 11.5906 11.1301 12.4264 11.9573 13.2452C12.4435 13.7313 12.9808 13.774 13.3731 13.3646C13.774 12.9552 13.7143 12.4435 13.2196 11.9403C12.5458 11.2665 11.8806 10.5842 11.1983 9.92751C10.9851 9.72281 10.8998 9.51812 10.8998 9.21962C10.9168 7.71855 10.9083 6.20896 10.9083 4.70789C10.9083 4.0597 10.5501 3.64179 10.0128 3.63326C9.45842 3.62473 9.09168 4.05117 9.08315 4.72495C9.08315 5.56077 9.08315 6.39659 9.08315 7.23241Z" fill="url(#paint0_linear_310_7205)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_310_7205" x1="-0.00493917" y1="9.98903" x2="20.0113" y2="9.98903" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#FE651B" />
                                            <stop offset="1" stopColor="#FFAA52" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="mx-3">
                            <h6 className="font-dmSans font-normal text-[14px] text-[#5B5B5B] leading-[24px]">Phone Number</h6>
                            <h5 className="font-dmSans font-normal text-[18px] text-main leading-[24px]">+88 ( 5548 ) 6548</h5>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container z-50">
                <nav className=" flex justify-between bg-white px-5 rounded-full">
                    <ul className="font-pop font-normal text-[16px] text-main leading-[90px] flex items-center">
                        <Link to='/'>
                            <li className="relative flex items-center group lg:mx-3">
                                <span className="group-hover:text-[#FE681E] menu-bar after:bg-gradient-to-r after:from-startC after:to-endC duration-300 flex items-center">Home</span>
                                <IoIosArrowDown className="group-hover:text-[#FE681E]" />
                            </li>
                        </Link>
                        <li className="relative hover:text-[#FE681E] menu-bar after:bg-gradient-to-r after:from-startC after:to-endC duration-300 flex items-center lg:mx-3">
                            About
                        </li>
                        <li>
                            <Link to='/services'
                                className="relative flex items-center group lg:mx-3"
                            >
                                <span className="group-hover:text-[#FE681E] menu-bar after:bg-gradient-to-r after:from-startC after:to-endC duration-300 flex items-center">Services</span>
                                <IoIosArrowDown className="group-hover:text-[#FE681E]" />
                            </Link>
                        </li>
                        <li>
                            <Link to='/team' className="relative flex items-center group lg:mx-3">
                                <span className="group-hover:text-[#FE681E] menu-bar after:bg-gradient-to-r after:from-startC after:to-endC duration-300 flex items-center">Team</span>
                                <IoIosArrowDown className="group-hover:text-[#FE681E]" />
                            </Link>
                        </li>
                        <li className="relative flex items-center group lg:mx-3">
                            <span className="group-hover:text-[#FE681E] menu-bar after:bg-gradient-to-r after:from-startC after:to-endC duration-300 flex items-center">Pages</span>
                            <IoIosArrowDown className="group-hover:text-[#FE681E]" />
                        </li>
                        <li className="relative flex items-center group lg:mx-3">
                            <span className="group-hover:text-[#FE681E] menu-bar after:bg-gradient-to-r after:from-startC after:to-endC duration-300 flex items-center">News</span>
                            <IoIosArrowDown className="group-hover:text-[#FE681E]" />
                        </li>
                        <li>
                            <Link to='/Contact'
                                className="relative hover:text-[#FE681E] menu-bar after:bg-gradient-to-r after:from-startC after:to-endC duration-300 flex items-center lg:mx-3"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <div className="p-4 border-[2px] border-startC rounded-full">
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.868864 9.56136C0.769539 5.1602 4.09554 0.669511 9.3807 0.131469C14.3907 -0.378255 18.9386 3.23183 19.6175 8.20575C19.9528 10.6649 19.4207 12.923 18.0137 14.9619C17.8123 15.2542 17.8424 15.4067 18.0793 15.6424C19.9875 17.5379 21.8828 19.4471 23.7837 21.3508C24.0124 21.5801 24.2165 21.8185 24.2548 22.1601C24.3186 22.7238 24.068 23.2134 23.5887 23.4463C23.1084 23.6802 22.5681 23.577 22.1352 23.144C20.2326 21.243 18.3281 19.343 16.4418 17.4255C16.1548 17.1332 15.9771 17.0949 15.6208 17.3388C9.86092 21.2923 1.95232 17.8257 0.950875 10.9252C0.884355 10.4703 0.876154 10.0172 0.868864 9.56136ZM3.29366 9.52574C3.2891 13.4026 6.39732 16.5477 10.2427 16.5568C14.1437 16.5669 17.2765 13.4574 17.2811 9.57141C17.2857 5.68911 14.182 2.54763 10.3348 2.53941C6.43924 2.53119 3.2973 5.64891 3.29366 9.52574Z" fill="url(#paint0_linear_310_7155)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_310_7155" x1="0.860921" y1="11.813" x2="24.2777" y2="11.813" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#FE651B" />
                                            <stop offset="1" stopColor="#FFAA52" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className="p-4 border-[2px] border-startC rounded-full mx-5">
                                <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.7472 6.21264C19.5903 5.81551 19.2308 5.78119 17.464 5.78119H15.9959V5.15364C15.9959 4.17798 15.8541 3.49649 15.5099 2.79539C14.8872 1.52556 13.8443 0.638157 12.4926 0.226322C11.8345 0.0302096 10.8524 -0.053138 10.255 0.0351124C8.59958 0.290058 7.18715 1.31474 6.46828 2.77578C6.11896 3.49159 5.97721 4.17798 5.97721 5.15364V5.7861H4.50403C2.73722 5.7861 2.37778 5.82042 2.22084 6.23225C2.13984 6.4921 1.38047 12.0764 1.05647 14.4837C0.772972 16.5821 0.509722 18.5628 0.317347 20.0532C-0.0167771 22.6223 -0.00665214 22.6615 0.00347284 22.7057V22.7106C0.0490353 22.8773 0.499597 23.3136 0.636284 23.4411L1.2286 24H20.7091L21.1495 23.6225C21.3469 23.4509 22 22.8675 22 22.5782C22 22.3821 19.7877 6.32541 19.7472 6.21264ZM20.4003 22.2056C20.3952 22.2399 20.3547 22.3429 20.2838 22.4164L20.1826 22.5243H1.79053L1.52728 22.2497L2.56509 14.7435C2.92959 12.0715 3.25359 9.74266 3.44597 8.35026C3.53203 7.74231 3.57253 7.43344 3.59278 7.28145C4.27622 7.27655 7.26309 7.27165 10.979 7.27165H18.3702L18.3803 7.32558C18.4613 7.7178 20.3648 21.7692 20.4003 22.2056ZM7.50102 5.7861V5.22718C7.50102 4.84966 7.55165 4.32997 7.60734 4.08973C7.90602 2.86403 8.92358 1.86876 10.1943 1.55008C10.7258 1.4226 11.5966 1.46673 12.1281 1.65304H12.1332C12.6901 1.83444 13.1457 2.12861 13.5659 2.57967C14.2443 3.29547 14.4721 3.93774 14.4721 5.12422V5.7861H7.50102Z" fill="url(#paint0_linear_310_7160)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_310_7160" x1="-0.00543309" y1="11.9868" x2="22.0124" y2="11.9868" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#FE651B" />
                                            <stop offset="1" stopColor="#FFAA52" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <button className="flex group items-center text-[#fff] py-[15px] px-[25px] bg-gradient-to-r from-startC to-endC rounded-full drop-shadow-lg my-3 ml-3">
                            <span className="font-dmSans font-normal text-[18px]">Free Quote</span>
                            <IoIosArrowRoundForward className="group-hover:-rotate-45 w-8 h-8 duration-500" />
                        </button>
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default Navbar