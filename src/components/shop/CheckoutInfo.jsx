import { useState } from "react"


const CheckoutInfo = () => {

    let [activeTab, setActiveTab] = useState('Bank')

    return (
        <section className="my-28">
            <div className="container">
                <div className="flex items-center font-dmSans font-normal text-[16px] leading-[26px] bg-[#F4F4FF] py-[20px] px-[30px] border-t-[2px] border-[#3661FC] rounded-b-xl">
                    <input type="checkbox" name="" id="" />
                    <p className="text-ptag pl-[15px]">Have a coupon?</p>
                    <span className="text-[#3661FC] pl-[5px]">Click here to enter your code</span>
                </div>
                <div className="mt-20 flex items-start justify-between">
                    <div className="w-[55%] p-[60px] bg-[#F4F4FF] rounded-3xl">
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
                    <div className="w-[38%]">
                        <h3 className="font-nuni font-bold text-[26px] text-main leading-[26px] pb-[35px]">Order Summary</h3>
                        <div className="border py-[30px] px-[40px] rounded-lg">
                            <div className="flex justify-between items-center pb-[25px]">
                                <h5 className="font-nuni font-semibold text-[20px] text-main leading-[24px]">Product</h5>
                                <h5 className="font-nuni font-semibold text-[20px] text-main leading-[24px]">Total</h5>
                            </div>
                            <div className="border-y py-[15px] font-dmSans font-normal text-ptag leading-[26px]">
                                <div className="flex justify-between items-center">
                                    <p className="text-[13px]">Orca is an armchair</p>
                                    <span className="text-[16px]">$120</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-[13px]">Venot Spanish Organic wood</p>
                                    <span className="text-[16px]">$280</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-[13px]">Eichholtz Sofa Emilio</p>
                                    <span className="text-[16px]">$160</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-[13px]">Envole Double Pendant Light</p>
                                    <span className="text-[16px]">$110</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center py-[15px] ">
                                <h5 className="font-nuni font-semibold text-[20px] text-main leading-[24px]">Subtotal</h5>
                                <h5 className="font-nuni font-semibold text-[20px] text-main leading-[24px]">$670.00</h5>
                            </div>
                            <div className="font-dmSans font-normal text-ptag leading-[26px] pb-[8px]">
                                <p className="text-[13px]">Shipping</p>
                                <div className="flex justify-between items-center">
                                    <p className="text-[13px]">Free Shipping</p>
                                    <span className="text-[16px]">+$00.00</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-[13px]">Flat Rate</p>
                                    <span className="text-[16px]">+$10.00</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-[13px]">Local Delivery</p>
                                    <span className="text-[16px]">+$20.00</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center py-[15px] border-t">
                                <h5 className="font-nuni font-semibold text-[20px] text-main leading-[24px]">Total</h5>
                                <h5 className="font-nuni font-semibold text-[20px] text-[#3661FC] leading-[24px]">$700.00</h5>
                            </div>
                            <div className="">
                                <div id="default-tab" role="tablist">
                                    <div className={`${activeTab === 'Bank' ? 'bg-[#F4F4FF] py-[20px] px-[17px] rounded-3xl' : ''}`}>
                                        <div
                                            className={`flex items-baseline font-dmSans text-[16px] leading-[26px] ${activeTab === 'Bank' ? 'font-medium text-main' : 'font-normal text-ptag pl-[15px]'}`}
                                            id="Bank"
                                            onClick={() => setActiveTab('Bank')}
                                            role="tab"
                                            aria-controls="Bank"
                                            aria-selected={activeTab === 'Bank'}
                                        >
                                            <input type="radio"
                                                name="paymentMethod"
                                                value="Bank"
                                                checked={activeTab === 'Bank'}
                                                onChange={() => setActiveTab('Bank')}
                                            />
                                            <div className="pl-[10px]">
                                                <h6 className="">Direct Bank Transfer</h6>
                                                <p className={`font-dmSans text-[16px] leading-[26px] text-ptag ${activeTab === 'Bank' ? 'block' : 'hidden'}`}>
                                                    Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${activeTab === 'Cash' ? 'bg-[#F4F4FF] py-[20px] px-[17px] rounded-3xl' : ''}`}>
                                        <div
                                            className={`flex items-baseline font-dmSans text-[16px] leading-[26px] ${activeTab === 'Cash' ? 'font-medium text-main' : 'font-normal text-ptag pl-[15px]'}`}
                                            id="Cash"
                                            onClick={() => setActiveTab('Cash')}
                                            role="tab"
                                            aria-controls="Cash"
                                            aria-selected={activeTab === 'Cash'}
                                        >
                                            <input type="radio"
                                                name="paymentMethod"
                                                value="Cash"
                                                checked={activeTab === 'Cash'}
                                                onChange={() => setActiveTab('Cash')}
                                            />
                                            <div className="pl-[10px]">
                                                <h6 className="">Cash on Delivery</h6>
                                                <p className={`font-dmSans text-[16px] leading-[26px] text-ptag ${activeTab === 'Cash' ? 'block' : 'hidden'}`}>
                                                    Make your payment directly Cash on hand. Please use your Order ID as the payment reference.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${activeTab === 'Cards' ? 'bg-[#F4F4FF] py-[20px] px-[17px] rounded-3xl' : ''}`}>
                                        <div
                                            className={`flex items-baseline font-dmSans text-[16px] leading-[26px] ${activeTab === 'Cards' ? 'font-medium text-main' : 'font-normal text-ptag pl-[15px]'}`}
                                            id="Cards"
                                            onClick={() => setActiveTab('Cards')}
                                            role="tab"
                                            aria-controls="Cards"
                                            aria-selected={activeTab === 'Cards'}
                                        >
                                            <input type="radio"
                                                name="paymentMethod"
                                                value="Cards"
                                                checked={activeTab === 'Cards'}
                                                onChange={() => setActiveTab('Cards')}
                                            />
                                            <div className="pl-[10px]">
                                                <h6 className="">Credit/Debit Cards or Paypal</h6>
                                                <p className={`font-dmSans text-[16px] leading-[26px] text-ptag ${activeTab === 'Cards' ? 'block' : 'hidden'}`}>
                                                    Make your payment directly into Credit/Debit Cards or Paypal. Please use your Order ID as the payment reference.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center pt-[24px]">
                                <button className="py-[16px] bg-gradient-to-r from-startC to-endC w-full rounded-full font-dmSans font-normal text-[18px] text-white leading-[18px]">Place Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CheckoutInfo