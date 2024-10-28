import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './components/layout/RootLayout';
import Home from './page/Home';
import Service from './page/Service';
import ErrorPage from './page/ErrorPage';
import Contact from './page/Contact';
import SeoServices from './page/SeoServices';
import Team from './page/Team';
import TeamMemberInfo from './page/TeamMemberInfo';
import OurPortfolio from './page/OurPortfolio';
import PortfolioDetails from './page/PortfolioDetails';

let router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path='/services' element={<Service />}></Route>
      <Route path='/seo-service-details' element={<SeoServices />}></Route>
      <Route path='/team' element={<Team />}></Route>
      <Route path='/team-details' element={<TeamMemberInfo />}></Route>
      <Route path='/portfolio' element={<OurPortfolio />}></Route>
      <Route path='/portfolio-details' element={<PortfolioDetails />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='*' element={<ErrorPage />}></Route>
    </Route>
  </>
))

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
