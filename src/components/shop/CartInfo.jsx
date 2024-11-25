import { RxCross2 } from "react-icons/rx";
import cart from '../../assets/shop/details/cart.png'
import { Link } from "react-router-dom";

const CartInfo = () => {
    return (
        <section className="my-28">
            <div className="container flex space-x-[40px] items-start">
                <div className="w-[70%]">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-left">
                            <thead className="bg-[#F4F4FF] font-nuni font-medium text-[22px] text-main leading-[18px]">
                                <tr>
                                    <th scope="col" className="px-16 py-3">
                                        Product
                                    </th>
                                    <th scope="col" className="w-[136px] text-center">
                                        Price
                                    </th>
                                    <th scope="col" className="w-[180px] text-center">
                                        Quantity
                                    </th>
                                    <th scope="col" className="w-[130px] text-center">
                                        Total
                                    </th>
                                    <th scope="col" className="w-[150px] text-center">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="font-dmSans font-normal text-[16px] text-ptag border-b">
                                    <td className="ml-[40px] flex items-center py-[15px]">
                                        <img src={cart} alt="" className="px-[17px] py-[12px] bg-[#F4F4FF] rounded" />
                                        <span className="pl-[15px]">Calculator Images Scientific Clipart</span>
                                    </td>
                                    <td className="py-4 text-center">
                                        $130
                                    </td>
                                    <td className="">
                                        <div className="w-[120px] mx-auto border rounded-full flex justify-between items-center">
                                            <button className="py-3 px-3" type="button">
                                                <span className="sr-only">Quantity button</span>
                                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                                </svg>
                                            </button>
                                            <div>
                                                <input type="number" id="first_product" className="w-12 text-[#000]" placeholder="1" required />
                                            </div>
                                            <button className="py-3 px-3" type="button">
                                                <span className="sr-only">Quantity button</span>
                                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                    <td className="text-center mx-auto">
                                        <span className="sr-only">Total</span>
                                        $130
                                    </td>
                                    <td className="">
                                        <RxCross2 className="mx-auto cursor-pointer" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="w-[450px] relative mt-[50px]">
                        <input type="text" placeholder="Discount Code" className="border pt-[24px] pb-[23px] pl-[24px] pr-[120px] rounded-full w-full font-dmSans font-normal text-[13px]" />
                        <button className="font-dmSans font-medium text-[18px] text-[#FFFFFF] h-full px-[33px] bg-gradient-to-r from-startC to-endC rounded-full absolute right-0 bottom-0">Apply</button>
                    </div>
                </div>
                <div className="w-[28%]">
                    <div className="flex justify-between items-center font-nuni font-semibold text-[16px] text-[#111111]">
                        <button className="pt-[20px] pb-[19px] px-[26px] bg-[#F4F4FF] rounded-full">Continue Shopping</button>
                        <button className="py-[19px] px-[25px] bg-[#F4F4FF] rounded-full">Update Cart</button>
                    </div>
                    <div className="px-[30px] py-[30px] border rounded-3xl mt-[20px]">
                        <div className="flex justify-between items-center font-nuni font-semibold text-[16px] leading-[24px] border-b pb-[25px]">
                            <h4 className="text-main">Subtotal</h4>
                            <span className="text-[#3661FC]">$670.00</span>
                        </div>
                        <h4 className="font-dmSans font-normal text-[16px] text-main leading-[24px] mt-[25px]">Shipping</h4>
                        <div className="font-dmSans font-normal text-[16px] text-[#696969] leading-[24px]">
                            <div className="flex justify-between mt-[17px]">
                                <div className="flex space-x-[10px]">
                                    <input type="radio" name="" id="" />
                                    <p>Free Shipping</p>
                                </div>
                                <span>+$00.00</span>
                            </div>
                            <div className="flex justify-between mt-[6px]">
                                <div className="flex space-x-[10px]">
                                    <input type="radio" name="" id="" />
                                    <p>Flat Rate</p>
                                </div>
                                <span>+$10.00</span>
                            </div>
                            <div className="flex justify-between mt-[6px]">
                                <div className="flex space-x-[10px]">
                                    <input type="radio" name="" id="" />
                                    <p>Local Delivery</p>
                                </div>
                                <span>+$20.00</span>
                            </div>
                            <p className="text-main py-[20px]">Calculate Shipping</p>
                        </div>
                        <form className="">
                            <select id="countries" className="bg-[#FFFFFF] border rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full py-[12px] px-[20px] dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 font-dmSans font-normal text-[13px] text-main">
                                <option selected>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </form>
                        <input type="number" name="" id="" placeholder="Postcode / ZIP" className="w-full border rounded-full py-[12px] px-[20px] font-dmSans font-normal text-[13px] leading-[24px] my-[10px]" />
                        <button className="py-[15px] bg-[#F4F4FF] rounded-full w-full font-dmSans font-normal text-[18px] leading-[18px] my-[10px] text-main">Update Cart</button>
                        <div className="font-nuni font-semibold text-[16px] leading-[24px] flex justify-between items-center py-[10px]">
                            <p className="text-main">Total</p>
                            <span className="text-[#3661FC]">$700</span>
                        </div>
                        <div className="text-center pt-[19px]">
                            <Link to='/checkout'>
                                <button className="font-dmSans font-normal text-[18px] leading-[30px] text-[#FFFFFF] py-[15px] px-[33px] bg-gradient-to-r from-startC to-endC rounded-full">Proceed to Checkout</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartInfo