import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';



const router = createBrowserRouter(
  [
    {
      path: "", element: <Layout />, children: 
      [
        { index: true, element: <Home /> },
        {path: "about", element: <About />},
        {path: "services", element: <Services />},
        {path: "portfolio", element: <Portfolio />},
        {path: "contact", element: <Contact />},
      ]
    }
  ]
)



function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
