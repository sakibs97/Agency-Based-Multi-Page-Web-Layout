import { useState } from 'react';
import faq from '../assets/faq/faq.png';
import icon1 from '../assets/faq/Icon.png';
import icon2 from '../assets/faq/Icon2.png';
import icon3 from '../assets/faq/Icon3.png';
import { FaPlus, FaMinus } from "react-icons/fa6";

const Faq = () => {
    let [openAccordion, setOpenAccordion] = useState(null);
    const [activeTab, setActiveTab] = useState('General-Questions');


    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <section className="my-20">
            <div className="container">
                <div className="w-[50%]">
                    <h4 className='font-dmSans font-medium text-[20px] text-transparent bg-gradient-to-r from-startC to-endC bg-clip-text'>Common Questions</h4>
                    <h3 className='font-nuni font-bold text-[46px] text-main leading-[56px]'>Frequently Asked Questions</h3>
                </div>
                <div className="flex justify-between">
                    <div className="w-[49%]">
                        <div className="flex justify-between pt-10">
                            <div id="default-tab" role="tablist">
                                <div
                                    className={`flex items-center py-[10px] px-[30px] rounded-full ${activeTab === 'General-Questions' ? 'bg-[#3661FC] text-white' : 'bg-[#F4F4FF] text-main'
                                        }`}
                                    id="General-Questions"
                                    onClick={() => setActiveTab('General-Questions')}
                                    role="tab"
                                    aria-controls="General-Questions"
                                    aria-selected={activeTab === 'General-Questions'}
                                >
                                    <img src={icon1} alt="" className="bg-[#3661FC] rounded-xl p-1" />
                                    <h5 className="font-dmSans font-medium text-[20px] pl-[15px]">General Questions</h5>
                                </div>

                                <div
                                    className={`my-5 flex items-center py-[10px] px-[30px] rounded-full ${activeTab === 'Community' ? 'bg-[#3661FC] text-white' : 'bg-[#F4F4FF] text-main'
                                        }`}
                                    id="Community"
                                    onClick={() => setActiveTab('Community')}
                                    role="tab"
                                    aria-controls="Community"
                                    aria-selected={activeTab === 'Community'}
                                >
                                    <img src={icon2} alt="" className='bg-[#3661FC] rounded-xl p-1' />
                                    <h5 className="font-dmSans font-medium text-[20px] pl-[15px]">Community</h5>
                                </div>

                                <div
                                    className={`flex items-center py-[10px] px-[30px] rounded-full ${activeTab === 'Support' ? 'bg-[#3661FC] text-white' : 'bg-[#F4F4FF] text-main'
                                        }`}
                                    id="Support"
                                    onClick={() => setActiveTab('Support')}
                                    role="tab"
                                    aria-controls="Support"
                                    aria-selected={activeTab === 'Support'}
                                >
                                    <img src={icon3} alt="" className="bg-[#3661FC] rounded-xl p-1" />
                                    <h5 className="font-dmSans font-medium text-[20px] pl-[15px]">Support</h5>
                                </div>
                            </div>

                            <img src={faq} alt="faq" />
                        </div>
                    </div>
                    <div className="w-[49%] space-y-4">
                        <div className="border rounded-xl shadow-lg">
                            <button
                                className={`flex justify-between w-full p-5 font-nuni font-bold text-left rounded-xl focus:outline-none ${openAccordion === 1 ? 'text-[#3661FC]' : 'text-main'
                                    }`}
                                onClick={() => toggleAccordion(1)}
                            >
                                Is it Full Digital Marketing Agency?
                                <span className="text-[#3661FC]">{openAccordion === 1 ? <FaMinus className='w-[23px] h-[23px]' /> : <FaPlus className='w-[23px] h-[23px]' />}</span>
                            </button>
                            {openAccordion === 1 && (
                                <div className="p-5 font-dmSans font-normal text-[16px] text-ptag leading-[26px]">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nobis ad quasi voluptate velit nisi quaerat consequatur, id quia tenetur.
                                </div>
                            )}
                        </div>
                        <div className="border rounded-xl shadow-lg">
                            <button
                                className={`flex justify-between w-full p-5 font-nuni font-bold text-left rounded-xl focus:outline-none ${openAccordion === 2 ? 'text-[#3661FC]' : 'text-main'
                                    }`}
                                onClick={() => toggleAccordion(2)}
                            >
                                How to Create my Project in Agency?
                                <span className="text-blue-500">{openAccordion === 2 ? <FaMinus className='w-[23px] h-[23px]' /> : <FaPlus className='w-[23px] h-[23px]' />}</span>
                            </button>
                            {openAccordion === 2 && (
                                <div className="p-5 font-dmSans font-normal text-[16px] text-ptag leading-[26px]">
                                    It is a long established fact that a reader will be distracted by the readable content of
                                    page when looking at its layout. The point of using Lorem Ipsuim is that it has as more
                                    less or randomised words which don&#39;t look even slightly believable. If you are going to
                                    use a passage of Lorem Ipsum, you need to be sure..
                                </div>
                            )}
                        </div>
                        <div className="border rounded-xl shadow-lg">
                            <button
                                className={`flex justify-between w-full p-5 font-nuni font-bold text-left rounded-xl focus:outline-none ${openAccordion === 3 ? 'text-[#3661FC]' : 'text-main'
                                    }`}
                                onClick={() => toggleAccordion(3)}
                            >
                                How to Work in Process of Digital Agency?
                                <span className="text-blue-500">{openAccordion === 3 ? <FaMinus className='w-[23px] h-[23px]' /> : <FaPlus className='w-[23px] h-[23px]' />}</span>
                            </button>
                            {openAccordion === 3 && (
                                <div className="p-5 font-dmSans font-normal text-[16px] text-ptag leading-[26px]">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi a facilis vel, ipsum similique omnis delectus quasi rem ut totam reiciendis, veniam aliquid laudantium. Voluptatem debitis sequi nam eius ex.
                                </div>
                            )}
                        </div>
                        <div className="border rounded-xl shadow-lg">
                            <button
                                className={`flex justify-between w-full p-5 font-nuni font-bold text-left rounded-xl focus:outline-none ${openAccordion === 4 ? 'text-[#3661FC]' : 'text-main'
                                    }`}
                                onClick={() => toggleAccordion(4)}
                            >
                                How to Join Your Referral Program?
                                <span className="text-blue-500">{openAccordion === 4 ? <FaMinus className='w-[23px] h-[23px]' /> : <FaPlus className='w-[23px] h-[23px]' />}</span>
                            </button>
                            {openAccordion === 4 && (
                                <div className="p-5 font-dmSans font-normal text-[16px] text-ptag leading-[26px]">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quas, eius doloremque quod rem officia officiis magnam earum dolore facere odio harum laborum deserunt minima?
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
