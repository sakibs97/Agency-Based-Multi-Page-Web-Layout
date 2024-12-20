import seo from '../assets/ourServices/seo.png'
import web from '../assets/ourServices/web.jpg'
import email from '../assets/ourServices/email.jpg'
import social from '../assets/ourServices/social.png'
import { Link } from 'react-router-dom'


const OurServices = () => {

    const serviceData = [
        {
            img: seo,
            title: 'Search Engine Optimization',
            description: 'There are many variations of passages of Lorem Ipsum available, but the majority our as have suffered alteration in some form, by injected humour, or randomized word which don&apos;t worry a look even slight believable. If you are going to use a passage.',
            link: '/seo-service-details',
        },
        {
            img: web,
            title: 'Web Design & Development',
            description: 'There are many variations of passages of Lorem Ipsum available, but the majority our as have suffered alteration in some form, by injected humour, or randomized word which don&apos;t worry a look even slight believable. If you are going to use a passage.',
            link: '',
        },
        {
            img: email,
            title: 'Email and Content Marketing',
            description: 'There are many variations of passages of Lorem Ipsum available, but the majority our as have suffered alteration in some form, by injected humour, or randomized word which don&apos;t worry a look even slight believable. If you are going to use a passage.',
            link: '',
        },
        {
            img: social,
            title: 'Social Media Network Marketing',
            description: 'There are many variations of passages of Lorem Ipsum available, but the majority our as have suffered alteration in some form, by injected humour, or randomized word which don&apos;t worry a look even slight believable. If you are going to use a passage.',
            link: '',
        }
    ]

    return (
        <section className='bg-[#F4F4FF] py-20'>
            <div className="container">
                <div className="text-center">
                    <h6 className='font-dmSans font-medium text-[20px] bg-gradient-to-r from-startC to-endC bg-clip-text text-transparent'>Our Services</h6>
                    <h2 className='font-nuni font-bold text-[46px] text-main'>Best Quality Services</h2>
                </div>
                {serviceData.map((item, index) => (
                    <>
                        <div key={index} className="group">
                            <div className="p-[2px] group-hover:bg-gradient-to-r from-startC to-endC my-5 rounded-3xl">
                                <div className="flex justify-between items-center p-5 bg-white rounded-3xl">
                                    <img src={item.img} alt="seo" className='rounded-3xl' />
                                    <div className="w-[700px]">
                                        <h4 className='font-nuni font-bold text-[25px] text-main pb-5'>{item.title}</h4>
                                        <p className='font-dmSans font-normal text-[16px] text-ptag'>{item.description}</p>
                                    </div>
                                    <div className="relative inline-block p-[1px] rounded-full bg-gradient-to-r from-startC to-[#FFAA52]">
                                        <Link to={item.link}>
                                            <button className='relative font-dmSans font-normal bg-white text-[18px] text-main group-hover:text-white leading-[30px] py-[15px] px-[33px] rounded-full z-10 duration-500'>
                                                <span className="relative z-20">Read More</span>
                                                <div className="absolute inset-0 bg-gradient-to-r from-startC to-[#FFAA52] group-hover:animate-fadeOut opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full z-10"></div>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </section>
    )
}

export default OurServices