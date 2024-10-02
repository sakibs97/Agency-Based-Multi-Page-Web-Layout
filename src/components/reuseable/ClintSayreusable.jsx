import { FaQuoteRight } from "react-icons/fa";

const ClintSayreusable = ({ image, post, name, discription }) => {
    return (
        <div className="group">
            <div className="p-[3px] bg-gradient-to-r from-startC to-endC rounded-full h-[60px] w-[60px] flex items-center justify-center cursor-pointer">
                <div className="relative">
                    <img src={image} alt="" className="h-[54px] w-[54px] rounded-full" />
                </div>
            </div>
            <div className="absolute left-[50%] -translate-x-1/2 p-[2px] hidden group-hover:block bg-gradient-to-r from-startC to-endC rounded-3xl mt-[10px] z-20">
                <div className="bg-white w-[420px] px-[23px] pt-[23px] pb-[16px] rounded-3xl">
                    <div className="flex justify-between ">
                        <img src={image} alt="" width={105} className="rounded-ss-3xl h-[79px]" />
                        <div className="relative after:absolute after:h-[3px] after:w-full after:bg-[#D7DFFE] after:bottom-0">
                            <h4 className="font-nuni font-bold text-[25px] text-main">{name}</h4>
                            <p className="font-dmSans font-normal text-[16px] text-ptag leading-[26px]">{post}</p>
                        </div>
                        <FaQuoteRight className="w-[58px] h-[50px] text-[#3661FC] opacity-20" />
                    </div>
                    <p className="font-dmSans font-normal text-[16px] text-ptag leading-[26px] pt-[30px]">
                        {discription}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ClintSayreusable