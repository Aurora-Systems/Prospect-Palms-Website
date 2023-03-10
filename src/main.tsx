import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import { TopNavbar } from './Components/navbars';
import ReactWhatsapp from 'react-whatsapp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
//import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import Footer from './Components/footer';
import Services from './Pages/Services';
import Blog from './Pages/Blog';
import FAQS from './Pages/Faqs';
import Contact from './Pages/Contact';
import Virtual from './Pages/Gallery';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TopNavbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='virt' element={<Virtual/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/faqs" element={<FAQS/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
  </React.StrictMode>,
)
