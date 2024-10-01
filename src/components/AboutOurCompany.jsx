/* eslint-disable react/no-unescaped-entities */
import learn from '../assets/course/learn.png'

const AboutOurCompany = () => {
    return (
        <section className='bg-[url("./src/assets/course/watermarkC.png")] bg-cover bg-no-repeat bg-center py-20'>
            <div className="container flex items-center gap-10">
                <div className="w-[49%]">
                    <img src={learn} alt="" className='  ' />
                </div>
                <div className="w-[49%]">
                    <p className='font-dmSans font-medium text-[20px] text-transparent bg-gradient-to-r from-startC to-endC bg-clip-text'>
                        About Our Company
                    </p>
                    <h2 className='font-nuni font-bold text-[46px] text-main leading-[56px]'>
                        Learn How to Grow your Business in Days
                    </h2>
                    <p className='font-dmSans font-normal text-[16px] text-ptag pt-7 pb-8'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered alteration in some form, by injected humour, or randomised word which don't
                        look even sligh believable. If you are going to use a passage of Lorem Ipsum, you need
                        to be sure there isn't anything embarrassing.
                    </p>
                    <div className="font-dmSans font-normal text-[16px] text-main leading-[26px]">
                        <h5 className='flex items-center'>
                            <span className='pr-3'>
                                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.4788 17.2951C3.81412 17.3614 0.0079185 13.4365 1.22505e-05 8.79407C-0.007894 4.13707 3.81214 0.246616 8.48671 0.253917C13.0888 0.261217 16.9602 4.09592 16.9253 8.80204C16.8897 13.5221 13.1685 17.2931 8.4788 17.2951ZM12.0702 6.12743C12.0808 5.70865 11.2381 5.13856 10.8632 5.31775C10.7775 5.3589 10.7011 5.43256 10.6379 5.5069C10.5456 5.61574 10.4672 5.73719 10.3868 5.85532C9.46972 7.20656 8.54864 8.55515 7.64074 9.91236C7.49448 10.1307 7.38313 10.1592 7.17559 9.99399C6.85802 9.73981 6.52201 9.50752 6.18665 9.27723C5.71887 8.95601 5.50474 8.99915 5.17136 9.46306C5.12656 9.52544 5.08241 9.58915 5.03959 9.65353C4.76287 10.0703 4.7991 10.3072 5.20825 10.6052C5.90203 11.111 6.59843 11.6127 7.30077 12.1071C7.72508 12.4058 7.9728 12.354 8.26468 11.9246C9.47302 10.1446 10.6794 8.36268 11.8864 6.58138C11.9793 6.44334 12.0636 6.30131 12.0702 6.12743Z" fill="url(#paint0_linear_49_11)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_49_11" x1="0.00538156" y1="8.76321" x2="16.941" y2="8.76321" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#0F7AEF" />
                                            <stop offset="1" stopColor="#6CE3FF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </span>
                            01. Best market Research Policy.
                        </h5>
                        <h5 className='flex items-center'>
                            <span className='pr-3'>
                                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.4788 17.2951C3.81412 17.3614 0.0079185 13.4365 1.22505e-05 8.79407C-0.007894 4.13707 3.81214 0.246616 8.48671 0.253917C13.0888 0.261217 16.9602 4.09592 16.9253 8.80204C16.8897 13.5221 13.1685 17.2931 8.4788 17.2951ZM12.0702 6.12743C12.0808 5.70865 11.2381 5.13856 10.8632 5.31775C10.7775 5.3589 10.7011 5.43256 10.6379 5.5069C10.5456 5.61574 10.4672 5.73719 10.3868 5.85532C9.46972 7.20656 8.54864 8.55515 7.64074 9.91236C7.49448 10.1307 7.38313 10.1592 7.17559 9.99399C6.85802 9.73981 6.52201 9.50752 6.18665 9.27723C5.71887 8.95601 5.50474 8.99915 5.17136 9.46306C5.12656 9.52544 5.08241 9.58915 5.03959 9.65353C4.76287 10.0703 4.7991 10.3072 5.20825 10.6052C5.90203 11.111 6.59843 11.6127 7.30077 12.1071C7.72508 12.4058 7.9728 12.354 8.26468 11.9246C9.47302 10.1446 10.6794 8.36268 11.8864 6.58138C11.9793 6.44334 12.0636 6.30131 12.0702 6.12743Z" fill="url(#paint0_linear_49_11)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_49_11" x1="0.00538156" y1="8.76321" x2="16.941" y2="8.76321" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#0F7AEF" />
                                            <stop offset="1" stopColor="#6CE3FF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </span>
                            02. 24/7 Days super Support.
                        </h5>
                        <button className='font-dmSans font-normal text-[18px] text-white leading-[30px] py-[15px] px-[33px] rounded-full bg-gradient-to-r from-startC to-endC mt-10'>Read More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutOurCompany