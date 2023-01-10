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
import { IonFab } from '@ionic/react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TopNavbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    <IonFab slot='fixed'><ReactWhatsapp number="+263-78-898-4320" message="Good day, thank you for reaching out we will get back to you shortly.">Hi</ReactWhatsapp></IonFab>
    <Footer/>
  </React.StrictMode>,
)
