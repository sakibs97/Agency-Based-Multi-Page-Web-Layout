import './App.css';
import AboutOurCompany from './components/AboutOurCompany';
import Banner from './components/Banner';
import Course from './components/Course';
import Header from './components/Header';
import Navbar from './components/Navbar';
import OurServices from './components/OurServices';
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
    </>
  )
}

export default App
