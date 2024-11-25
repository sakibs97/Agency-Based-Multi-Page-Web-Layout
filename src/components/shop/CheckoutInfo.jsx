

const CheckoutInfo = () => {
    return (
        <section className="my-28">
            <div className="container">
                <div className="flex items-center font-dmSans font-normal text-[16px] leading-[26px] bg-[#F4F4FF] py-[20px] px-[30px] border-t-[2px] border-[#3661FC] rounded-b-xl">
                    <input type="checkbox" name="" id="" />
                    <p className="text-ptag pl-[15px]">Have a coupon?</p>
                    <span className="text-[#3661FC] pl-[5px]">Click here to enter your code</span>
                </div>
                <div className="mt-20 flex items-start justify-between">
                    <div className="w-[60%] p-[60px] bg-[#F4F4FF] rounded-3xl">
                        <h3 className="font-nuni font-bold text-[26px] text-main leading-[24px] pb-[40px]">Billing Details</h3>
                        <div className="grid grid-cols-2 gap-[20px]">
                            <input type="text" placeholder="First Name*" className="py-[17px] px-[25px] rounded-full font-dmSans font-normal text-[13px] leading-[24px]" />
                            <input type="text" placeholder="Last Name*" className="py-[17px] px-[25px] rounded-full font-dmSans font-normal text-[13px] leading-[24px]" />
                            <input type="text" placeholder="Email Address*" className="py-[17px] px-[25px] rounded-full font-dmSans font-normal text-[13px] leading-[24px]" />
                            <input type="text" placeholder="Phone Number*" className="py-[17px] px-[25px] rounded-full font-dmSans font-normal text-[13px] leading-[24px]" />
                        </div>
                        <form className="relative my-[20px]">
                            <select id="countries" className="bg-[#FFFFFF] rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pt-[29px] pb-[8px] px-[25px] dark:focus:ring-blue-500 dark:focus:border-blue-500 font-dmSans font-normal text-[16px] text-main">
                                <option selected>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                            <p className="absolute top-[15px] left-[25px] font-dmSans font-normal text-[13px] text-[#A4A4A4] leading-[2px]">Country*</p>
                        </form>
                        <input type="text" placeholder="Address*" className="py-[17px] px-[25px] rounded-full font-dmSans font-normal text-[13px] leading-[24px] w-full" />
                        <div className="grid grid-cols-2 gap-[20px]">
                            <form className="relative my-[20px]">
                                <select id="countries" className="bg-[#FFFFFF] rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pt-[29px] pb-[8px] px-[25px] dark:focus:ring-blue-500 dark:focus:border-blue-500 font-dmSans font-normal text-[16px] text-main">
                                    <option selected>Choose a Town</option>
                                    <option value="US">Manhattan</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                                <p className="absolute top-[15px] left-[25px] font-dmSans font-normal text-[13px] text-[#A4A4A4] leading-[2px]">Town / City*</p>
                            </form>
                            <input type="text" placeholder="Postcode / ZIP*" className="my-[20px] py-[17px] px-[25px] rounded-full font-dmSans font-normal text-[13px] leading-[24px]" />
                        </div>
                        <div className="flex items-center font-dmSans font-normal text-[13px] leading-[24px] text-[#696969] py-[30px]">
                            <input type="checkbox" name="" id="" />
                            <p className="pl-[10px]">Create an account?</p>
                        </div>
                        <h3 className="font-nuni font-bold text-[20px] text-main leading-[24px] pb-[18px]">Shipping Address</h3>
                        <div className="flex items-center font-dmSans font-normal text-[13px] leading-[24px] text-[#696969]">
                            <input type="checkbox" name="" id="" />
                            <p className="pl-[10px]">Ship to a different address</p>
                        </div>

                    </div>
                    <div className="w-[28%]"></div>
                </div>
            </div>
        </section>
    )
}

export default CheckoutInfo