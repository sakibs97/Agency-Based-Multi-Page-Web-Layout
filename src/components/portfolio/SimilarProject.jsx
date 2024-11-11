/* eslint-disable react/prop-types */
import Slider from "react-slick";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import growth from "../../assets/team-member/growth.jpg";
import customer from "../../assets/team-member/customer.jpg";
import marketing from "../../assets/team-member/marketing.jpg";
import startup from "../../assets/team-member/startup.jpg";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

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



const SimilarProject = () => {

    let similarProjects = [
        {
            id: 1,
            img: growth,
            title: 'Corporate Startup Agency',
            post: 'Roadmap, Growth',
            link: '/'
        },
        {
            id: 2,
            img: customer,
            title: 'Monthly Design Magazine',
            post: 'Print, Books',
            link: '/'
        },
        {
            id: 3,
            img: startup,
            title: 'Agency Growth Check',
            post: 'Marketing, Growth',
            link: '/'
        },
        {
            id: 4,
            img: marketing,
            title: 'Customer Product Analytic',
            post: 'Analytics, Growth',
            link: '/'
        },
    ];


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <section className="mb-28">
            <div className="container relative">
                <h2 className="font-nuni font-bold text-[46px] text-main leading-[56px] mb-[45px]">Our Similar Projects</h2>
                <Slider {...settings}>
                    {similarProjects.map((item, index) => (
                        <>
                            <div key={index} className="relative group cursor-pointer mx-[10px] mt-[20px]">
                                <Link to={item.link}>
                                    <img src={item.img} alt="" className="group-hover:h-[340px] group-hover:w-[464px] rounded group-hover:rounded-b-3xl group-hover:z-50 duration-500 ease-in-out" />
                                    <div className="hidden group-hover:block">
                                        <div className="absolute left-0 top-[300px] w-full bg-[#F4F4F4] rounded-b-3xl flex items-center justify-between px-[50px] pt-[50px] pb-[28px] -z-10">
                                            <div className="">
                                                <h4 className="font-dmSans font-medium text-main text-[20px]">{item.title}</h4>
                                                <p className="font-dmSans font-normal text-[16px] text-ptag">{item.post}</p>
                                            </div>
                                            <div className="bg-gradient-to-l from-startC to-endC p-[13px] rounded-full">
                                                <BsPlusLg className="text-white w-[22px] h-[22px]" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default SimilarProject