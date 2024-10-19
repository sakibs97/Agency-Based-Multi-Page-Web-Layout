import { Link } from "react-router-dom"

const ContactBanner = () => {
    return (
        <section>
            <div className='bg-[url("/src/assets/contact/contact.jpg")] h-[550px] bg-cover bg-no-repeat bg-center relative after:absolute after:top-0 before:left-0 after:bg-[#000000] after:bg-opacity-30 after:h-[550px] after:w-full after:z-5'>
                <div className='after:absolute after:bg-[url("/src/assets/Services/banner.png")] after:bg-cover after:bg-no-repeat after:bg-center after:top-0 after:left-0 after:w-full after:h-[550px] after:z-10'>
                    <div className="absolute top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 text-center">
                        <h2 className='font-nuni font-bold text-[46px] text-[#fff] leading-[41px]'>Contact Us</h2>
                        <p className='font-dmSans font-normal text-[16px] text-[#fff] leading-[40px]'>
                            <Link to='/'><span className="hover:bg-gradient-to-r from-startC to-endC bg-clip-text hover:text-transparent duration-300 pr-[8px]">Home</span></Link>-
                            <span className="bg-gradient-to-r from-startC to-endC bg-clip-text text-transparent pl-[8px]">Contact Us</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactBanner