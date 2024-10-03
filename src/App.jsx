import './App.css';
import AboutOurCompany from './components/AboutOurCompany';
import Banner from './components/Banner';
import Brands from './components/Brands';
import ClientSay from './components/ClientSay';
import Course from './components/Course';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import OurBlog from './components/OurBlog';
import OurServices from './components/OurServices';
import Sponser from './components/Sponser';
import TeamMember from './components/TeamMember';



function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Course />
      <AboutOurCompany />
      <OurServices />
      <TeamMember />
      <Brands />
      <ClientSay />
      <Faq />
      <OurBlog />
      <Sponser />
      <Footer />
    </>
  )
}

export default App
