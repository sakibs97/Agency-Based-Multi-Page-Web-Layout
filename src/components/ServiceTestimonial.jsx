import { FaStar } from "react-icons/fa";
import client from "../assets/Services/client/client-one.png"
import client2 from "../assets/Services/client/client-two.jpg"
import client3 from "../assets/Services/client/client-three.jpg"
import client4 from "../assets/Services/client/client-four.png"
import client5 from "../assets/Services/client/client-five.jpg"
import client6 from "../assets/Services/client/client-six.png"
import client7 from "../assets/Services/client/client-seven.jpg"
import { useState } from "react";
import { FaMinus } from "react-icons/fa";

const ServiceTestimonial = () => {
    let [activeTab, setActiveTab] = useState('first-client');

    return (
        <section className='my-28'>
            <div className="container flex justify-between h-[540px] relative after:absolute after:top-0 after:left-[50%] after:translate-x-[-50%] after:bg-[#D7DFFE] after:w-[2px] after:h-full after:z-10">
                {/*------ Client Image part start ------*/}
                <div className="w-[600px] relative">
                    <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]" id="default-tab"
                        role="tablist">
                        <div className={`cursor-pointer ${activeTab == 'first-client' ? "bg-gradient-to-r from-startC to-endC pb-2 rounded-[30px]" : "bg-none"}`}
                            id="first-client"
                            role="tab"
                            aria-controls="first-client"
                            aria-selected={activeTab === 'first-client'}
                            onClick={() => setActiveTab('first-client')}
                        >
                            <img src={client} alt="" className="rounded-3xl" />
                        </div>
                        <div className={`cursor-pointer absolute bottom-[70%] right-[50%] translate-x-[-80%] w-full ${activeTab == 'two-client' ? "bg-gradient-to-r from-startC to-endC pb-2 rounded-[30px]" : "bg-none"}`}
                            id="two-client"
                            role="tab"
                            aria-controls="two-client"
                            aria-selected={activeTab === 'two-client'}
                            onClick={() => setActiveTab('two-client')}
                        >
                            <img src={client2} alt="" className="rounded-3xl" />
                        </div>
                        <div className={`cursor-pointer absolute top-[70%] right-[50%] translate-x-[-80%] w-full ${activeTab == 'three-client' ? "bg-gradient-to-r from-startC to-endC pb-2 rounded-[30px]" : "bg-none"}`}
                            id="three-client"
                            role="tab"
                            aria-controls="three-client"
                            aria-selected={activeTab === 'three-client'}
                            onClick={() => setActiveTab('three-client')}
                        >
                            <img src={client3} alt="" className="rounded-3xl" />
                        </div>
                        <div className={`cursor-pointer absolute top-[50%] right-0 translate-y-[80%] w-full ${activeTab == 'four-client' ? "bg-gradient-to-r from-startC to-endC pb-2 rounded-[30px]" : "bg-none"}`}
                            id="four-client"
                            role="tab"
                            aria-controls="four-client"
                            aria-selected={activeTab === 'four-client'}
                            onClick={() => setActiveTab('four-client')}
                        >
                            <img src={client4} alt="" className="rounded-3xl" />
                        </div>
                        <div className={`cursor-pointer absolute top-[70%] right-[-50%] translate-x-[80%] w-full ${activeTab == 'five-client' ? "bg-gradient-to-r from-startC to-endC pb-2 rounded-[30px]" : "bg-none"}`}
                            id="five-client"
                            role="tab"
                            aria-controls="five-client"
                            aria-selected={activeTab === 'five-client'}
                            onClick={() => setActiveTab('five-client')}
                        >
                            <img src={client5} alt="" className="rounded-3xl" />
                        </div>
                        <div className={`cursor-pointer absolute bottom-[70%] right-[-50%] translate-x-[80%] w-full ${activeTab == 'six-client' ? "bg-gradient-to-r from-startC to-endC pb-2 rounded-[30px]" : "bg-none"}`}
                            id="six-client"
                            role="tab"
                            aria-controls="six-client"
                            aria-selected={activeTab === 'six-client'}
                            onClick={() => setActiveTab('six-client')}
                        >
                            <img src={client6} alt="" className="rounded-3xl" />
                        </div>
                        <div className={`cursor-pointer absolute bottom-[50%] right-0 translate-y-[-80%] w-full ${activeTab == 'seven-client' ? "bg-gradient-to-r from-startC to-endC pb-2 rounded-[30px]" : "bg-none"}`}
                            id="seven-client"
                            role="tab"
                            aria-controls="seven-client"
                            aria-selected={activeTab === 'seven-client'}
                            onClick={() => setActiveTab('seven-client')}
                        >
                            <img src={client7} alt="" className="rounded-3xl" />
                        </div>

                    </div>
                </div>
                {/*------ Client Image part end ------*/}
                {/*------ Line shape part start ------*/}
                <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-20">
                    <FaMinus className={`relative rotate-90 w-[30px] h-[30px] my-[10px] cursor-pointer ${activeTab === 'first-client' ? 'text-[#fc8536]' : 'text-[#3661FC]'}`}
                        id="first-client"
                        role="tab"
                        aria-controls="first-client"
                        aria-selected={activeTab === 'first-client'}
                        onClick={() => setActiveTab('first-client')}
                    />
                    <FaMinus className={`rotate-90 w-[30px] h-[30px] my-[10px] cursor-pointer ${activeTab === 'two-client' ? 'text-[#fc8536]' : 'text-[#3661FC]'}`}
                        id="two-client"
                        role="tab"
                        aria-controls="two-client"
                        aria-selected={activeTab === 'two-client'}
                        onClick={() => setActiveTab('two-client')}
                    />
                    <FaMinus className={`rotate-90 w-[30px] h-[30px] my-[10px] cursor-pointer ${activeTab === 'three-client' ? 'text-[#fc8536]' : 'text-[#3661FC]'}`}
                        id="three-client"
                        role="tab"
                        aria-controls="three-client"
                        aria-selected={activeTab === 'three-client'}
                        onClick={() => setActiveTab('three-client')}
                    />
                    <FaMinus className={`rotate-90 w-[30px] h-[30px] my-[10px] cursor-pointer ${activeTab === 'four-client' ? 'text-[#fc8536]' : 'text-[#3661FC]'}`}
                        id="four-client"
                        role="tab"
                        aria-controls="four-client"
                        aria-selected={activeTab === 'four-client'}
                        onClick={() => setActiveTab('four-client')}
                    />
                    <FaMinus className={`rotate-90 w-[30px] h-[30px] my-[10px] cursor-pointer ${activeTab === 'five-client' ? 'text-[#fc8536]' : 'text-[#3661FC]'}`}
                        id="five-client"
                        role="tab"
                        aria-controls="five-client"
                        aria-selected={activeTab === 'five-client'}
                        onClick={() => setActiveTab('five-client')}
                    />
                    <FaMinus className={`rotate-90 w-[30px] h-[30px] my-[10px] cursor-pointer ${activeTab === 'six-client' ? 'text-[#fc8536]' : 'text-[#3661FC]'}`}
                        id="six-client"
                        role="tab"
                        aria-controls="six-client"
                        aria-selected={activeTab === 'six-client'}
                        onClick={() => setActiveTab('six-client')}
                    />
                    <FaMinus className={`rotate-90 w-[30px] h-[30px] my-[10px] cursor-pointer ${activeTab === 'seven-client' ? 'text-[#fc8536]' : 'text-[#3661FC]'}`}
                        id="seven-client"
                        role="tab"
                        aria-controls="seven-client"
                        aria-selected={activeTab === 'seven-client'}
                        onClick={() => setActiveTab('seven-client')}
                    />

                </div>
                {/*------ Line shape part end ------*/}

                <div className='w-[565px]'>
                    {/*------ Headline part start ------*/}
                    <div className="">
                        <div className="flex items-center">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.454 0.188335C13.0063 0.150475 14.4828 0.50068 15.9215 1.08751C16.3001 1.23895 16.3474 1.39039 16.0256 1.67434C15.7511 1.91096 15.505 2.18545 15.2495 2.441C15.098 2.59244 14.9939 2.75335 14.9371 2.96158C14.7573 3.58627 14.7478 3.5768 14.1042 3.36857C9.01205 1.69327 3.60754 5.05334 2.85034 10.3537C2.17833 15.0673 5.45321 19.4496 10.1668 20.1595C14.8709 20.8599 19.3573 17.5093 19.982 12.8146C20.1713 11.3854 20.0482 9.9846 19.5276 8.6311C19.4046 8.29983 19.4235 8.15785 19.8211 8.12946C20.4363 8.08213 20.7392 7.56156 21.1367 7.18296C21.733 6.61506 21.7235 6.6056 22.0169 7.37226C24.7145 14.329 20.2943 21.8915 12.9306 22.8948C6.69312 23.7467 0.966809 19.3833 0.105495 13.1175C-0.746354 6.88008 3.65487 1.1159 9.90176 0.27352C10.4223 0.207265 10.9334 0.207265 11.454 0.188335Z" fill="url(#paint0_linear_198_645)" />
                                <path d="M5.33008 11.5748C5.33008 7.24934 9.67451 4.30573 13.6877 5.90532C14.1798 6.10408 14.1893 6.15141 13.8107 6.52054C13.3091 7.02218 12.8074 7.52383 12.3058 8.02547C12.1449 8.18638 11.9745 8.28103 11.7189 8.25263C9.83541 8.05387 8.25476 9.37897 8.07492 11.395C7.93295 13.0325 9.14447 14.6131 10.9428 14.8781C13.0156 15.1905 14.9654 13.43 14.7383 11.253C14.7099 11.0259 14.7856 10.865 14.9465 10.7041C15.486 10.174 16.0255 9.64398 16.5461 9.09502C16.8206 8.8016 16.9247 8.91518 17.0572 9.22753C18.5621 12.7201 16.4136 16.7711 12.6276 17.5567C8.86052 18.3518 5.33008 15.4555 5.33008 11.5748Z" fill="url(#paint1_linear_198_645)" />
                                <path d="M19.026 2.09078C20.0766 1.56074 20.5782 1.55127 21.0326 2.03399C21.4774 2.50723 21.449 2.99941 20.9001 3.98377C21.3828 3.98377 21.8371 3.98377 22.2819 3.98377C22.4807 3.98377 22.67 4.01217 22.7647 4.21093C22.8688 4.42863 22.793 4.61793 22.6416 4.76937C21.8087 5.61175 20.9663 6.44467 20.1334 7.27759C19.9725 7.43849 19.7737 7.45742 19.5655 7.45742C18.9787 7.45742 18.4013 7.47635 17.8145 7.44796C17.4453 7.42903 17.1992 7.56154 16.9437 7.81709C15.4955 9.28416 14.0285 10.7418 12.5614 12.1994C11.8326 12.9282 11.1322 13.0228 10.5738 12.4739C9.98692 11.8965 10.0626 11.1866 10.7914 10.4484C12.2585 8.97182 13.7351 7.49528 15.2116 6.03767C15.4577 5.80105 15.6091 5.54549 15.5523 5.20476C15.2684 3.6241 15.8268 2.40312 17.1141 1.46609C17.5211 1.17267 17.8334 0.765677 18.1931 0.406008C18.3634 0.245103 18.5527 0.131523 18.7894 0.235638C19.0165 0.330288 19.0354 0.538517 19.0354 0.756212C19.026 1.1916 19.026 1.62699 19.026 2.09078Z" fill="url(#paint2_linear_198_645)" />
                                <defs>
                                    <linearGradient id="paint0_linear_198_645" x1="-0.0056343" y1="11.5808" x2="22.8276" y2="11.5808" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FE651B" />
                                        <stop offset="1" stopColor="#FFAA52" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_198_645" x1="5.32706" y1="11.5696" x2="17.5483" y2="11.5696" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FE651B" />
                                        <stop offset="1" stopColor="#FFAA52" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_198_645" x1="10.18" y1="6.50374" x2="22.8199" y2="6.50374" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FE651B" />
                                        <stop offset="1" stopColor="#FFAA52" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <h6 className='font-dmSans font-medium text-[20px] text-[#3661FC] pl-[10px]'>Testimonial</h6>
                        </div>
                        <h4 className='font-nuni font-bold text-[46px] leading-[56px] text-main'>What Our Client Say</h4>
                    </div>
                    {/*------ Headline part end ------*/}
                    {/*------ Client one Say Text part start ------*/}
                    <div className={`mt-[45px] ${activeTab === 'first-client' ? 'block' : 'hidden'}`}>
                        <div className="flex items-center justify-between">
                            <svg width="58" height="50" viewBox="0 0 58 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.0256167 16.267C0.536172 14.4076 0.79145 12.4706 1.55728 10.7403C4.56956 3.8706 9.98144 0.409922 17.3334 0.0483581C21.9539 -0.184075 22.1071 0.280796 22.0305 4.59372C21.9795 8.77752 22.005 8.77752 17.9461 8.80335C12.2789 8.855 8.11791 13.5811 8.7561 19.2628C8.96032 21.1481 10.3133 22.3878 12.3045 22.4394C14.7296 22.4911 17.1547 22.5686 19.5799 22.4136C23.3835 22.1812 26.4213 25.5902 26.4213 28.8959C26.4213 33.5962 26.5234 38.2707 26.3958 42.971C26.2937 46.5092 23.4345 49.2467 19.9117 49.2984C15.3933 49.3759 10.9004 49.35 6.38202 49.2984C3.16552 49.2467 0.919087 47.2581 0.229838 44.0041C0.178782 43.7975 0.0766683 43.6167 8.63497e-05 43.4101C0.0256132 34.3452 0.0256159 25.3061 0.0256167 16.267Z" fill="#3661FC" />
                                <path d="M57.4644 43.6431C56.8006 44.8569 56.2646 46.1998 55.3966 47.2587C54.2223 48.7308 52.4865 49.2989 50.6229 49.2989C46.2832 49.2989 41.9435 49.3248 37.6038 49.2989C33.8257 49.2731 31.1708 46.8197 31.1198 42.9716C31.0432 33.9067 30.9411 24.816 31.1963 15.7511C31.375 8.8039 37.2209 2.24412 44.3176 0.617083C46.4109 0.126391 48.6062 0.152221 50.7761 0.0747408C52.1035 0.0230899 52.8694 0.797866 52.946 2.11499C53.0225 3.69037 53.0225 5.29158 52.946 6.89278C52.8694 8.13243 52.078 8.77808 50.8272 8.82973C49.6529 8.88138 48.4276 8.8039 47.2788 9.01051C42.2498 9.81111 38.9823 14.4598 39.7992 19.625C40.0545 21.3295 41.4074 22.4142 43.3731 22.44C45.7471 22.4658 48.1467 22.44 50.5208 22.44C54.0947 22.44 56.3922 24.2736 57.2857 27.8376C57.2857 27.9409 57.3878 28.0442 57.4644 28.1475C57.4644 33.3127 57.4644 38.4779 57.4644 43.6431Z" fill="#3661FC" />
                            </svg>
                            <div className="flex justify-between items-center py-[15px] px-[20px] bg-[#F4F4FF] w-[165px] rounded-full">
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                            </div>
                        </div>
                        <p className="font-dmSans font-normal text-[20px] text-main py-[30px]">
                            There are many variations of passages of Lorem Ipsum availa
                            the majority have suffered alteration in some form by injecte
                            our, or rando word which don&apos;t look even slightly a believable.
                            If you are going to use a passage of Lorem Ipsum, you need
                            sure there isn&apos;t anything embarrassing.</p>
                        <div className="">
                            <h6 className="font-nuni font-bold text-[25px] text-main">Kristin Waon</h6>
                            <p className="font-dmSans font-normal text-[16px] leading-[26px] text-[#6B6161]">Web Designer</p>
                        </div>
                    </div>
                    {/*------ Client one Say Text part end ------*/}
                    {/*------ Client two Say Text part start ------*/}
                    <div className={activeTab === 'two-client' ? 'block mt-[45px]' : 'hidden'}>
                        <div className="flex items-center justify-between">
                            <svg width="58" height="50" viewBox="0 0 58 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.0256167 16.267C0.536172 14.4076 0.79145 12.4706 1.55728 10.7403C4.56956 3.8706 9.98144 0.409922 17.3334 0.0483581C21.9539 -0.184075 22.1071 0.280796 22.0305 4.59372C21.9795 8.77752 22.005 8.77752 17.9461 8.80335C12.2789 8.855 8.11791 13.5811 8.7561 19.2628C8.96032 21.1481 10.3133 22.3878 12.3045 22.4394C14.7296 22.4911 17.1547 22.5686 19.5799 22.4136C23.3835 22.1812 26.4213 25.5902 26.4213 28.8959C26.4213 33.5962 26.5234 38.2707 26.3958 42.971C26.2937 46.5092 23.4345 49.2467 19.9117 49.2984C15.3933 49.3759 10.9004 49.35 6.38202 49.2984C3.16552 49.2467 0.919087 47.2581 0.229838 44.0041C0.178782 43.7975 0.0766683 43.6167 8.63497e-05 43.4101C0.0256132 34.3452 0.0256159 25.3061 0.0256167 16.267Z" fill="#3661FC" />
                                <path d="M57.4644 43.6431C56.8006 44.8569 56.2646 46.1998 55.3966 47.2587C54.2223 48.7308 52.4865 49.2989 50.6229 49.2989C46.2832 49.2989 41.9435 49.3248 37.6038 49.2989C33.8257 49.2731 31.1708 46.8197 31.1198 42.9716C31.0432 33.9067 30.9411 24.816 31.1963 15.7511C31.375 8.8039 37.2209 2.24412 44.3176 0.617083C46.4109 0.126391 48.6062 0.152221 50.7761 0.0747408C52.1035 0.0230899 52.8694 0.797866 52.946 2.11499C53.0225 3.69037 53.0225 5.29158 52.946 6.89278C52.8694 8.13243 52.078 8.77808 50.8272 8.82973C49.6529 8.88138 48.4276 8.8039 47.2788 9.01051C42.2498 9.81111 38.9823 14.4598 39.7992 19.625C40.0545 21.3295 41.4074 22.4142 43.3731 22.44C45.7471 22.4658 48.1467 22.44 50.5208 22.44C54.0947 22.44 56.3922 24.2736 57.2857 27.8376C57.2857 27.9409 57.3878 28.0442 57.4644 28.1475C57.4644 33.3127 57.4644 38.4779 57.4644 43.6431Z" fill="#3661FC" />
                            </svg>
                            <div className="flex justify-between items-center py-[15px] px-[20px] bg-[#F4F4FF] w-[165px] rounded-full">
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                            </div>
                        </div>
                        <p className="font-dmSans font-normal text-[20px] text-main py-[30px]">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat distinctio similique cupiditate minus dolorum fuga deleniti at unde, modi beatae.
                        </p>
                        <div className="">
                            <h6 className="font-nuni font-bold text-[25px] text-main">Ben Stokes</h6>
                            <p className="font-dmSans font-normal text-[16px] leading-[26px] text-[#6B6161]">Athletic</p>
                        </div>
                    </div>
                    {/*------ Client two Say Text part end ------*/}
                    {/*------ Client three Say Text part start ------*/}
                    <div className={activeTab === 'three-client' ? 'block mt-[45px]' : 'hidden'}>
                        <div className="flex items-center justify-between">
                            <svg width="58" height="50" viewBox="0 0 58 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.0256167 16.267C0.536172 14.4076 0.79145 12.4706 1.55728 10.7403C4.56956 3.8706 9.98144 0.409922 17.3334 0.0483581C21.9539 -0.184075 22.1071 0.280796 22.0305 4.59372C21.9795 8.77752 22.005 8.77752 17.9461 8.80335C12.2789 8.855 8.11791 13.5811 8.7561 19.2628C8.96032 21.1481 10.3133 22.3878 12.3045 22.4394C14.7296 22.4911 17.1547 22.5686 19.5799 22.4136C23.3835 22.1812 26.4213 25.5902 26.4213 28.8959C26.4213 33.5962 26.5234 38.2707 26.3958 42.971C26.2937 46.5092 23.4345 49.2467 19.9117 49.2984C15.3933 49.3759 10.9004 49.35 6.38202 49.2984C3.16552 49.2467 0.919087 47.2581 0.229838 44.0041C0.178782 43.7975 0.0766683 43.6167 8.63497e-05 43.4101C0.0256132 34.3452 0.0256159 25.3061 0.0256167 16.267Z" fill="#3661FC" />
                                <path d="M57.4644 43.6431C56.8006 44.8569 56.2646 46.1998 55.3966 47.2587C54.2223 48.7308 52.4865 49.2989 50.6229 49.2989C46.2832 49.2989 41.9435 49.3248 37.6038 49.2989C33.8257 49.2731 31.1708 46.8197 31.1198 42.9716C31.0432 33.9067 30.9411 24.816 31.1963 15.7511C31.375 8.8039 37.2209 2.24412 44.3176 0.617083C46.4109 0.126391 48.6062 0.152221 50.7761 0.0747408C52.1035 0.0230899 52.8694 0.797866 52.946 2.11499C53.0225 3.69037 53.0225 5.29158 52.946 6.89278C52.8694 8.13243 52.078 8.77808 50.8272 8.82973C49.6529 8.88138 48.4276 8.8039 47.2788 9.01051C42.2498 9.81111 38.9823 14.4598 39.7992 19.625C40.0545 21.3295 41.4074 22.4142 43.3731 22.44C45.7471 22.4658 48.1467 22.44 50.5208 22.44C54.0947 22.44 56.3922 24.2736 57.2857 27.8376C57.2857 27.9409 57.3878 28.0442 57.4644 28.1475C57.4644 33.3127 57.4644 38.4779 57.4644 43.6431Z" fill="#3661FC" />
                            </svg>
                            <div className="flex justify-between items-center py-[15px] px-[20px] bg-[#F4F4FF] w-[165px] rounded-full">
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                            </div>
                        </div>
                        <p className="font-dmSans font-normal text-[20px] text-main py-[30px]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius alias, sed unde quas doloremque odit commodi aliquid esse? Quasi molestiae optio expedita totam? Magnam, expedita maxime, quisquam temporibus consequuntur excepturi sit, ducimus impedit officia ea mollitia! Reprehenderit voluptatem provident dicta. Deserunt nemo eaque vero tenetur repellat tempora, ut consequatur necessitatibus?
                        </p>
                        <div className="">
                            <h6 className="font-nuni font-bold text-[25px] text-main">Zak Crawley</h6>
                            <p className="font-dmSans font-normal text-[16px] leading-[26px] text-[#6B6161]">Backend Developer</p>
                        </div>
                    </div>
                    {/*------ Client three Say Text part end ------*/}
                    {/*------ Client four Say Text part start ------*/}
                    <div className={activeTab === 'four-client' ? 'block mt-[45px]' : 'hidden'}>
                        <div className="flex items-center justify-between">
                            <svg width="58" height="50" viewBox="0 0 58 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.0256167 16.267C0.536172 14.4076 0.79145 12.4706 1.55728 10.7403C4.56956 3.8706 9.98144 0.409922 17.3334 0.0483581C21.9539 -0.184075 22.1071 0.280796 22.0305 4.59372C21.9795 8.77752 22.005 8.77752 17.9461 8.80335C12.2789 8.855 8.11791 13.5811 8.7561 19.2628C8.96032 21.1481 10.3133 22.3878 12.3045 22.4394C14.7296 22.4911 17.1547 22.5686 19.5799 22.4136C23.3835 22.1812 26.4213 25.5902 26.4213 28.8959C26.4213 33.5962 26.5234 38.2707 26.3958 42.971C26.2937 46.5092 23.4345 49.2467 19.9117 49.2984C15.3933 49.3759 10.9004 49.35 6.38202 49.2984C3.16552 49.2467 0.919087 47.2581 0.229838 44.0041C0.178782 43.7975 0.0766683 43.6167 8.63497e-05 43.4101C0.0256132 34.3452 0.0256159 25.3061 0.0256167 16.267Z" fill="#3661FC" />
                                <path d="M57.4644 43.6431C56.8006 44.8569 56.2646 46.1998 55.3966 47.2587C54.2223 48.7308 52.4865 49.2989 50.6229 49.2989C46.2832 49.2989 41.9435 49.3248 37.6038 49.2989C33.8257 49.2731 31.1708 46.8197 31.1198 42.9716C31.0432 33.9067 30.9411 24.816 31.1963 15.7511C31.375 8.8039 37.2209 2.24412 44.3176 0.617083C46.4109 0.126391 48.6062 0.152221 50.7761 0.0747408C52.1035 0.0230899 52.8694 0.797866 52.946 2.11499C53.0225 3.69037 53.0225 5.29158 52.946 6.89278C52.8694 8.13243 52.078 8.77808 50.8272 8.82973C49.6529 8.88138 48.4276 8.8039 47.2788 9.01051C42.2498 9.81111 38.9823 14.4598 39.7992 19.625C40.0545 21.3295 41.4074 22.4142 43.3731 22.44C45.7471 22.4658 48.1467 22.44 50.5208 22.44C54.0947 22.44 56.3922 24.2736 57.2857 27.8376C57.2857 27.9409 57.3878 28.0442 57.4644 28.1475C57.4644 33.3127 57.4644 38.4779 57.4644 43.6431Z" fill="#3661FC" />
                            </svg>
                            <div className="flex justify-between items-center py-[15px] px-[20px] bg-[#F4F4FF] w-[165px] rounded-full">
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                            </div>
                        </div>
                        <p className="font-dmSans font-normal text-[20px] text-main py-[30px]">
                            There are many variations of passages of Lorem Ipsum availa
                            the majority have suffered alteration in some form by injecte
                            our, or rando word which don&apos;t look even slightly a believable.
                            If you are going to use a passage of Lorem Ipsum, you need
                            sure there isn&apos;t anything embarrassing.</p>
                        <div className="">
                            <h6 className="font-nuni font-bold text-[25px] text-main">Rachin Rabindrra</h6>
                            <p className="font-dmSans font-normal text-[16px] leading-[26px] text-[#6B6161]">Frontend Developer</p>
                        </div>
                    </div>
                    {/*------ Client four Say Text part end ------*/}
                    {/*------ Client five Say Text part start ------*/}
                    <div className={activeTab === 'five-client' ? 'block mt-[45px]' : 'hidden'}>
                        <div className="flex items-center justify-between">
                            <svg width="58" height="50" viewBox="0 0 58 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.0256167 16.267C0.536172 14.4076 0.79145 12.4706 1.55728 10.7403C4.56956 3.8706 9.98144 0.409922 17.3334 0.0483581C21.9539 -0.184075 22.1071 0.280796 22.0305 4.59372C21.9795 8.77752 22.005 8.77752 17.9461 8.80335C12.2789 8.855 8.11791 13.5811 8.7561 19.2628C8.96032 21.1481 10.3133 22.3878 12.3045 22.4394C14.7296 22.4911 17.1547 22.5686 19.5799 22.4136C23.3835 22.1812 26.4213 25.5902 26.4213 28.8959C26.4213 33.5962 26.5234 38.2707 26.3958 42.971C26.2937 46.5092 23.4345 49.2467 19.9117 49.2984C15.3933 49.3759 10.9004 49.35 6.38202 49.2984C3.16552 49.2467 0.919087 47.2581 0.229838 44.0041C0.178782 43.7975 0.0766683 43.6167 8.63497e-05 43.4101C0.0256132 34.3452 0.0256159 25.3061 0.0256167 16.267Z" fill="#3661FC" />
                                <path d="M57.4644 43.6431C56.8006 44.8569 56.2646 46.1998 55.3966 47.2587C54.2223 48.7308 52.4865 49.2989 50.6229 49.2989C46.2832 49.2989 41.9435 49.3248 37.6038 49.2989C33.8257 49.2731 31.1708 46.8197 31.1198 42.9716C31.0432 33.9067 30.9411 24.816 31.1963 15.7511C31.375 8.8039 37.2209 2.24412 44.3176 0.617083C46.4109 0.126391 48.6062 0.152221 50.7761 0.0747408C52.1035 0.0230899 52.8694 0.797866 52.946 2.11499C53.0225 3.69037 53.0225 5.29158 52.946 6.89278C52.8694 8.13243 52.078 8.77808 50.8272 8.82973C49.6529 8.88138 48.4276 8.8039 47.2788 9.01051C42.2498 9.81111 38.9823 14.4598 39.7992 19.625C40.0545 21.3295 41.4074 22.4142 43.3731 22.44C45.7471 22.4658 48.1467 22.44 50.5208 22.44C54.0947 22.44 56.3922 24.2736 57.2857 27.8376C57.2857 27.9409 57.3878 28.0442 57.4644 28.1475C57.4644 33.3127 57.4644 38.4779 57.4644 43.6431Z" fill="#3661FC" />
                            </svg>
                            <div className="flex justify-between items-center py-[15px] px-[20px] bg-[#F4F4FF] w-[165px] rounded-full">
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                            </div>
                        </div>
                        <p className="font-dmSans font-normal text-[20px] text-main py-[30px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officia dolor eius facilis distinctio quae iste assumenda optio praesentium quaerat totam voluptatibus reiciendis ea pariatur laboriosam similique mollitia veritatis, ut aliquid ab quis? Animi nulla velit est ea, qui dolore?
                        </p>
                        <div className="">
                            <h6 className="font-nuni font-bold text-[25px] text-main">Root</h6>
                            <p className="font-dmSans font-normal text-[16px] leading-[26px] text-[#6B6161]">Digital Marketer</p>
                        </div>
                    </div>
                    {/*------ Client five Say Text part end ------*/}
                    {/*------ Client six Say Text part start ------*/}
                    <div className={activeTab === 'six-client' ? 'block mt-[45px]' : 'hidden'}>
                        <div className="flex items-center justify-between">
                            <svg width="58" height="50" viewBox="0 0 58 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.0256167 16.267C0.536172 14.4076 0.79145 12.4706 1.55728 10.7403C4.56956 3.8706 9.98144 0.409922 17.3334 0.0483581C21.9539 -0.184075 22.1071 0.280796 22.0305 4.59372C21.9795 8.77752 22.005 8.77752 17.9461 8.80335C12.2789 8.855 8.11791 13.5811 8.7561 19.2628C8.96032 21.1481 10.3133 22.3878 12.3045 22.4394C14.7296 22.4911 17.1547 22.5686 19.5799 22.4136C23.3835 22.1812 26.4213 25.5902 26.4213 28.8959C26.4213 33.5962 26.5234 38.2707 26.3958 42.971C26.2937 46.5092 23.4345 49.2467 19.9117 49.2984C15.3933 49.3759 10.9004 49.35 6.38202 49.2984C3.16552 49.2467 0.919087 47.2581 0.229838 44.0041C0.178782 43.7975 0.0766683 43.6167 8.63497e-05 43.4101C0.0256132 34.3452 0.0256159 25.3061 0.0256167 16.267Z" fill="#3661FC" />
                                <path d="M57.4644 43.6431C56.8006 44.8569 56.2646 46.1998 55.3966 47.2587C54.2223 48.7308 52.4865 49.2989 50.6229 49.2989C46.2832 49.2989 41.9435 49.3248 37.6038 49.2989C33.8257 49.2731 31.1708 46.8197 31.1198 42.9716C31.0432 33.9067 30.9411 24.816 31.1963 15.7511C31.375 8.8039 37.2209 2.24412 44.3176 0.617083C46.4109 0.126391 48.6062 0.152221 50.7761 0.0747408C52.1035 0.0230899 52.8694 0.797866 52.946 2.11499C53.0225 3.69037 53.0225 5.29158 52.946 6.89278C52.8694 8.13243 52.078 8.77808 50.8272 8.82973C49.6529 8.88138 48.4276 8.8039 47.2788 9.01051C42.2498 9.81111 38.9823 14.4598 39.7992 19.625C40.0545 21.3295 41.4074 22.4142 43.3731 22.44C45.7471 22.4658 48.1467 22.44 50.5208 22.44C54.0947 22.44 56.3922 24.2736 57.2857 27.8376C57.2857 27.9409 57.3878 28.0442 57.4644 28.1475C57.4644 33.3127 57.4644 38.4779 57.4644 43.6431Z" fill="#3661FC" />
                            </svg>
                            <div className="flex justify-between items-center py-[15px] px-[20px] bg-[#F4F4FF] w-[165px] rounded-full">
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                            </div>
                        </div>
                        <p className="font-dmSans font-normal text-[20px] text-main py-[30px]">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea eius aspernatur et culpa, est inventore itaque ipsa in voluptatibus, voluptas reiciendis quas error quo autem perspiciatis, iste mollitia iusto fuga. Placeat rem numquam unde aperiam voluptate omnis laudantium veniam quaerat quibusdam esse magnam expedita sed vel dignissimos, inventore distinctio, totam in quos quasi. Nam, totam!
                        </p>
                        <div className="">
                            <h6 className="font-nuni font-bold text-[25px] text-main">Alisson Becker</h6>
                            <p className="font-dmSans font-normal text-[16px] leading-[26px] text-[#6B6161]">Designer</p>
                        </div>
                    </div>
                    {/*------ Client six Say Text part end ------*/}
                    {/*------ Client seven Say Text part start ------*/}
                    <div className={activeTab === 'seven-client' ? 'block mt-[45px]' : 'hidden'}>
                        <div className="flex items-center justify-between">
                            <svg width="58" height="50" viewBox="0 0 58 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.0256167 16.267C0.536172 14.4076 0.79145 12.4706 1.55728 10.7403C4.56956 3.8706 9.98144 0.409922 17.3334 0.0483581C21.9539 -0.184075 22.1071 0.280796 22.0305 4.59372C21.9795 8.77752 22.005 8.77752 17.9461 8.80335C12.2789 8.855 8.11791 13.5811 8.7561 19.2628C8.96032 21.1481 10.3133 22.3878 12.3045 22.4394C14.7296 22.4911 17.1547 22.5686 19.5799 22.4136C23.3835 22.1812 26.4213 25.5902 26.4213 28.8959C26.4213 33.5962 26.5234 38.2707 26.3958 42.971C26.2937 46.5092 23.4345 49.2467 19.9117 49.2984C15.3933 49.3759 10.9004 49.35 6.38202 49.2984C3.16552 49.2467 0.919087 47.2581 0.229838 44.0041C0.178782 43.7975 0.0766683 43.6167 8.63497e-05 43.4101C0.0256132 34.3452 0.0256159 25.3061 0.0256167 16.267Z" fill="#3661FC" />
                                <path d="M57.4644 43.6431C56.8006 44.8569 56.2646 46.1998 55.3966 47.2587C54.2223 48.7308 52.4865 49.2989 50.6229 49.2989C46.2832 49.2989 41.9435 49.3248 37.6038 49.2989C33.8257 49.2731 31.1708 46.8197 31.1198 42.9716C31.0432 33.9067 30.9411 24.816 31.1963 15.7511C31.375 8.8039 37.2209 2.24412 44.3176 0.617083C46.4109 0.126391 48.6062 0.152221 50.7761 0.0747408C52.1035 0.0230899 52.8694 0.797866 52.946 2.11499C53.0225 3.69037 53.0225 5.29158 52.946 6.89278C52.8694 8.13243 52.078 8.77808 50.8272 8.82973C49.6529 8.88138 48.4276 8.8039 47.2788 9.01051C42.2498 9.81111 38.9823 14.4598 39.7992 19.625C40.0545 21.3295 41.4074 22.4142 43.3731 22.44C45.7471 22.4658 48.1467 22.44 50.5208 22.44C54.0947 22.44 56.3922 24.2736 57.2857 27.8376C57.2857 27.9409 57.3878 28.0442 57.4644 28.1475C57.4644 33.3127 57.4644 38.4779 57.4644 43.6431Z" fill="#3661FC" />
                            </svg>
                            <div className="flex justify-between items-center py-[15px] px-[20px] bg-[#F4F4FF] w-[165px] rounded-full">
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                                <FaStar className="w-5 h-5 hover:text-[#FCC013] duration-300 ease-in-out" />
                            </div>
                        </div>
                        <p className="font-dmSans font-normal text-[20px] text-main py-[30px]">
                            There are many variations of passages of Lorem Ipsum availa
                            the majority have suffered alteration in some form by injecte
                            our, or rando word which don&apos;t look even slightly a believable.
                            If you are going to use a passage of Lorem Ipsum, you need
                            sure there isn&apos;t anything embarrassing.</p>
                        <div className="">
                            <h6 className="font-nuni font-bold text-[25px] text-main">Willam Max</h6>
                            <p className="font-dmSans font-normal text-[16px] leading-[26px] text-[#6B6161]">Web Developer</p>
                        </div>
                    </div>
                    {/*------ Client seven Say Text part end ------*/}
                </div>
            </div>
        </section>
    )
}

export default ServiceTestimonial