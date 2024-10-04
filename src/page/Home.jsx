import Banner from '../components/Banner';
import Course from '../components/Course';
import AboutOurCompany from '../components/AboutOurCompany';
import OurServices from '../components/OurServices';
import TeamMember from '../components/TeamMember';
import Brands from '../components/Brands';
import ClientSay from '../components/ClientSay';
import Faq from '../components/Faq';
import OurBlog from '../components/OurBlog';
import Sponser from '../components/Sponser';

const Home = () => {
    return (
        <>
            {/* <Banner />
            <Course />
            <AboutOurCompany />
            <OurServices />
            <TeamMember />
            <Brands />
            <ClientSay /> */}
            <Faq />
            <OurBlog />
            <Sponser />
        </>
    )
}

export default Home