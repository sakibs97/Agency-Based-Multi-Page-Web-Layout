import skill from '../../assets/team/details/skill.png'
import one from '../../assets/team/team-details/one.jpg'
import { GiHandBag } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { useEffect, useRef } from 'react';

const skillData = [
    { skill: 'Software Development', percentage: 85 },
    { skill: 'Web Development', percentage: 95 },
    { skill: 'UI / UX Design', percentage: 80 },
    { skill: 'SEO Optimization', percentage: 90 },
];

// eslint-disable-next-line react/prop-types
const SkillBar = ({ skill, percentage }) => {
    const progressBar = useRef('')

    useEffect(() => {
        if (progressBar.current) {
            progressBar.current.style.width = `${percentage}%`
        }
    }, [percentage]);
    return (
        <div className="mb-[22px]">
            <div className="flex justify-between mb-[9px] font-dmSans font-normal text-[16px] text-ptag leading-[26px]">
                <span>{skill}</span>
                <span>{percentage}%</span>
            </div>
            <div className="w-full bg-[rgb(54,97,252,.15)] rounded-full py-[5px] px-[5px]">
                <div
                    ref={progressBar}
                    className="py-[2px] bg-[#3661FC] rounded-full transition-all duration-1000 ease-in-out" style={{ width: '0%' }}></div>
            </div>
        </div>
    );
};

const SinglePersonInfo = () => {
    return (
        <section>
            <div className="container">
                <div className="my-28">
                    {/*-_-_- Personal info -_-_-*/}
                    <div className="bg-[#F4F4FF] p-[30px] rounded-2xl flex justify-between items-center">
                        <img src={one} alt="" className='w-[555px] h-[535px] rounded-2xl' />
                        <div className="w-[50%]">
                            <div className="mx-auto max-w-[545px]">
                                {/*-_-_- Name and Position -_-_-*/}
                                <div className="mb-6">
                                    <h4 className="font-nuni font-bold text-[36px] text-main">David Phillips</h4>
                                    <p className="font-dmSans font-normal text-[16px] text-ptag">Senior Manager</p>
                                </div>
                                {/*-_-_- Experience, Email, Phone, Location, Follow -_-_-*/}
                                <div className="flex flex-col">
                                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                            <div className="overflow-hidden">
                                                <table
                                                    className="min-w-full text-left">
                                                    <tbody>
                                                        <tr className="">
                                                            <td className="flex items-center">
                                                                <GiHandBag className='w-[17.87px] h-[16px] text-[#3661FC]' />
                                                                <h6 className="pl-[25px]  font-dmSans font-medium text-[20px] text-[#252324] leading-[50px]">Experience:</h6>
                                                            </td>
                                                            <td className="font-dmSans font-normal text-[16px] text-ptag leading-[50px]">15 Years</td>
                                                        </tr>
                                                        <tr className="">
                                                            <td className='flex items-center'>
                                                                <MdEmail className='w-[18.45px] h-[14px] text-[#3661FC]' />
                                                                <h6 className="pl-[25px] font-dmSans font-medium text-[20px] text-[#252324] leading-[50px]">E-mail:</h6>
                                                            </td>
                                                            <td>
                                                                <span className="font-dmSans font-normal text-[16px] text-ptag leading-[50px]">icourtnyhenry@example.com</span>
                                                            </td>
                                                        </tr>
                                                        <tr className="">
                                                            <td className='flex items-center'>
                                                                <IoCallSharp className='w-[17px] h-[18.31px] text-[#3661FC]' />
                                                                <h6 className="pl-[25px] font-dmSans font-medium text-[20px] text-[#252324] leading-[50px]">Phone:</h6>
                                                            </td>
                                                            <td>
                                                                <span className="font-dmSans font-normal text-[16px] text-ptag leading-[50px]">+1-800-456-478-00</span>
                                                            </td>
                                                        </tr>
                                                        <tr className="">
                                                            <td className="flex items-center">
                                                                <FaLocationDot className='w-[13px] h-[18px] text-[#3661FC]' />
                                                                <span className="pl-[25px] pr-[50px] font-dmSans font-medium text-[20px] text-[#252324] leading-[50px]">Location:</span>
                                                            </td>
                                                            <td>
                                                                <span className="font-dmSans font-normal text-[16px] text-ptag leading-[50px]">
                                                                    380 St Kilda Road, Melbourne
                                                                    <br />
                                                                    VIC 3004, Australia
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr className='mt-[50px]'>
                                                            <td className="font-dmSans font-medium text-[20px] text-main mr-[50px] mt-[25px]">
                                                                Follow Me:
                                                            </td>
                                                            <td className="flex justify-between w-[200px]">
                                                                <div className="pt-[13.7px] px-[17.27px] pb-[13.25px] text-[#3661FC] bg-[#fff] rounded-full hover:bg-[#3661FC] hover:text-[#fff] duration-300 cursor-pointer">
                                                                    <FaFacebookF className='w-[7.27px] h-[15.06px]' />
                                                                </div>
                                                                <div className="pt-[13.7px] px-[10.91px] pb-[13.25px] text-[#3661FC] bg-[#fff] rounded-full hover:bg-[#3661FC] hover:text-[#fff] duration-300 cursor-pointer">
                                                                    <FaTwitter className='w-[20px] h-[15.06px]' />
                                                                </div>
                                                                <div className="pt-[13.7px] pr-[12.73px] pb-[13.25px] pl-[13.64px] text-[#3661FC] bg-[#fff] rounded-full hover:bg-[#3661FC] hover:text-[#fff] duration-300 cursor-pointer">
                                                                    <FaLinkedinIn className='w-[15.45px] h-[15.06px]' />
                                                                </div>
                                                                <div className="pt-[13.7px] pr-[10.91px] pb-[13.25px] pl-[11.82px] text-[#3661FC] bg-[#fff] rounded-full hover:bg-[#3661FC] hover:text-[#fff] duration-300 cursor-pointer">
                                                                    <FaYoutube className='w-[19.09px] h-[15.06px]' />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-_-_- All Skill %  -_-_-*/}
                    <div className="flex justify-between my-[56px]">
                        <div className="w-[48%]">
                            {skillData.map((skill) => (
                                <SkillBar key={skill.skill} skill={skill.skill} percentage={skill.percentage} />
                            ))}
                        </div>
                        <div className="w-[47%]">
                            <h4 className='font-nuni font-bold text-[40px] text-main leading-[56px]'>Personal Experience and Skills</h4>
                            <p className='font-pop font-normal text-[16px] text-[#636363] leading-[26px] pt-[19px]'>
                                Since joining Sotcox in 2009 .Web design encompasses many different skills and discipli
                                web graphic design; user interface design (UI design); authoring, including standardise
                                optimization. Often many individuals will work in teams covering different aspects of the
                                <br />
                                <br />
                                The term &#34;web design&#34; is normally used to describe the design process relating to the
                                front-end (client side) design of a website including writing markup. Web design partiy
                                overlaps web engineering in the broader scope of web development.
                            </p>
                        </div>
                    </div>
                    {/*-_-_- Career Guidelines -_-_-*/}
                    <div className="flex justify-between">
                        <div className="w-[48%]">
                            <h4 className='font-nuni font-bold text-[46px] text-main leading-[56px]'>Career Guidelines</h4>
                            <p className='font-dmSans font-normal text-[16px] text-[#636363] leading-[26px] pt-[19px] pb-[25px]'>
                                As a web developer, you could work for a company or agency, or as a freelancer
                                on projects for individual clients. Your tasks will vary depending on your work sit
                                but day-to-day responsibilities might generally include.
                            </p>
                            <ul className='list-disc ml-4'>
                                <li className='font-pop font-thin text-[18px] text-main leading-[36px]'>
                                    Designing user interfaces and navigation menus
                                </li>
                                <li className='font-pop font-thin text-[18px] text-main leading-[36px]'>
                                    Writing and reviewing code for sites, typically HTML, XM
                                </li>
                                <li className='font-pop font-thin text-[18px] text-main leading-[36px]'>
                                    Troubleshooting problem with performance or user experience
                                </li>
                                <li className='font-pop font-thin text-[18px] text-main leading-[36px]'>
                                    Integrating multimedia content onto a site
                                </li>
                                <li className='font-pop font-thin text-[18px] text-main leading-[36px]'>
                                    Collaborating with designers, developers, and stakeholders
                                </li>
                                <li className='font-pop font-thin text-[18px] text-main leading-[36px]'>
                                    Testing web applications
                                </li>
                            </ul>
                        </div>
                        <div className="w-[47%]">
                            <img src={skill} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SinglePersonInfo