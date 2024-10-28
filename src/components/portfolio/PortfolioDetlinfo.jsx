import growth1 from '../../assets/team-member/profolio/organic-bot.png'
import right from '../../assets/team-member/profolio/right.png'
import similar from '../../assets/team-member/profolio/dtls_similar.png'

let tableData = [
    {
        id: 1,
        titleOne: 'Start Date :',
        descriptionOne: '15 Dec 2022',
        titleTwo: 'End Date :',
        descriptionTwo: '12 Jan 2023',
    },
    {
        id: 2,
        titleOne: 'Client :',
        descriptionOne: 'Jiyatan Raw',
        titleTwo: 'Tags :',
        descriptionTwo: 'Digital Agency',
    },
    {
        id: 3,
        titleOne: 'Website :',
        descriptionOne: 'jiyatanraw.com',
        titleTwo: 'Category :',
        descriptionTwo: 'Agency',
    },
]

const PortfolioDetlinfo = () => {
    return (
        <section className='mt-28 mb-[50px]'>
            <div className="container">
                <div className="">
                    <img src={growth1} alt="" className='w-full' />
                </div>
                <div className="px-[60px] pt-[59px] pb-[58px] bg-[#F4F4FF] my-[50px] rounded-2xl">
                    <div className="text-center ">
                        <div className="inline-block">
                            <div className="overflow-hidden grid grid-cols-3 lg:gap-64">
                                {tableData.map((item, index) => (
                                    <>
                                        <table key={index}
                                            className="text-left">
                                            <tbody>
                                                <tr className="">
                                                    <td className='font-dmSans font-medium text-[20px] text-main leading-[40px]'>{item.titleOne}</td>
                                                    <td className='font-dmSans font-normal text-ptag text-[16px] leading-[40px]'>{item.descriptionOne}</td>
                                                </tr>
                                                <tr className="">
                                                    <td className='font-dmSans font-medium text-[20px] text-main leading-[40px]'>{item.titleTwo}</td>
                                                    <td className='font-dmSans font-normal text-ptag text-[16px] leading-[40px]'>{item.descriptionTwo}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h3 className='font-nuni font-bold text-[25px] text-main'>Human Figurines Using Ladder to Reach Cracked lit Lightbulb as an Idea</h3>
                    <p className='font-dmSans font-normal text-[16px] text-ptag leading-[26px] pt-[17px]'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don&apos;t look as even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text. All the as Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over Latin words need to as be sure there isn&apos;t anything as embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined.
                    </p>
                </div>
                <div className="my-[50px] flex justify-between">
                    <div className="w-[48%]">
                        <div className="grid grid-cols-2 mb-[50px]">
                            <div className="flex items-center py-[4px]">
                                <img src={right} alt="right" />
                                <h6 className='font-dmSans font-normal text-[16px] text-main leading-[26px] pl-[10px]'>Research beyond the business plan</h6>
                            </div>
                            <div className="flex items-center py-[4px]">
                                <img src={right} alt="right" />
                                <h6 className='font-dmSans font-normal text-[16px] text-main leading-[26px] pl-[10px]'>Financial Growth System</h6>
                            </div>
                            <div className="flex items-center py-[4px]">
                                <img src={right} alt="right" />
                                <h6 className='font-dmSans font-normal text-[16px] text-main leading-[26px] pl-[10px]'>Customer Oriented Program Daily</h6>
                            </div>
                            <div className="flex items-center py-[4px]">
                                <img src={right} alt="right" />
                                <h6 className='font-dmSans font-normal text-[16px] text-main leading-[26px] pl-[10px]'>Customer Oriented Program Daily</h6>
                            </div>
                            <div className="flex items-center py-[4px]">
                                <img src={right} alt="right" />
                                <h6 className='font-dmSans font-normal text-[16px] text-main leading-[26px] pl-[10px]'>The ability to turnaround consulting</h6>
                            </div>
                            <div className="flex items-center py-[4px]">
                                <img src={right} alt="right" />
                                <h6 className='font-dmSans font-normal text-[16px] text-main leading-[26px] pl-[10px]'>Dedicated Team member</h6>
                            </div>
                            <div className="flex items-center py-[4px]">
                                <img src={right} alt="right" />
                                <h6 className='font-dmSans font-normal text-[16px] text-main leading-[26px] pl-[10px]'>Customer engagement matters</h6>
                            </div>
                            <div className="flex items-center py-[4px]">
                                <img src={right} alt="right" />
                                <h6 className='font-dmSans font-normal text-[16px] text-main leading-[26px] pl-[10px]'>Product ux Design & Development</h6>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-x-5">
                            <img src={similar} alt="" />
                            <img src={similar} alt="" />
                        </div>
                    </div>
                    <div className="w-[48%]">
                        <div className="group ml-24 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-3xl py-[30px] px-[40px]">
                            <h4 className='font-nuni font-bold text-[25px] text-main relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-[#F4F4FF] after:absolute after:bottom-0 after:left-0 after:w-[60px] group-hover:after:w-full after:duration-700 pb-[8px] after:h-[2px] after:bg-gradient-to-r after:from-startC after:to-endC'>Need Your Help?</h4>
                            <div className="grid grid-cols-2 mt-[25px]">
                                <div className="flex items-center">
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.8803 19.9938C17.4538 19.9567 17.0274 19.9259 16.6009 19.8764C13.8445 19.5675 11.2858 18.684 8.93103 17.2135C6.45886 15.6688 4.45641 13.6546 2.93603 11.177C1.70612 9.18134 0.896489 7.0312 0.494762 4.72042C0.32171 3.72567 0.235184 2.72475 0.222824 1.71146C0.210463 0.691999 0.884128 0 1.9039 0C3.06582 0 4.22155 0 5.38347 0C6.37234 0 7.03364 0.630213 7.05837 1.61878C7.08927 2.80507 7.25614 3.96046 7.6146 5.09113C7.81238 5.72135 7.68259 6.26506 7.26232 6.77788C6.6999 7.46988 6.18075 8.19277 5.64923 8.90948C5.61833 8.95273 5.61215 9.04541 5.63687 9.09484C6.79879 11.3129 8.44278 13.0677 10.6306 14.2972C10.8284 14.4084 11.0324 14.6061 11.224 14.5938C11.4094 14.5814 11.5824 14.359 11.7617 14.2292C12.3859 13.7597 13.0039 13.2777 13.6281 12.8143C14.0175 12.5239 14.4563 12.4498 14.926 12.561C15.5255 12.7031 16.1189 12.8947 16.7245 12.9935C17.3302 13.0924 17.9544 13.1233 18.5663 13.1603C19.24 13.1974 19.7591 13.4569 20.062 14.0748C20.1299 14.2169 20.167 14.3775 20.2227 14.532C20.2227 15.8974 20.2227 17.2629 20.2227 18.6345C20.1114 18.8817 20.0311 19.1474 19.8889 19.3698C19.6541 19.7405 19.2647 19.895 18.8568 20C18.5292 19.9938 18.2017 19.9938 17.8803 19.9938Z" fill="url(#paint0_linear_235_898)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_235_898" x1="0.217717" y1="9.98903" x2="20.2339" y2="9.98903" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#FE651B" />
                                                <stop offset="1" stopColor="#FFAA52" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <span className='font-dmSans font-normal text-[16px] text-ptag leading-[26px] pl-[20px]'>+(323) 750-1234</span>
                                </div>
                                <div className="flex items-center">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.528878 10.0545C0.587595 9.52733 0.65936 8.9741 0.711553 8.41435C0.724602 8.28418 0.705029 8.13448 0.646312 8.02384C-1.04996 4.85412 0.744174 0.929399 4.26067 0.14836C5.68293 -0.170564 7.02037 0.0246958 8.29257 0.734139C8.39696 0.792717 8.55354 0.812243 8.6775 0.792717C13.9686 0.0312045 18.6268 3.64351 19.488 8.45341C19.6967 9.61195 19.6772 10.764 19.4488 11.9225C19.4227 12.0397 19.4488 12.1829 19.4945 12.2935C21.1059 15.8017 18.6333 19.388 15.3451 19.9282C14.1839 20.1169 13.0813 19.9282 12.0244 19.427C11.92 19.3749 11.7765 19.3554 11.659 19.3749C6.52454 20.2536 1.57926 16.7715 0.691981 11.6492C0.607168 11.135 0.587595 10.6078 0.528878 10.0545ZM10.3151 16.5632C10.6347 16.5241 11.2089 16.4916 11.7634 16.394C12.9051 16.1987 13.9359 15.7626 14.7319 14.8905C16.0106 13.5041 15.9649 11.2977 14.634 10.0741C14.0468 9.53384 13.3357 9.2019 12.5789 8.99362C11.4894 8.68772 10.3868 8.45341 9.29729 8.1475C8.85365 8.01733 8.40349 7.82858 8.01856 7.57474C7.45096 7.19724 7.45749 6.55939 7.97942 6.11029C8.12295 5.99313 8.27953 5.86947 8.44915 5.8174C8.86017 5.70024 9.27772 5.57658 9.70178 5.54404C10.8566 5.46593 11.796 5.84994 12.3375 6.95642C12.4484 7.17771 12.592 7.3925 12.7681 7.57474C13.153 7.97827 13.6489 8.00431 14.1512 7.86763C14.634 7.73745 14.9211 7.40551 15.032 6.91736C15.1494 6.39016 14.9928 5.91503 14.7188 5.47895C14.2817 4.78903 13.6619 4.3139 12.9116 4.00799C11.6003 3.47428 10.2302 3.37015 8.83408 3.54588C7.88808 3.66303 6.99428 3.9364 6.18529 4.45709C4.36506 5.63516 4.2411 8.34276 6.02218 9.56639C6.4854 9.88531 7.0008 10.1717 7.52925 10.3344C8.4883 10.6338 9.47996 10.8356 10.4521 11.0829C11.0262 11.2261 11.6068 11.3758 12.0961 11.7273C12.6703 12.1373 12.8138 12.8598 12.3897 13.4195C12.194 13.6733 11.92 13.9012 11.6394 14.0509C10.9805 14.3958 10.2563 14.4414 9.52563 14.3828C8.50787 14.2982 7.80327 13.7775 7.3792 12.8533C7.26177 12.6059 7.13781 12.3521 6.99428 12.1243C6.63545 11.558 5.98956 11.3628 5.29801 11.6036C4.73693 11.7989 4.4303 12.3195 4.48902 12.9834C4.50206 13.1201 4.52816 13.2568 4.56078 13.3935C4.85437 14.4479 5.5394 15.1964 6.46582 15.7366C7.58145 16.3744 8.80798 16.5241 10.3151 16.5632Z" fill="url(#paint0_linear_235_911)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_235_911" x1="-0.00493917" y1="9.98903" x2="20.0113" y2="9.98903" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#FE651B" />
                                                <stop offset="1" stopColor="#FFAA52" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <span className='font-dmSans font-normal text-[16px] text-ptag leading-[26px] pl-[20px]'>Abubokkor AK</span>
                                </div>
                                <div className="flex items-center">
                                    <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.2231 12.9832C20.165 13.1611 20.1122 13.3336 20.0595 13.4953C18.0174 11.4197 15.986 9.36016 13.9492 7.29527C15.9965 5.2196 18.028 3.1601 20.07 1.09521C20.1122 1.22461 20.1703 1.40252 20.2231 1.58044C20.2231 5.38134 20.2231 9.18225 20.2231 12.9832Z" fill="url(#paint0_linear_235_903)" />
                                        <path d="M1.02148 0.151821C1.25893 0.097907 1.46472 0.0493848 1.66523 0.0116453C1.72854 -0.00452874 1.79714 0.000862617 1.86046 0.000862617C7.35336 0.000862617 12.8515 0.000862617 18.3444 0.00625397C18.6135 0.00625397 18.8827 0.0763416 19.1518 0.114081C19.157 0.141038 19.157 0.162603 19.1623 0.18956C19.1148 0.238082 19.0673 0.291996 19.0198 0.340518C16.2391 3.19254 13.4636 6.04996 10.6829 8.90199C10.2977 9.30095 9.92305 9.30095 9.53786 8.90738C6.75711 6.04996 3.97108 3.19254 1.19033 0.335127C1.14285 0.286604 1.10063 0.238082 1.02148 0.151821Z" fill="url(#paint1_linear_235_903)" />
                                        <path d="M13.0696 8.19584C15.1064 10.2607 17.1326 12.3148 19.201 14.4121C18.9583 14.466 18.763 14.5145 18.5573 14.5522C18.4781 14.5684 18.399 14.5576 18.3198 14.5576C12.8427 14.5576 7.37094 14.5576 1.89387 14.5576C1.60365 14.5576 1.324 14.5307 1.03906 14.3797C3.08109 12.3094 5.10729 10.2553 7.14932 8.18506C7.17043 8.20123 7.21792 8.24975 7.27068 8.29828C7.75613 8.79428 8.2363 9.29029 8.72174 9.78629C9.53961 10.622 10.6741 10.622 11.4919 9.78629C12.0301 9.24716 12.5631 8.70802 13.0696 8.19584Z" fill="url(#paint2_linear_235_903)" />
                                        <path d="M0.135871 13.4952C0.093659 13.2634 0.00395742 13.0154 0.00395742 12.7674C-0.00131914 9.11204 -0.00131914 5.4567 0.00395742 1.79597C0.00395742 1.54797 0.0883824 1.29996 0.135871 1.06274C2.19373 3.1492 4.22521 5.21409 6.26724 7.28437C4.23048 9.34386 2.19901 11.4034 0.135871 13.4952Z" fill="url(#paint3_linear_235_903)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_235_903" x1="13.9477" y1="7.28847" x2="20.2266" y2="7.28847" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#FE651B" />
                                                <stop offset="1" stopColor="#FFAA52" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_235_903" x1="1.017" y1="4.59589" x2="19.1725" y2="4.59589" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#FE651B" />
                                                <stop offset="1" stopColor="#FFAA52" />
                                            </linearGradient>
                                            <linearGradient id="paint2_linear_235_903" x1="1.03458" y1="11.3696" x2="19.2112" y2="11.3696" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#FE651B" />
                                                <stop offset="1" stopColor="#FFAA52" />
                                            </linearGradient>
                                            <linearGradient id="paint3_linear_235_903" x1="-0.00154775" y1="7.27215" x2="6.27077" y2="7.27215" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#FE651B" />
                                                <stop offset="1" stopColor="#FFAA52" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <span className='font-dmSans font-normal text-[16px] text-ptag leading-[26px] pl-[20px]'>infoyour@albashti.com</span>
                                </div>
                                <div className="flex items-center">
                                    <svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.2516 25C9.08077 25 8.90994 25 8.73911 25C8.19928 24.8633 7.80979 24.5703 7.53646 24.0951C5.42499 20.3776 3.29302 16.6667 1.16789 12.9492C0.177071 11.2174 -0.18509 9.38151 0.0882388 7.42187C0.566565 4.0625 3.21786 1.15885 6.65497 0.299479C7.20163 0.16276 7.77562 0.0976562 8.32912 0C8.77328 0 9.21744 0 9.6616 0C10.0306 0.0520833 10.4064 0.0911458 10.7686 0.16276C14.848 0.9375 17.9093 4.44661 17.9981 8.41797C18.0323 10.0846 17.595 11.6276 16.7613 13.0859C14.684 16.6927 12.6136 20.3125 10.5567 23.9323C10.2561 24.4596 9.88026 24.8568 9.2516 25ZM9.00561 4.29688C6.98297 4.29688 5.32249 5.86588 5.31566 7.79297C5.30883 9.73958 6.95564 11.3281 8.99194 11.3281C11.0146 11.3281 12.6751 9.75911 12.6819 7.83203C12.6887 5.88542 11.0351 4.29688 9.00561 4.29688Z" fill="url(#paint0_linear_235_916)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_235_916" x1="-0.00444526" y1="12.4863" x2="18.0101" y2="12.4863" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#FE651B" />
                                                <stop offset="1" stopColor="#FFAA52" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <span className='font-dmSans font-normal text-[16px] text-ptag leading-[26px] pl-[20px]'>374 FA Tower, William S Blvd
                                        2721, IL, USA</span>
                                </div>
                            </div>
                        </div>
                        <p className='font-dmSans font-normal text-[16px] text-ptag leading-[26px] pt-[50px]'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected humour, or randomised words which do
                            look as even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn&apos;t anything embarrassing.
                            <br />
                            <br />
                            Hidden in the middle of text. All the as Lorem Ipsum generators on the Internet tend to
                            repeat predefined chunks as necessary, making this the first true generator on the Inte
                            rnet. It uses a dictionary of over Latin words need to as be sure.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PortfolioDetlinfo