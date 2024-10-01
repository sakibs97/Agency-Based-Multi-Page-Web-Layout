/* eslint-disable react/no-unescaped-entities */
import temp from '../assets/ourServices/temp.png'
import Readreusable from './reuseable/Readreusable'

const ServiceData = [
    {
        id: 1,
        title: 'Search Engine Optimization',
        discription: "There are many variations of passages of Lorem Ipsusm available, but the majority our as have suffered alteration in some form, by injected humour, or randomised word which don't worry a look even sligh believable. If you are going to use a passage.",
    },
    {
        id: 2,
        title: 'Web Design & Development',
        discription: "There are many variations of passages of Lorem Ipsusm available, but the majority our as have suffered alteration in some form, by injected humour, or randomised word which don't worry a look even sligh believable. If you are going to use a passage.",
    },
    {
        id: 3,
        title: 'Email and Content Marketing',
        discription: "There are many variations of passages of Lorem Ipsusm available, but the majority our as have suffered alteration in some form, by injected humour, or randomised word which don't worry a look even sligh believable. If you are going to use a passage.",
    },
    {
        id: 4,
        title: 'Social Media Network Marketing ',
        discription: "There are many variations of passages of Lorem Ipsusm available, but the majority our as have suffered alteration in some form, by injected humour, or randomised word which don't worry a look even sligh believable. If you are going to use a passage.",
    },
]

const OurServices = () => {
    return (
        <section className='bg-[#F4F4FF] py-20'>
            <div className="container">
                <div className="text-center">
                    <h6 className='font-dmSans font-medium text-[20px] bg-gradient-to-r from-[#FE651B] to-[#FFAA52] bg-clip-text text-transparent'>Our Services</h6>
                    <h2 className='font-nuni font-bold text-[46px] text-main'>Best Quality Services</h2>
                </div>
                <div className="">
                    {ServiceData.map((item) => (
                        <>
                            <div key={item.id} className="flex justify-between items-center p-5 bg-white rounded-3xl my-5">
                                <img src={temp} alt="temp" />
                                <div className="w-[700px]">
                                    <h4 className='font-nuni font-bold text-[25px] text-main pb-5'>{item.title}</h4>
                                    <p className='font-dmSans font-normal text-[16px] text-ptag'> {item.discription}</p>
                                </div>
                                <Readreusable read='Read More' />
                            </div>
                        </>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default OurServices