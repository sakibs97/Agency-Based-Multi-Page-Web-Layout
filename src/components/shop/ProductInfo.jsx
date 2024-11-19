import two from "../../assets/shop/details/two.png";
import three from "../../assets/shop/details/three.png";
import four from "../../assets/shop/details/four.png";
import five from "../../assets/shop/details/five.png";
import reviews from "../../assets/shop/details/reviews.png";
import Slider from "react-slick";
import { TbSlash } from "react-icons/tb";
import { FaStar, FaRegHeart, FaFacebookF, FaPinterest, FaTwitter } from "react-icons/fa";
import { IoBagHandleOutline, IoFlagSharp } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";
import { useState } from "react";
import { act } from "react";

const ProductInfo = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrow: false,
        autoplay: false,
        slidesToShow: 1,
        appendDots: dots => (
            <div
                style={{
                    position: "absolute",
                    left: "10%",
                    bottom: "50%",
                }}
            >
                <ul style={{ margin: "0px" }}>{dots}</ul>
            </div>
        ),
        customPaging: (i) => (
            <div className="">
                <img src={[two, three, four, five][i]} alt={`slide-${i + 1}`} />
            </div>
        ),
    };
    const reviewData = [
        {
            id: 1,
            name: 'Abubokkor Siddik',
            date: 'Jan 14, 2022',
            discription: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsium has been the industry&apos;s standards dummy',
        },
        {
            id: 2,
            name: 'Aliyarbay',
            date: 'Nov 16, 2022',
            discription: 'Very nice product. Nice picture quality. And gps is great',
        },
        {
            id: 3,
            name: 'Aliyarbay',
            date: 'Sep 16, 2023',
            discription: 'I have this camera from the beginning of summer and I feel happy with it .Maybe the bundles is need to be price oriented,but everything is OK.',
        },
        {
            id: 4,
            name: 'Aliyarbay',
            date: 'Oct 19, 2024',
            discription: 'Real authentic genuine quality however it fit me like an XL size when In fact Im L. Beware',
        },
    ];

    let [activeTab, setActiveTab] = useState('description');

    return (
        <section className="my-28">
            <div className="container">
                <div className="grid grid-cols-2 gap-20">
                    {/* -- Product details Image part -- */}
                    <Slider {...settings}>
                        <div className="">
                            <img src={two} alt="" className="w-[200px] h-[300px]" />
                        </div>
                        <div className="">
                            <img src={three} alt="" className="w-[200px] h-[300px]" />
                        </div>
                        <div className="">
                            <img src={four} alt="" className="w-[200px] h-[300px]" />
                        </div>
                        <div className="">
                            <img src={five} alt="" className="w-[200px] h-[300px]" />
                        </div>
                    </Slider>
                    {/* -- Product details Text part -- */}
                    <div className="">
                        <h3 className="font-dmSans font-medium text-[30px] text-main leading-[40px]">Apple iPhone 14 Pro Max 128 GB Deep Purple</h3>
                        <div className="flex items-center font-dmSans font-normal text-[14] leading-[14px] my-[20px]">
                            <span className="text-[#3661FC]">iPhone</span>
                            <TbSlash className="text-[#D9D9D9] mx-[13px]" />
                            <span className="text-[#6B6161]">Sold 22 Products</span>
                            <TbSlash className="text-[#D9D9D9] mx-[13px]" />
                            <div className="flex items-center">
                                <FaStar className='mr-[4px] text-[#FCC013]' />
                                <FaStar className='mr-[4px] text-[#FCC013]' />
                                <FaStar className='mr-[4px] text-[#FCC013]' />
                                <FaStar className='mr-[4px] text-[#FCC013]' />
                                <FaStar className='text-[#FCC013]' />
                                <span className="text-[#6B6161] pl-[10px]">6 Reviews</span>
                            </div>
                        </div>
                        <div className="flex items-center my-[15px]">
                            <span className="font-dmSans font-medium text-[20px] leading-[24px] text-[#6B6161] line-through">$2000</span>
                            <span className="font-dmSans font-medium text-[20px] leading-[24px] text-main pl-[15px]">$1800</span>
                        </div>
                        <h6 className="font-dmSans font-normal text-[16px] text-[#0CA640] leading-[16px]">45 In stock</h6>
                        <p className="font-dmSans font-normal text-[16px] text-ptag leading-[26px] py-[30px]">
                            There are many variations of passages of Lorem Ipsum available, but our athe majority have suffered alteration in some form, by injected humour, or randomised our words which don&apos;t look even slightly believable.
                        </p>
                        <div className="flex items-center">
                            <div className="bg-gradient-to-r from-startC to-endC p-[1px] rounded-full">
                                <div className="bg-[#fff] rounded-full font-dmSans font-medium text-[18px] leading-[18px]">
                                    <button className="px-4 py-2 text-ptag hover:text-main">-</button>
                                    <span className="text-main">1</span>
                                    <button className="px-4 py-2 text-ptag hover:text-main">+</button>
                                </div>
                            </div>
                            <button className="py-[12px] bg-gradient-to-r from-startC to-endC rounded-full w-[370px] ml-[30px] flex items-center justify-center font-dmSans font-medium text-[18px] leading-[18px] text-[#fff]">
                                <IoBagHandleOutline className="w-[16px] h-[17.45px] mr-[10px]" />
                                <span>Add to Cart</span>
                            </button>
                        </div>
                        <div className="flex items-center pt-[27px] pb-[22px] border-b-[2px] border-[#E5EBEF]">
                            <button className="flex items-center">
                                <FaRegHeart className="w-[18px] h-[17px]" />
                                <span className="font-dmSans font-normal text-[16px] text-ptag leading-[18px] pl-[10px]">Add to Wishlist</span>
                            </button>
                            <button className="flex items-center pl-[30px]">
                                <TfiReload className="" />
                                <span className="font-dmSans font-normal text-[16px] text-ptag leading-[18px] pl-[10px]">Compare</span>
                            </button>
                        </div>
                        <div className="font-dmSans text-[16px] leading-[16px] py-[20px]">
                            <div className="flex items-center">
                                <h6 className="font-medium text-main pr-[5px]">SKU :</h6>
                                <span className="font-normal text-ptag"> KE-91039</span>
                            </div>
                            <div className="flex items-center py-[18px]">
                                <h6 className="font-medium text-main pr-[5px]">Category :</h6>
                                <span className="font-normal text-ptag"> Mobile</span>
                            </div>
                            <div className="flex items-center cursor-pointer font-normal text-[#F03333]">
                                <IoFlagSharp />
                                <span className="pl-[10px]">Report This Item</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <span className="font-dmSans font-medium text-[16px] text-main leading-[24px]">Share :</span>
                            <FaFacebookF className="text-[#3E75B2] mx-[10px]" />
                            <FaPinterest className="text-[#E12828] mx-[10px]" />
                            <FaTwitter className="text-[#3FD1FF] mx-[10px]" />
                        </div>
                    </div>
                </div>
                <div className="border-[2px] border-[#F4F4FF] py-[33px] px-[40px] rounded-3xl mt-20">
                    <div className="flex space-x-10 items-center relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#F4F4FF] after:-z-10" id="default-tab" role="tablist">
                        <h4
                            className={`font-dmSans font-medium text-[20px] leading-[30px] cursor-pointer pb-[5px] ${activeTab === 'description' ? 'text-[#3661FC] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#3661FC]' : 'text-[#6A6C73]'}`}
                            id="description"
                            onClick={() => setActiveTab('description')}
                            role="tab"
                            aria-controls="description"
                            aria-selected={activeTab === 'description'}
                        >
                            Description
                        </h4>
                        <h4
                            className={`font-dmSans font-medium text-[20px] leading-[30px] cursor-pointer pb-[5px] ${activeTab === 'information' ? 'text-[#3661FC] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#3661FC]' : 'text-[#6A6C73]'}`}
                            id="information"
                            onClick={() => setActiveTab('information')}
                            role="tab"
                            aria-controls="information"
                            aria-selected={activeTab === 'information'}
                        >
                            Additional information
                        </h4>
                        <h4
                            className={`font-dmSans font-medium text-[20px] leading-[30px] cursor-pointer pb-[5px] ${activeTab === 'reviews' ? 'text-[#3661FC] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#3661FC]' : 'text-[#6A6C73]'}`}
                            id="reviews"
                            onClick={() => setActiveTab('reviews')}
                            role="tab"
                            aria-controls="reviews"
                            aria-selected={activeTab === 'reviews'}
                        >
                            Reviews 04
                        </h4>
                    </div>
                    <div className="mt-[40px]">
                        <div className={`font-dmSans font-normal text-[16px] text-ptag leading-[26px] ${activeTab === 'description' ? 'block' : 'hidden'}`}>
                            <p>
                                Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est impexrdiet, a maleuada sem rutrum. Sed sed vehicula ipsum dapibusetqua metus urna, eu luctus velit placerat ut. Cras at porttitor lectus. Ut dapibus aliquam nibh, in imperdiet libero tncidunt sit amet. Morbxi sodales femaentum our as nibh nice facilisis.que auctor varius lectus, lacinia rhoncus velit posuere vel. Cras condimentum tincidunt urna, sed vehicula ipsum
                            </p>
                            <ul className="py-[20px] pl-[10px]">
                                <li className="list-disc pl-[5px]">Aenean auctor sem ac ex efficitur</li>
                                <li className="list-disc pl-[5px]">Non mattis odio bibendum</li>
                                <li className="list-disc pl-[5px]">Sed vitae enim at tortor finibus</li>
                                <li className="list-disc pl-[5px]"> Integer facilisis eleifend vehicula</li>
                                <li className="list-disc pl-[5px]">In hac habitasse platea dictumst</li>
                            </ul>
                            <p>
                                Sed molestie orci sem, at semper est molestie ac. Suspendisse cursus feugiat erat, eu posuere massa. Nullam posuere nibh non eros loboxrts Ut porta et ex maximus malesuada. temp
                                endisse at dui euismod, rhoncus eros non, imperdiet ipsum. Vestibulum vehicula vel turpis et vestibulum. Ut porta et ex maximus malesuada.
                            </p>
                        </div>
                        <div className={`relative overflow-x-auto ${activeTab === 'information' ? 'block' : 'hidden'}`}>
                            <table className="w-full font-dmSans font-normal text-[16px] text-ptag leading-[26px]">
                                <tbody>
                                    <tr className="border-y">
                                        <td className="py-[10px] text-start border-r text-main font-medium w-[12%]">Screen</td>
                                        <td className="pb-[10px] pl-[40px]">6.7&quot; LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits (typ), 2000 nits (HBM)</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-[10px] text-start border-r text-main font-medium">Memory</th>
                                        <td className="py-[10px] pl-[40px]">RAM 6 GB, ROM 256 GB</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-[10px] text-start border-r text-main font-medium">weight</th>
                                        <td className="py-[10px] pl-[40px]">240 gm</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-[10px] text-start border-r text-main font-medium">Processor</th>
                                        <td className="py-[10px] pl-[40px]">6 core Apple A16 Bionic (4 nm) Hexa-core (2x3.46 GHz Everest + 4x2.02 GHz Sawtooth)</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-[10px] text-start border-r text-main font-medium">GPU</th>
                                        <td className="py-[10px] pl-[40px]">Apple GPU (5-core graphics)</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-[10px] text-start border-r text-main font-medium">Camera</th>
                                        <td className="py-[10px] pl-[40px]">48 MP, f/1.8, 24mm (wide), 1/1.28&quot;, 1.22m, 12 MP, f/2.8, 77mm (telephoto), 1/3.5&quot;, PDAF</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-[10px] text-start border-r text-main font-medium">Battery</th>
                                        <td className="py-[10px] pl-[40px]">4323mAh Li-ion (non-removable)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={`${activeTab === 'reviews' ? 'block' : 'hidden'}`}>
                            {reviewData.map((item, i) => (
                                <>
                                    <div key={i} className="border pt-[33px] pb-[32px] pr-[30px] pl-[35px] rounded flex items-center my-[15px]">
                                        <div className="w-[10%]">
                                            <img src={reviews} alt="" />
                                        </div>
                                        <div className="w-full">
                                            <div className="flex justify-between">
                                                <div className="">
                                                    <h6 className="font-dmSans font-medium text-[16px] text-main leading-[24px]">{item.name}</h6>
                                                    <span className="font-dmSans font-normal text-[13px] text-ptag leading-[24px]">{item.date}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <FaStar className='mr-[4px] text-[#FCC013]' />
                                                    <FaStar className='mr-[4px] text-[#FCC013]' />
                                                    <FaStar className='mr-[4px] text-[#FCC013]' />
                                                    <FaStar className='mr-[4px] text-[#FCC013]' />
                                                    <FaStar className='text-[#FCC013]' />
                                                </div>
                                            </div>
                                            <p className="font-dmSans font-normal text-[16px] text-ptag leading-[24px] pt-[18px]">
                                                {item.discription}
                                            </p>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={`pt-[33px] px-[40px] pb-[40px] border-[2px] border-[#F4F4FF] my-[60px] rounded-3xl ${activeTab === 'reviews' ? 'block' : 'hidden'}`}>
                    <h6 className="font-dmSans font-medium text-[20px] text-main leading-[30px]">Write Your Reviews</h6>
                    <div className="flex items-center py-[27px] ">
                        <FaStar className='mr-[4px] text-[#C1C1C1]' />
                        <FaStar className='mr-[4px] text-[#C1C1C1]' />
                        <FaStar className='mr-[4px] text-[#C1C1C1]' />
                        <FaStar className='mr-[4px] text-[#C1C1C1]' />
                        <FaStar className='text-[#C1C1C1]' />
                        <span className="font-dmSans font-normal text-[13px] text-[#C1C1C1] leading-[24px] pl-[10px]">(0.0)</span>
                    </div>
                    <div className="grid grid-cols-2 gap-[20px]">
                        <input type="text" placeholder="Name*" className="py-[13px] px-[20px] border rounded-full font-dmSans font-normal text-[13px] leading-[24px] text-main" />
                        <input type="text" placeholder="Phone Number*" className="py-[13px] px-[20px] border rounded-full font-dmSans font-normal text-[13px] leading-[24px] text-main" />
                    </div>
                    <input type="text" placeholder="Email*" className="py-[13px] px-[20px] border rounded-full w-full my-[20px] font-dmSans font-normal text-[13px] leading-[24px] text-main" />
                    <textarea
                        className="border py-5 px-6 rounded-3xl font-dmSans font-normal text-[13px] leading-[24px] text-main w-full min-h-[208px]"
                        placeholder="Your Message">
                    </textarea>
                    <button className="font-dmSans font-normal text-[18px] text-[#fff] leading-[18px] text-center py-5 px-[33px] bg-gradient-to-r from-[#FFAA52] to-endC via-[#FE651B] rounded-full mt-[30px] relative after:absolute after:w-[50%] after:h-full after:top-0 after:left-0 after:bg-[#00000015] after:rounded-l-full  hover:after:w-0 after:duration-500 overflow-hidden before:absolute before:w-[50%] before:h-full before:top-0 before:right-0 before:bg-[#00000015] before:rounded-r-full hover:before:w-0 before:duration-500"
                    >Submit Review</button>
                </div>
            </div>
        </section>
    );
};

export default ProductInfo;