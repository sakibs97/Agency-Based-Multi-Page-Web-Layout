import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './components/layout/RootLayout';
import Home from './page/Home';
import Service from './page/Service';
import ErrorPage from './page/ErrorPage';
import Contact from './page/Contact';

let router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path='/services' element={<Service />}></Route>
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
