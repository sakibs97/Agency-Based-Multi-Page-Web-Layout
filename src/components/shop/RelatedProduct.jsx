import image from "../../assets/shop/image.png";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import Slider from "react-slick";

const RelatedProduct = () => {

    function NextArrow(props) {
        const { onClick, currentSlide, slideCount, slidesToShow } = props;
        const isAtEnd = currentSlide >= slideCount - slidesToShow;

        return (
            <div
                className={`absolute right-0 top-[-102px] py-[24px] pr-[20px] pl-[21px] bg-gradient-to-l from-startC to-endC text-white rounded-full cursor-pointer ${isAtEnd ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}
                onClick={isAtEnd ? null : onClick}
            >
                <FaArrowRightLong className="w-[19px] h-[12px]" />
            </div>
        );
    }

    function PrevArrow(props) {
        const { onClick, currentSlide } = props;
        const isAtStart = currentSlide === 0;

        return (
            <div
                className={`absolute right-[80px] top-[-102px] py-[24px] px-[20px] bg-gradient-to-r from-startC to-endC text-white rounded-full cursor-pointer z-50 ${isAtStart ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}
                onClick={isAtStart ? null : onClick}
            >
                <FaArrowLeftLong className="w-[19px] h-[12px]" />
            </div>
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <section>
            <div className="container mb-28">
                <h5 className="font-dmSans font-normal text-[16px] text-[#3661FC] leading-[26px]">Products</h5>
                <h4 className="font-nuni font-bold text-[46px] leading-[56px] text-main">Related Products</h4>
                <div className="mt-[40px]">
                    <Slider {...settings}>
                        <div className="mx-[10px]">
                            <div className="bg-[#F4F4FF] p-[30px] rounded-2xl group mx-[10px]">
                                <div className="flex items-center justify-between pb-[30px]">
                                    <p className="font-dmSans font-normal text-[12px] text-[#fff] leading-[10px] py-[5px] px-[9px] bg-[#3661FC] rounded-full">New</p>
                                    <div className="">
                                        <h6 className="font-dmSans font-normal text-[14px] text-[#6B6161] leading-[14px] text-end">Reviews (18)</h6>
                                        <div className="flex items-center">
                                            <FaStar className='mr-[4px] text-[#FCC013]' />
                                            <FaStar className='mr-[4px] text-[#FCC013]' />
                                            <FaStar className='mr-[4px] text-[#FCC013]' />
                                            <FaStar className='mr-[4px] text-[#FCC013]' />
                                            <FaStar className='text-[#FCC013]' />
                                        </div>
                                    </div>
                                </div>
                                <Link to='/shop-details'>
                                    <img src={image} alt="" className="mx-auto" />
                                    <div className="mt-[30px]">
                                        <h5 to='/shop-details' className="font-dmSans font-medium text-[16px] text-main leading-[26px] group-hover:text-[#3661FC]">Apple iPhone 14 Pro Max 128 GB Deep Purple (eSIM)</h5>
                                        <p className="font-dmSans font-medium text-[20px] text-main pt-[12px] pb-[25px]">$2000</p>
                                    </div>
                                </Link>
                                <Link to='/2'>
                                    <button
                                        className="flex items-center py-[12px] bg-[#fff] w-full rounded-full justify-center font-pop font-medium text-[18px] text-[#6B6161] leading-[26px] group-hover:text-[#3661FC]">
                                        <IoBagHandleOutline className="w-[16px] h-[17.45px] mr-[10px]" />
                                        Add to Cart
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="mx-[10px]">
                            <div className="bg-[#F4F4FF] p-[30px] rounded-2xl group mx-[10px]">
                                <div className="flex items-center justify-between pb-[30px]">
                                    <p className="font-dmSans font-normal text-[12px] text-[#fff] leading-[10px] py-[5px] px-[9px] bg-[#3661FC] rounded-full">New</p>
                                    <div className="">
                                        <h6 className="font-dmSans font-normal text-[14px] text-[#6B6161] leading-[14px] text-end">Reviews (18)</h6>
                                        <div className="flex items-center">
                                            <FaStar className='mr-[4px] text-[#FCC013]' />
                                            <FaStar className='mr-[4px] text-[#FCC013]' />
                                            <FaStar className='mr-[4px] text-[#FCC013]' />
                                            <FaStar className='mr-[4px] text-[#FCC013]' />
                                            <FaStar className='text-[#FCC013]' />
                                        </div>
                                    </div>
                                </div>
                                <Link to='/shop-details'>
                                    <img src={image} alt="" className="mx-auto" />
                                    <div className="mt-[30px]">
                                        <h5 to='/shop-details' className="font-dmSans font-medium text-[16px] text-main leading-[26px] group-hover:text-[#3661FC]">Apple iPhone 14 Pro Max 128 GB Deep Purple (eSIM)</h5>
                                        <p className="font-dmSans font-medium text-[20px] text-main pt-[12px] pb-[25px]">$2000</p>
                                    </div>
                                </Link>
                                <Link to='/2'>
                                    <button
                                        className="flex items-center py-[12px] bg-[#fff] w-full rounded-full justify-center font-pop font-medium text-[18px] text-[#6B6161] leading-[26px] group-hover:text-[#3661FC]">
                                        <IoBagHandleOutline className="w-[16px] h-[17.45px] mr-[10px]" />
                                        Add to Cart
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="mx-[10px]">
                            <div className="bg-[#F4F4FF] p-[30px] rounded-2xl group mx-[10px]">
                                <div className="flex items-center justify-between pb-[30px]">
                                    <p className="font-dmSans font-normal text-[12px] text-[#fff] leading-[10px] py-[5px] px-[9px] bg-[#3661FC] rounded-full">New</p>
                                    <div className="">
                                        <h6 className="font-dmSans font-normal text-[14px] text-[#6B6161] leading-[14px] text-end">Reviews (18)</h6>
                                        <div className="flex items-center">
                                            <FaStar className='mr-[4px] text-[#FCC013]' />
                                            <FaStar className='mr-[4px] text-[#FCC013]' />
                                            <FaStar className='mr-[4px] text-[#FCC013]' />
                                            <FaStar className='mr-[4px] text-[#FCC013]' />
                                            <FaStar className='text-[#FCC013]' />
                                        </div>
                                    </div>
                                </div>
                                <Link to='/shop-details'>
                                    <img src={image} alt="" className="mx-auto" />
                                    <div className="mt-[30px]">
                                        <h5 to='/shop-details' className="font-dmSans font-medium text-[16px] text-main leading-[26px] group-hover:text-[#3661FC]">Apple iPhone 14 Pro Max 128 GB Deep Purple (eSIM)</h5>
                                        <p className="font-dmSans font-medium text-[20px] text-main pt-[12px] pb-[25px]">$2000</p>
                                    </div>
                                </Link>
                                <Link to='/2'>
                                    <button
                                        className="flex items-center py-[12px] bg-[#fff] w-full rounded-full justify-center font-pop font-medium text-[18px] text-[#6B6161] leading-[26px] group-hover:text-[#3661FC]">
                                        <IoBagHandleOutline className="w-[16px] h-[17.45px] mr-[10px]" />
                                        Add to Cart
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="mx-[10px]">
                            <div className="bg-[#F4F4FF] p-[30px] rounded-2xl group mx-[10px]">
                                <div className="flex items-center justify-between pb-[30px]">
                                    <p className="font-dmSans font-normal text-[12px] text-[#fff] leading-[10px] py-[5px] px-[9px] bg-[#3661FC] rounded-full">New</p>
                                    <div className="">
                                        <h6 className="font-dmSans font-normal text-[14px] text-[#6B6161] leading-[14px] text-end">Reviews (18)</h6>
                                        <div className="flex items-center">
                                            <FaStar className='mr-[4px] text-[#FCC013]' />
                                            <FaStar className='mr-[4px] text-[#FCC013]' />
                                            <FaStar className='mr-[4px] text-[#FCC013]' />
                                            <FaStar className='mr-[4px] text-[#FCC013]' />
                                            <FaStar className='text-[#FCC013]' />
                                        </div>
                                    </div>
                                </div>
                                <Link to='/shop-details'>
                                    <img src={image} alt="" className="mx-auto" />
                                    <div className="mt-[30px]">
                                        <h5 to='/shop-details' className="font-dmSans font-medium text-[16px] text-main leading-[26px] group-hover:text-[#3661FC]">Apple iPhone 14 Pro Max 128 GB Deep Purple (eSIM)</h5>
                                        <p className="font-dmSans font-medium text-[20px] text-main pt-[12px] pb-[25px]">$2000</p>
                                    </div>
                                </Link>
                                <Link to='/2'>
                                    <button
                                        className="flex items-center py-[12px] bg-[#fff] w-full rounded-full justify-center font-pop font-medium text-[18px] text-[#6B6161] leading-[26px] group-hover:text-[#3661FC]">
                                        <IoBagHandleOutline className="w-[16px] h-[17.45px] mr-[10px]" />
                                        Add to Cart
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="mx-[10px]">
                            <div className="bg-[#F4F4FF] p-[30px] rounded-2xl group mx-[10px]">
                                <div className="flex items-center justify-between pb-[30px]">
                                    <p className="font-dmSans font-normal text-[12px] text-[#fff] leading-[10px] py-[5px] px-[9px] bg-[#3661FC] rounded-full">New</p>
                                    <div className="">
                                        <h6 className="font-dmSans font-normal text-[14px] text-[#6B6161] leading-[14px] text-end">Reviews (18)</h6>
                                        <div className="flex items-center">
                                            <FaStar className='mr-[4px] text-[#FCC013]' />
                                            <FaStar className='mr-[4px] text-[#FCC013]' />
                                            <FaStar className='mr-[4px] text-[#FCC013]' />
                                            <FaStar className='mr-[4px] text-[#FCC013]' />
                                            <FaStar className='text-[#FCC013]' />
                                        </div>
                                    </div>
                                </div>
                                <Link to='/shop-details'>
                                    <img src={image} alt="" className="mx-auto" />
                                    <div className="mt-[30px]">
                                        <h5 to='/shop-details' className="font-dmSans font-medium text-[16px] text-main leading-[26px] group-hover:text-[#3661FC]">Apple iPhone 14 Pro Max 128 GB Deep Purple (eSIM)</h5>
                                        <p className="font-dmSans font-medium text-[20px] text-main pt-[12px] pb-[25px]">$2000</p>
                                    </div>
                                </Link>
                                <Link to='/2'>
                                    <button
                                        className="flex items-center py-[12px] bg-[#fff] w-full rounded-full justify-center font-pop font-medium text-[18px] text-[#6B6161] leading-[26px] group-hover:text-[#3661FC]">
                                        <IoBagHandleOutline className="w-[16px] h-[17.45px] mr-[10px]" />
                                        Add to Cart
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default RelatedProduct