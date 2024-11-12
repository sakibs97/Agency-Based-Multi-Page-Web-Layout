import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import { FaCircle } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";
import image from "../../assets/shop/image.png";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoBagHandleOutline } from "react-icons/io5";

const Products = () => {

    const [minPrice, setMinPrice] = useState(100);
    const [maxPrice, setMaxPrice] = useState(1200);

    return (
        <section className="my-28">
            <div className="container flex items-start justify-between">
                <div className="w-[24%]">
                    <div className="w-full p-[1px] bg-gradient-to-r from-startC to-endC bg-clip-border rounded-3xl">
                        <div className="bg-white py-[25px] px-[30px] rounded-3xl">
                            <h6 className="font-nuni font-bold text-[25px] text-main  relative after:absolute after:h-[2px] after:w-full after:bg-[#EDEDFF] after:left-0 after:bottom-0 after:z-10 before:absolute before:h-[2px] before:w-[80px] before:bg-gradient-to-r before:from-startC before:to-endC before:bottom-0 before:z-20 pb-[8px]">Search</h6>
                            <div className="mt-[24px] relative">
                                <input type="search" name="" id="" placeholder="Search" className="py-[18px] px-[23px] w-full bg-gradient-to-r text-[#fff] rounded-full placeholder:text-[#fff] outline-none font-pop font-normal text-[14px] leading-[24px]" />
                                <FaSearch className="absolute top-[50%] translate-y-[-50%] right-[23px] text-[#fff] w-[26px] h-[26px]" />
                            </div>
                        </div>
                    </div>
                    <div className="my-[50px] w-full p-[1px] bg-gradient-to-r from-startC to-endC bg-clip-border rounded-3xl">
                        <div className="bg-[#fff] rounded-3xl py-[25px] px-[30px]">
                            <h6 className="font-nuni font-bold text-[25px] text-main  relative after:absolute after:h-[2px] after:w-full after:bg-[#EDEDFF] after:left-0 after:bottom-0 after:z-10 before:absolute before:h-[2px] before:w-[140px] before:bg-gradient-to-r before:from-startC before:to-endC before:bottom-0 before:z-20 pb-[8px]">Price Range</h6>
                            <div className="flex justify-between text-gray-500 my-1">
                                <span>${minPrice}.00</span>
                                <span>${maxPrice}.00</span>
                            </div>
                            <p className="mt-4 text-center text-gray-700 font-medium">
                                Price: ${minPrice}.00 - ${maxPrice}.00
                            </p>
                        </div>
                    </div>
                    <div className="w-full p-[1px] bg-gradient-to-r from-startC to-endC bg-clip-border rounded-3xl">
                        <div className="bg-[#fff] rounded-3xl py-[25px] px-[30px]">
                            <h6
                                className="font-nuni font-bold text-[25px] text-main  relative after:absolute after:h-[2px] after:w-full after:bg-[#EDEDFF] after:left-0 after:bottom-0 after:z-10 before:absolute before:h-[2px] before:w-[82%] before:bg-gradient-to-r before:from-startC before:to-endC before:bottom-0 before:z-20 pb-[8px]">
                                Product categories
                            </h6>
                            <ul className="mt-[12px]">
                                <li className="flex justify-between font-dmSans font-normal text-[16px] text-[#6B6161] leading-[34px] group cursor-pointer">
                                    <span className="flex items-center group-hover:text-[#3661FC]">
                                        <FaCircle className="w-[11px] h-[11px] mr-[10px] text-[#E5EBEF] group-hover:hidden" />
                                        <IoMdCheckmarkCircle className="w-[11px] h-[11px] mr-[10px] text-[#E5EBEF] hidden group-hover:block group-hover:text-[#3661FC]" />
                                        Accessories
                                    </span>
                                    <span className="group-hover:text-[#3661FC]">(65)</span>
                                </li>
                                <li className="flex justify-between font-dmSans font-normal text-[16px] text-[#6B6161] leading-[34px] group cursor-pointer">
                                    <span className="flex items-center group-hover:text-[#3661FC]">
                                        <FaCircle className="w-[11px] h-[11px] mr-[10px] text-[#E5EBEF] group-hover:hidden" />
                                        <IoMdCheckmarkCircle className="w-[11px] h-[11px] mr-[10px] text-[#E5EBEF] hidden group-hover:block group-hover:text-[#3661FC]" />
                                        Books
                                    </span>
                                    <span className="group-hover:text-[#3661FC]">(08)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="my-[50px] w-full p-[1px] bg-gradient-to-r from-startC to-endC bg-clip-border rounded-3xl">
                        <div className="bg-[#fff] rounded-3xl py-[25px] px-[30px]">
                            <h6 className="font-nuni font-bold text-[25px] text-main  relative after:absolute after:h-[2px] after:w-full after:bg-[#EDEDFF] after:left-0 after:bottom-0 after:z-10 before:absolute before:h-[2px] before:w-[47%] before:bg-gradient-to-r before:from-startC before:to-endC before:bottom-0 before:z-20 pb-[8px]">Availability</h6>
                            <ul className="mt-[12px]">
                                <li className="flex justify-between font-dmSans font-normal text-[16px] text-[#6B6161] leading-[34px]">
                                    <span className="flex items-center">
                                        <FaCircle className="w-[11px] h-[11px] mr-[10px] text-[#2df73e]" />
                                        In Stock
                                    </span>
                                    <span className="">(3560)</span>
                                </li>
                                <li className="flex justify-between font-dmSans font-normal text-[16px] text-[#6B6161] leading-[34px]">
                                    <span className="flex items-center">
                                        <FaCircle className="w-[11px] h-[11px] mr-[10px] text-[#fc3737]" />
                                        Out of Stock
                                    </span>
                                    <span className="">(260)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-[74%] grid grid-cols-3 gap-6">
                    <div className="bg-[#F4F4FF] p-[30px] rounded-2xl group">
                        <div className="flex items-center justify-between pb-[30px]">
                            <p className="font-dmSans font-normal text-[12px] text-[#fff] leading-[10px] py-[5px] px-[9px] bg-[#3661FC] rounded-full">New</p>
                            <div className="">
                                <h6 className="font-dmSans font-normal text-[14px] text-[#6B6161] leading-[14px] text-end">Reviews (18)</h6>
                                <div className="flex items-center">
                                    <FaStar className='mr-[4px] text-[#FCC013]' />
                                    <FaStar className='mr-[4px] text-[#FCC013]' />
                                    <FaStar className='mr-[4px] text-[#FCC013]' />
                                    <FaStar className='mr-[4px] text-[#FCC013]' />
                                    <FaStar className='text-[#FCC013]' />
                                </div>
                            </div>
                        </div>
                        <img src={image} alt="" className="mx-auto" />
                        <div className="mt-[30px]">
                            <Link className="font-dmSans font-medium text-[16px] text-main leading-[26px] group-hover:text-[#3661FC]">Apple iPhone 14 Pro Max 128 GB Deep Purple (eSIM)</Link>
                            <p className="font-dmSans font-medium text-[20px] text-main pt-[12px] pb-[25px]">$2000</p>
                            <button
                                className="flex items-center py-[12px] bg-[#fff] w-full rounded-full justify-center font-pop font-medium text-[18px] text-[#6B6161] leading-[26px] group-hover:text-[#3661FC]">
                                <IoBagHandleOutline className="w-[16px] h-[17.45px] mr-[10px]" />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    <div className="bg-[#F4F4FF] p-[30px] rounded-2xl group">
                        <div className="flex items-center justify-between pb-[30px]">
                            <p className="font-dmSans font-normal text-[12px] text-[#fff] leading-[10px] py-[5px] px-[9px] bg-[#3661FC] rounded-full">New</p>
                            <div className="">
                                <h6 className="font-dmSans font-normal text-[14px] text-[#6B6161] leading-[14px] text-end">Reviews (18)</h6>
                                <div className="flex items-center">
                                    <FaStar className='mr-[4px] text-[#FCC013]' />
                                    <FaStar className='mr-[4px] text-[#FCC013]' />
                                    <FaStar className='mr-[4px] text-[#FCC013]' />
                                    <FaStar className='mr-[4px] text-[#FCC013]' />
                                    <FaStar className='text-[#FCC013]' />
                                </div>
                            </div>
                        </div>
                        <img src={image} alt="" className="mx-auto" />
                        <div className="mt-[30px]">
                            <Link className="font-dmSans font-medium text-[16px] text-main leading-[26px] group-hover:text-[#3661FC]">Apple iPhone 14 Pro Max 128 GB Deep Purple (eSIM)</Link>
                            <p className="font-dmSans font-medium text-[20px] text-main pt-[12px] pb-[25px]">$2000</p>
                            <button
                                className="flex items-center py-[12px] bg-[#fff] w-full rounded-full justify-center font-pop font-medium text-[18px] text-[#6B6161] leading-[26px] group-hover:text-[#3661FC]">
                                <IoBagHandleOutline className="w-[16px] h-[17.45px] mr-[10px]" />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    <div className="bg-[#F4F4FF] p-[30px] rounded-2xl group">
                        <div className="flex items-center justify-between pb-[30px]">
                            <p className="font-dmSans font-normal text-[12px] text-[#fff] leading-[10px] py-[5px] px-[9px] bg-[#3661FC] rounded-full">New</p>
                            <div className="">
                                <h6 className="font-dmSans font-normal text-[14px] text-[#6B6161] leading-[14px] text-end">Reviews (18)</h6>
                                <div className="flex items-center">
                                    <FaStar className='mr-[4px] text-[#FCC013]' />
                                    <FaStar className='mr-[4px] text-[#FCC013]' />
                                    <FaStar className='mr-[4px] text-[#FCC013]' />
                                    <FaStar className='mr-[4px] text-[#FCC013]' />
                                    <FaStar className='text-[#FCC013]' />
                                </div>
                            </div>
                        </div>
                        <img src={image} alt="" className="mx-auto" />
                        <div className="mt-[30px]">
                            <Link className="font-dmSans font-medium text-[16px] text-main leading-[26px] group-hover:text-[#3661FC]">Apple iPhone 14 Pro Max 128 GB Deep Purple (eSIM)</Link>
                            <p className="font-dmSans font-medium text-[20px] text-main pt-[12px] pb-[25px]">$2000</p>
                            <button
                                className="flex items-center py-[12px] bg-[#fff] w-full rounded-full justify-center font-pop font-medium text-[18px] text-[#6B6161] leading-[26px] group-hover:text-[#3661FC]">
                                <IoBagHandleOutline className="w-[16px] h-[17.45px] mr-[10px]" />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products