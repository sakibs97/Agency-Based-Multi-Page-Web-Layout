import { Link } from "react-router-dom"

const PortfolioDetailBan = () => {
    return (
        <section>
            <div className='bg-[url("/src/assets/team-member/profolio/portfolio.jpg")] h-[550px] bg-cover bg-no-repeat bg-center relative after:absolute after:top-0 before:left-0 after:bg-[#000000] after:bg-opacity-30 after:h-[550px] after:w-full after:z-5'>
                <div className='after:absolute after:bg-[url("/src/assets/Services/banner.png")] after:bg-cover after:bg-no-repeat after:bg-center after:top-0 after:left-0 after:w-full after:h-[550px] after:z-10'>
                    <div className="absolute top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 text-center">
                        <h2 className='font-nuni font-bold text-[46px] text-[#fff] leading-[41px]'>Portfolio Details</h2>
                        <div className='font-dmSans font-normal text-[16px] text-[#fff] leading-[40px]'>
                            <Link to='/'>
                                <span className="hover:bg-gradient-to-r from-startC to-endC bg-clip-text hover:text-transparent duration-300 pr-[8px]">Home</span>
                            </Link>
                            -
                            <Link to='/portfolio'>
                                <span className="hover:bg-gradient-to-r from-startC to-endC bg-clip-text hover:text-transparent px-[8px]">Portfolio</span>
                            </Link>
                            -
                            <span className="bg-gradient-to-r from-startC to-endC bg-clip-text text-transparent pl-[8px]">Portfolio Details</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PortfolioDetailBan