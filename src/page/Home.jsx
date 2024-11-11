import Banner from '../components/Banner';
import Course from '../components/Course';
import AboutOurCompany from '../components/AboutOurCompany';
import OurServices from '../components/OurServices';
import Brands from '../components/Brands';
import ClientSay from '../components/ClientSay';
import OurBlog from '../components/OurBlog';
import Sponser from '../components/Sponser';
import OurProject from '../components/OurProject';
import Faq from '../components/faq/Faq';

const Home = () => {
    return (
        <>
            <Banner />
            <Course />
            <AboutOurCompany />
            <OurServices />
            <OurProject />
            <Brands />
            <ClientSay />
            <Faq />
            <OurBlog />
            <Sponser />
        </>
    )
}

export default Home