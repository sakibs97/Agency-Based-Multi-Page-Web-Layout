import team from "../assets/team-member/team.png";
import hoverteam from "../assets/team-member/hoverteam.png";
import Slider from "react-slick";
import { BsPlusLg } from "react-icons/bs";

const PortfolioSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 1,
        //         },
        //     },
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //         },
        //     },
        // ],
    };

    return (
        <section className="py-12 bg-white">

            <h2 className="text-center font-nuni font-bold text-[32px] text-[#000000]">Our Impressive Portfolio</h2>
            <div className="mt-8">
                <Slider {...settings}>
                    <div className="mx-2">
                        <div className="relative group">
                            <img src={team} alt="" className="hover:-inset-0 " />
                            <div className="absolute -top-0 left-0 z-50">
                                <img src={hoverteam} alt="" className="rounded-b-xl relative rounded-t-[20px]" />
                                <div className="hidden group-hover:block">
                                    <div className="absolute -bottom-[115px] w-full bg-[#F4F4F4] rounded-b-3xl flex items-center -z-10 justify-between px-[50px] pt-[80px] pb-[28px]">
                                        <div className="">
                                            <h4 className="font-dmSans font-medium text-main text-[20px]">Monthly Design Magazine</h4>
                                            <p className="font-dmSans font-normal text-[16px] text-ptag">Print, Books</p>
                                        </div>
                                        <div className="bg-gradient-to-l from-[#FE651B] to-[#FFAA52] p-[13px] rounded-full">
                                            <BsPlusLg className="text-white w-[22px] h-[22px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="mx-2">
                        <img src={team} alt="" />

                    </div>
                    <div className="mx-2">
                        <img src={team} alt="" />

                    </div>
                    <div className="mx-2">
                        <img src={team} alt="" />

                    </div>

                    {/* <div className="relative bg-gray-300 rounded-lg shadow-lg p-6 group overflow-hidden h-[300px] hover:bg-gradient-to-r hover:from-orange-400 hover:to-yellow-400">
                            <div className="absolute inset-0 flex flex-col justify-center items-center transition-transform duration-500 transform group-hover:-translate-y-6">
                                <FaPlusCircle className="text-white text-4xl mb-4 transition-transform duration-500 transform group-hover:-translate-y-2" />
                                <h3 className="text-white font-bold text-lg">Monthly Design Magazine</h3>
                                <p className="text-white">Print, Books</p>
                            </div>
                        </div> */}

                </Slider>
            </div>
        </section>
    );
};

export default PortfolioSlider;
