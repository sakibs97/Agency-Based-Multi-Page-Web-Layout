/* eslint-disable react/no-unescaped-entities */
import brand from "../assets/brands/brands.png"

const Brands = () => {
    return (
        <section>
            <div className="container flex justify-between items-center my-20">
                <div className="w-[49%]">
                    <h6 className="font-dmSans font-medium text-[20px] text-transparent bg-gradient-to-r from-startC to-endC bg-clip-text">Bringing Action To Brands</h6>
                    <h2 className="font-nuni font-bold text-[46px] text-main leading-[56px]">
                        Business Indices, Visitor Traffic Latest Analytic Tools
                    </h2>
                    <p className="font-dmSans font-normal text-[16px] text-ptag leading-[26px] pt-[27px] pb-[40px]">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised word which don't look even sligh believable.
                    </p>
                    <div className="w-[85%] py-[33px] pl-[40px] relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-25 after:-z-10 after:bg-gradient-to-r after:from-startC after:to-endC after:rounded-[40px]">
                        <h4 className="font-dmSans font-medium text-[18px] text-main">
                            Get Started With a Dynamic Web Optimization Campaign.
                        </h4>
                        <div className="flex items-center pt-6">
                            <div className="">
                                <h5 className="font-nuni font-bold text-[25px] text-[#3661FC]">10.95%</h5>
                                <p className="font-dmSans font-normal text-[16px] text-ptag">Increase In Monthly</p>
                            </div>
                            <div className="ml-[70px]">
                                <h5 className="font-nuni font-bold text-[25px] text-[#3661FC]">6.50%</h5>
                                <p className="font-dmSans font-normal text-[16px] text-ptag">Decrease In Yearly</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src={brand} alt="brand" />
                </div>
            </div>
        </section>
    )
}

export default Brands