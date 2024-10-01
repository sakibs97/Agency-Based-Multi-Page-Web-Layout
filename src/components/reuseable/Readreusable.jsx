

const Readreusable = ({ read }) => {
    return (
        <div className="relative inline-block p-[1px] rounded-full bg-gradient-to-r from-startC to-[#FFAA52] group">
            <button className='relative font-dmSans font-normal bg-white text-[18px] text-main group-hover:text-white leading-[30px] py-[15px] px-[33px] rounded-full z-10 duration-500'>
                <span className="relative z-20">{read}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-startC to-[#FFAA52] group-hover:animate-fadeOut opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full z-10"></div>
            </button>
        </div>
    )
}

export default Readreusable