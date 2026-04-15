import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// COMPONENTS
import Header from './components/Header/header';
import HeroSection from './components/HeroSection/herosection';
import ProjectTrack from './components/ProjectTrack/projecttrack';
import Infoblock from './components/Infoblock/Infoblock'
import Clientlogo from './components/Clientlogo/Clientlogo';
import Casestudy from './components/Casestudy/Casestudy';
import Businesshelp from './components/Businesshelp/Businesshelp';
import ClientTrust from './components/ClientTrust/ClientTrust';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Aboutus from './components/Aboutus/Aboutus';
import Recognisation from './components/Recognisation/Recognisation';
import Workwithus from './components/Workwithus/Workwithus';
import Footer from './components/Footer/Footer';
import DigitalPlanning from './components/DigitalPlanning/DigitalPlanning';
import ExpressAPI from './components/ExpressAPI/ExpressAPI';
import Research from './components/Research/Research';

// CSS FILES
import './components/Header/header.css';
import './components/HeroSection/herosection.css';
import './components/ProjectTrack/projecttrack.css';
import './components/Infoblock/Infoblock.css'
import './components/Clientlogo/Clientlogo.css';
import './components/Casestudy/Casestudy.css';
import './components/Businesshelp/Businesshelp.css';
import './components/ClientTrust/ClientTrust.css';
import './components/Services/Services.css';
import './components/Contact/Contact.css';
import './components/Aboutus/Aboutus.css';
import './components/Recognisation/Recognisation.css';
import './components/Workwithus/Workwithus.css';
import './components/Footer/Footer.css';
import './components/DigitalPlanning/DigitalPlanning.css';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  
  return null;
}

function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectTrack />
      <Infoblock />
      <DigitalPlanning />
      <Clientlogo />
      <Casestudy />
      <ClientTrust />
      <Businesshelp />
      <Recognisation />
      <Workwithus />
    </>
  );
}

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}