import two from "../../assets/shop/details/two.png";
import three from "../../assets/shop/details/three.png";
import four from "../../assets/shop/details/four.png";
import five from "../../assets/shop/details/five.png";
import Slider from "react-slick";
import { TbSlash } from "react-icons/tb";
import { FaStar, FaRegHeart, FaFacebookF, FaPinterest, FaTwitter } from "react-icons/fa";
import { IoBagHandleOutline, IoFlagSharp } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";

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
            </div>
        </section>
    );
};

export default ProductInfo;