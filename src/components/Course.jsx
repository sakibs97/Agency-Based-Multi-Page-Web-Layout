import graphics from '../assets/course/graphics.png'
import web from '../assets/course/web.png'
import digital from '../assets/course/digital.png'
import app from '../assets/course/app.png'

const Course = () => {
    return (
        <section className='mt-20'>
            <div className="container flex justify-between">
                <div className="relative text-center px-[25px] pt-[70px] pb-[35px] bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] -skew-y-6 group z-50 cursor-pointer">
                    <div className="skew-y-[6deg] relative">
                        <div className="">
                            <img src={graphics} alt="graphics" className='p-[26px] bg-[#3661FC] group-hover:bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-full mx-auto' />
                        </div>
                        <h2 className='font-nuni font-bold text-[25px] text-[#000000] pt-10 pb-5'>Graphics Design</h2>
                        <p className='font-dmSans font-normal text-[16px] text-ptag leading-[26px] w-[250px]' >
                            There are many variations of pass
                            Lorem Ipsum available, but the a
                            have suffered alteration.
                        </p>
                    </div>
                    <div className="absolute bg-white h-full w-full top-0 left-0 rounded-3xl -z-10 group-hover:skew-y-[-6deg] group-hover:skew-x-[6deg] shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-300"></div>
                </div>
                <div className="relative text-center px-[25px] pt-[70px] pb-[35px] bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] -skew-y-6 group z-50 cursor-pointer">
                    <div className="skew-y-[6deg] relative">
                        <div className="">
                            <img src={web} alt="web" className='p-[26px] bg-[#3661FC] group-hover:bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-full mx-auto' />
                        </div>
                        <h2 className='font-nuni font-bold text-[25px] text-[#000000] pt-10 pb-5'>Web Developer</h2>
                        <p className='font-dmSans font-normal text-[16px] text-ptag leading-[26px] w-[250px]' >
                            There are many variations of pass
                            Lorem Ipsum available, but the a
                            have suffered alteration.
                        </p>
                    </div>
                    <div className="absolute bg-white h-full w-full top-0 left-0 rounded-3xl -z-10 group-hover:skew-y-[-6deg] group-hover:skew-x-[6deg] shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-300"></div>
                </div>
                <div className="relative text-center px-[25px] pt-[70px] pb-[35px] bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] -skew-y-6 group z-50 cursor-pointer">
                    <div className="skew-y-[6deg] relative">
                        <div className="">
                            <img src={digital} alt="digital" className='p-[26px] bg-[#3661FC] group-hover:bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-full mx-auto' />
                        </div>
                        <h2 className='font-nuni font-bold text-[25px] text-[#000000] pt-10 pb-5'>Digital Marketing</h2>
                        <p className='font-dmSans font-normal text-[16px] text-ptag leading-[26px] w-[250px]' >
                            There are many variations of pass
                            Lorem Ipsum available, but the a
                            have suffered alteration.
                        </p>
                    </div>
                    <div className="absolute bg-white h-full w-full top-0 left-0 rounded-3xl -z-10 group-hover:skew-y-[-6deg] group-hover:skew-x-[6deg] shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-300"></div>
                </div>
                <div className="relative text-center px-[25px] pt-[70px] pb-[35px] bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] -skew-y-6 group z-50 cursor-pointer">
                    <div className="skew-y-[6deg] relative">
                        <div className="">
                            <img src={app} alt="app" className='p-[26px] bg-[#3661FC] group-hover:bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-full mx-auto' />
                        </div>
                        <h2 className='font-nuni font-bold text-[25px] text-[#000000] pt-10 pb-5'>App Design</h2>
                        <p className='font-dmSans font-normal text-[16px] text-ptag leading-[26px] w-[250px]' >
                            There are many variations of pass
                            Lorem Ipsum available, but the a
                            have suffered alteration.
                        </p>
                    </div>
                    <div className="absolute bg-white h-full w-full top-0 left-0 rounded-3xl -z-10 group-hover:skew-y-[-6deg] group-hover:skew-x-[6deg] shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-300"></div>
                </div>
            </div>

        </section>
    )
}

export default Course