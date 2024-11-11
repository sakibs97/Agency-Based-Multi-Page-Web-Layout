import { useState } from 'react';
import faq from '../../assets/faq/faq.png';
import icon1 from '../../assets/faq/Icon.png';
import icon2 from '../../assets/faq/Icon2.png';
import icon3 from '../../assets/faq/Icon3.png';
import { FaPlus, FaMinus } from "react-icons/fa6";

const Faq = () => {
    let [openAccordion, setOpenAccordion] = useState(null);
    let [activeTab, setActiveTab] = useState('General-Questions');


    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <section className="my-20">
            <div className="container mx-auto">
                <div className="w-full lg:w-[50%]">
                    <h4 className='font-dmSans font-medium text-[20px] text-transparent bg-gradient-to-r from-startC to-endC bg-clip-text'>Common Questions</h4>
                    <h3 className='font-nuni font-bold text-[46px] text-main leading-[56px]'>Frequently Asked Questions</h3>
                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-8 pt-10">

                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                        <div id="default-tab" role="tablist">
                            <div
                                className={`flex items-center py-[10px] px-[30px] rounded-full cursor-pointer ${activeTab === 'General-Questions' ? 'bg-[#3661FC] text-white duration-300' : 'bg-[#F4F4FF] text-main hover:bg-[#3661FC] hover:text-white duration-300'
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
                                className={`my-5 flex items-center py-[10px] px-[30px] rounded-full cursor-pointer ${activeTab === 'Community' ? 'bg-[#3661FC] text-white duration-300' : 'bg-[#F4F4FF] text-main hover:bg-[#3661FC] hover:text-white duration-300'
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
                                className={`flex items-center py-[10px] px-[30px] rounded-full cursor-pointer ${activeTab === 'Support' ? 'bg-[#3661FC] text-white duration-300' : 'bg-[#F4F4FF] text-main hover:bg-[#3661FC] hover:text-white duration-300'
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
                    <div className={`w-full lg:w-[49%] ${activeTab === 'General-Questions' ? 'block' : 'hidden'}`}>
                        <div className="border rounded-xl shadow-lg mb-[15px]">
                            <button
                                className={`flex justify-between w-full p-5 font-nuni font-bold text-left rounded-xl focus:outline-none ${openAccordion === 1 ? 'text-[#3661FC]' : 'text-main'
                                    }`}
                                onClick={() => toggleAccordion(1)}
                            >
                                Is it Full Digital Marketing Agency?
                                <span className="text-[#3661FC]">{openAccordion === 1 ? <FaMinus className='w-[23px] h-[23px]' /> : <FaPlus className='w-[23px] h-[23px]' />}</span>
                            </button>
                            {openAccordion === 1 && (
                                <div className="p-5 font-dmSans font-normal text-[14px] md:text-[16px] text-ptag leading-[26px]">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nobis ad quasi voluptate velit nisi quaerat consequatur, id quia tenetur.
                                </div>
                            )}
                        </div>
                        <div className="border rounded-xl shadow-lg my-[15px]">
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
                        <div className="border rounded-xl shadow-lg my-[15px]">
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
                        <div className="border rounded-xl shadow-lg mt-[15px]">
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
                    <div className={`w-[49%] space-y-4 ${activeTab === 'Community' ? 'block' : 'hidden'}`}>
                        <div className="border rounded-xl shadow-lg my-[15px]">
                            <button
                                className={`flex justify-between w-full p-5 font-nuni font-bold text-left rounded-xl focus:outline-none ${openAccordion === 1 ? 'text-[#3661FC]' : 'text-main'
                                    }`}
                                onClick={() => toggleAccordion(1)}
                            >
                                Lorem ipsum dolor sit amet, consectetur?
                                <span className="text-[#3661FC]">{openAccordion === 1 ? <FaMinus className='w-[23px] h-[23px]' /> : <FaPlus className='w-[23px] h-[23px]' />}</span>
                            </button>
                            {openAccordion === 1 && (
                                <div className="p-5 font-dmSans font-normal text-[16px] text-ptag leading-[26px]">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nobis ad quasi voluptate velit nisi quaerat consequatur, id quia tenetur.
                                </div>
                            )}
                        </div>
                        <div className="border rounded-xl shadow-lg my-[15px]">
                            <button
                                className={`flex justify-between w-full p-5 font-nuni font-bold text-left rounded-xl focus:outline-none ${openAccordion === 2 ? 'text-[#3661FC]' : 'text-main'
                                    }`}
                                onClick={() => toggleAccordion(2)}
                            >
                                Lorem ipsum dolor sit amet, consectetur?
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
                        <div className="border rounded-xl shadow-lg my-[15px]">
                            <button
                                className={`flex justify-between w-full p-5 font-nuni font-bold text-left rounded-xl focus:outline-none ${openAccordion === 3 ? 'text-[#3661FC]' : 'text-main'
                                    }`}
                                onClick={() => toggleAccordion(3)}
                            >
                                Lorem ipsum dolor sit amet, consectetur hhhhhh?
                                <span className="text-blue-500">{openAccordion === 3 ? <FaMinus className='w-[23px] h-[23px]' /> : <FaPlus className='w-[23px] h-[23px]' />}</span>
                            </button>
                            {openAccordion === 3 && (
                                <div className="p-5 font-dmSans font-normal text-[16px] text-ptag leading-[26px]">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi a facilis vel, ipsum similique omnis delectus quasi rem ut totam reiciendis, veniam aliquid laudantium. Voluptatem debitis sequi nam eius ex.
                                </div>
                            )}
                        </div>
                        <div className="border rounded-xl shadow-lg my-[15px]">
                            <button
                                className={`flex justify-between w-full p-5 font-nuni font-bold text-left rounded-xl focus:outline-none ${openAccordion === 4 ? 'text-[#3661FC]' : 'text-main'
                                    }`}
                                onClick={() => toggleAccordion(4)}
                            >
                                Lorem ipsum dolor sit amet, consectetur?
                                <span className="text-blue-500">{openAccordion === 4 ? <FaMinus className='w-[23px] h-[23px]' /> : <FaPlus className='w-[23px] h-[23px]' />}</span>
                            </button>
                            {openAccordion === 4 && (
                                <div className="p-5 font-dmSans font-normal text-[16px] text-ptag leading-[26px]">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quas, eius doloremque quod rem officia officiis magnam earum dolore facere odio harum laborum deserunt minima?
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={`w-[49%] space-y-4 ${activeTab === 'Support' ? 'block' : 'hidden'}`}>
                        <div className="border rounded-xl shadow-lg my-[15px]">
                            <button
                                className={`flex justify-between w-full p-5 font-nuni font-bold text-left rounded-xl focus:outline-none ${openAccordion === 1 ? 'text-[#3661FC]' : 'text-main'
                                    }`}
                                onClick={() => toggleAccordion(1)}
                            >
                                Lorem ipsum dolor sit amet?
                                <span className="text-[#3661FC]">{openAccordion === 1 ? <FaMinus className='w-[23px] h-[23px]' /> : <FaPlus className='w-[23px] h-[23px]' />}</span>
                            </button>
                            {openAccordion === 1 && (
                                <div className="p-5 font-dmSans font-normal text-[16px] text-ptag leading-[26px]">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque unde odit ea iure, quae, veritatis deleniti porro voluptatibus cupiditate reprehenderit laboriosam suscipit repellat eius eligendi quos veniam! Ullam, sunt quo?
                                </div>
                            )}
                        </div>
                        <div className="border rounded-xl shadow-lg my-[15px]">
                            <button
                                className={`flex justify-between w-full p-5 font-nuni font-bold text-left rounded-xl focus:outline-none ${openAccordion === 2 ? 'text-[#3661FC]' : 'text-main'
                                    }`}
                                onClick={() => toggleAccordion(2)}
                            >
                                Lorem ipsum dolor sit amet?
                                <span className="text-blue-500">{openAccordion === 2 ? <FaMinus className='w-[23px] h-[23px]' /> : <FaPlus className='w-[23px] h-[23px]' />}</span>
                            </button>
                            {openAccordion === 2 && (
                                <div className="p-5 font-dmSans font-normal text-[16px] text-ptag leading-[26px]">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam laboriosam, officia quam itaque et, sed amet dolores veritatis tenetur eveniet ab saepe illum iure a.
                                </div>
                            )}
                        </div>
                        <div className="border rounded-xl shadow-lg my-[15px]">
                            <button
                                className={`flex justify-between w-full p-5 font-nuni font-bold text-left rounded-xl focus:outline-none ${openAccordion === 3 ? 'text-[#3661FC]' : 'text-main'
                                    }`}
                                onClick={() => toggleAccordion(3)}
                            >
                                Lorem ipsum dolor sit amet?
                                <span className="text-blue-500">{openAccordion === 3 ? <FaMinus className='w-[23px] h-[23px]' /> : <FaPlus className='w-[23px] h-[23px]' />}</span>
                            </button>
                            {openAccordion === 3 && (
                                <div className="p-5 font-dmSans font-normal text-[16px] text-ptag leading-[26px]">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi a facilis vel, ipsum similique omnis delectus quasi rem ut totam reiciendis, veniam aliquid laudantium. Voluptatem debitis sequi nam eius ex.
                                </div>
                            )}
                        </div>
                        <div className="border rounded-xl shadow-lg my-[15px]">
                            <button
                                className={`flex justify-between w-full p-5 font-nuni font-bold text-left rounded-xl focus:outline-none ${openAccordion === 4 ? 'text-[#3661FC]' : 'text-main'
                                    }`}
                                onClick={() => toggleAccordion(4)}
                            >
                                Lorem ipsum dolor sit amet?
                                <span className="text-blue-500">{openAccordion === 4 ? <FaMinus className='w-[23px] h-[23px]' /> : <FaPlus className='w-[23px] h-[23px]' />}</span>
                            </button>
                            {openAccordion === 4 && (
                                <div className="p-5 font-dmSans font-normal text-[16px] text-ptag leading-[26px]">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sunt distinctio similique perferendis magni architecto hic ipsum pariatur voluptate a suscipit, neque libero! Quod quaerat, reprehenderit eligendi aperiam cumque facere.
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
