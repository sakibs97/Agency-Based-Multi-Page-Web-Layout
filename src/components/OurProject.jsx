import growth from "../assets/team-member/growth.jpg";
import customer from "../assets/team-member/customer.jpg";
import marketing from "../assets/team-member/marketing.jpg";
import startup from "../assets/team-member/startup.jpg";
import Slider from "react-slick";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="absolute right-[200px] bottom-[50%] translate-y-[50%] py-[24px] px-[20px] bg-white rounded-full cursor-pointer"
            onClick={onClick}
        >
            <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.7817 6.78853C15.5779 6.78853 15.4192 6.78853 15.2605 6.78853C10.5895 6.78853 5.91844 6.78853 1.24742 6.78853C0.432927 6.78853 -0.0133895 6.49936 0.000306117 5.98334C0.0148074 5.47851 0.444206 5.20895 1.24258 5.20895C5.9136 5.20895 10.5846 5.20895 15.2556 5.20895C15.4152 5.20895 15.5747 5.20895 15.7535 5.20895C15.7527 5.03251 15.6077 4.96809 15.5126 4.88477C14.2534 3.7855 12.9886 2.68974 11.7286 1.59117C11.5868 1.46794 11.4442 1.34051 11.3339 1.19628C11.0906 0.8777 11.1421 0.496808 11.4418 0.233544C11.7431 -0.0311196 12.2265 -0.0787311 12.5874 0.13132C12.7091 0.202037 12.8146 0.295159 12.9185 0.385481C14.7892 2.00987 16.659 3.63427 18.5281 5.26006C19.1597 5.80969 19.1573 6.19129 18.5208 6.74512C16.6518 8.37091 14.7827 9.99601 12.9105 11.619C12.7783 11.7331 12.6357 11.8459 12.4762 11.9264C12.1169 12.1063 11.7697 12.0398 11.4716 11.8143C11.1671 11.584 11.097 11.2878 11.2323 10.9559C11.3113 10.762 11.4765 10.6241 11.6384 10.484C12.9201 9.37076 14.2019 8.25749 15.4812 7.14212C15.5819 7.05249 15.7116 6.98038 15.7817 6.78853Z" fill="url(#paint0_linear_58_84)" />
                <defs>
                    <linearGradient id="paint0_linear_58_84" x1="-0.00469221" y1="6.00822" x2="19.0107" y2="6.00822" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FE651B" />
                        <stop offset="1" stopColor="#FFAA52" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="absolute left-[200px] bottom-[50%] translate-y-[50%] py-[24px] px-[20px] bg-white rounded-full cursor-pointer z-50 rotate-180"
            onClick={onClick}
        >
            <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.7817 6.78853C15.5779 6.78853 15.4192 6.78853 15.2605 6.78853C10.5895 6.78853 5.91844 6.78853 1.24742 6.78853C0.432927 6.78853 -0.0133895 6.49936 0.000306117 5.98334C0.0148074 5.47851 0.444206 5.20895 1.24258 5.20895C5.9136 5.20895 10.5846 5.20895 15.2556 5.20895C15.4152 5.20895 15.5747 5.20895 15.7535 5.20895C15.7527 5.03251 15.6077 4.96809 15.5126 4.88477C14.2534 3.7855 12.9886 2.68974 11.7286 1.59117C11.5868 1.46794 11.4442 1.34051 11.3339 1.19628C11.0906 0.8777 11.1421 0.496808 11.4418 0.233544C11.7431 -0.0311196 12.2265 -0.0787311 12.5874 0.13132C12.7091 0.202037 12.8146 0.295159 12.9185 0.385481C14.7892 2.00987 16.659 3.63427 18.5281 5.26006C19.1597 5.80969 19.1573 6.19129 18.5208 6.74512C16.6518 8.37091 14.7827 9.99601 12.9105 11.619C12.7783 11.7331 12.6357 11.8459 12.4762 11.9264C12.1169 12.1063 11.7697 12.0398 11.4716 11.8143C11.1671 11.584 11.097 11.2878 11.2323 10.9559C11.3113 10.762 11.4765 10.6241 11.6384 10.484C12.9201 9.37076 14.2019 8.25749 15.4812 7.14212C15.5819 7.05249 15.7116 6.98038 15.7817 6.78853Z" fill="url(#paint0_linear_58_84)" />
                <defs>
                    <linearGradient id="paint0_linear_58_84" x1="-0.00469221" y1="6.00822" x2="19.0107" y2="6.00822" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FE651B" />
                        <stop offset="1" stopColor="#FFAA52" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}

const OurProject = () => {

    let projects = [
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
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <section className="py-12 bg-white">
            <div className="text-center">
                <p className="font-dmSans font-medium text-[20px] text-transparent bg-gradient-to-r from-startC to-endC bg-clip-text">Our Portfolio</p>
                <h2 className="text-center font-nuni font-bold text-[32px] text-[#000000]">Our Impressive Portfolio</h2>
            </div>
            <div className="mt-8">
                <Slider {...settings}>
                    {projects.map((item, index) => (
                        <>
                            <div key={index} className="relative group cursor-pointer mx-2 ">
                                <img src={item.img} alt="" className="group-hover:h-[350px] group-hover:w-[464px] rounded group-hover:rounded-b-3xl group-hover:z-50 duration-500 ease-in-out" />
                                <div className="absolute min-w-[464px] left-0 top-[330px] bg-[#F4F4F4] rounded-b-3xl flex items-center justify-between px-[50px] pt-[50px] pb-[28px] -z-10">
                                    <div className="">
                                        <h4 className="font-dmSans font-medium text-main text-[20px]">{item.title}</h4>
                                        <p className="font-dmSans font-normal text-[16px] text-ptag">{item.post}</p>
                                    </div>
                                    <div className="bg-gradient-to-l from-startC to-endC p-[13px] rounded-full">
                                        <BsPlusLg className="text-white w-[22px] h-[22px]" />
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </Slider>
            </div>
            <div className="text-center mt-8">
                <Link to='/portfolio'>
                    <button className="py-[15px] px-[33px] bg-gradient-to-r from-startC to-endC rounded-full font-dmSans font-normal text-[18px] text-white leading-[30px]">View More Projects</button>
                </Link>
            </div>
        </section>
    )
}

export default OurProject