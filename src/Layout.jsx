import React from 'react';

// COMPONENTS
import Header from './components/Header/header';
import HeroSection from './components/HeroSection/herosection';
import ProjectTrack from './components/ProjectTrack/projecttrack';
import Infoblock from './components/Infoblock/Infoblock'
import Clientlogo from './components/Clientlogo/Clientlogo';
import Casestudy from './components/Casestudy/Casestudy';
import Businesshelp from './components/Businesshelp/Businesshelp';
import ClientTrust from './components/ClientTrust/ClientTrust';
import Aboutus from './components/Aboutus/Aboutus';
import Recognisation from './components/Recognisation/Recognisation';
import Workwithus from './components/Workwithus/Workwithus';
import Footer from './components/Footer/Footer';
import DigitalPlanning from './components/DigitalPlanning/DigitalPlanning';
import ExpressAPI from './components/ExpressAPI/ExpressAPI';
// import LearningFormik from './components/LearningFormik/LearningFormik';

// CSS FILES
import './components/Header/header.css';
import './components/HeroSection/herosection.css';
import './components/ProjectTrack/projecttrack.css';
import './components/Infoblock/Infoblock.css'
import './components/Clientlogo/Clientlogo.css';
import './components/Casestudy/Casestudy.css';
import './components/Businesshelp/Businesshelp.css';
import './components/ClientTrust/ClientTrust.css';
import './components/Aboutus/Aboutus.css';
import './components/Recognisation/Recognisation.css';
import './components/Workwithus/Workwithus.css';
import './components/Footer/Footer.css';
import './components/DigitalPlanning/DigitalPlanning.css';
import Research from './components/Research/Research';
// import './components/LearningFormik/LearningFormik.css';

export default function Layout() {
  return (
    <>
      <Header />
      {/* <LearningFormik /> */}
      <HeroSection />
      <ProjectTrack />
      <Infoblock />
      {/* <ExpressAPI /> */}
      <DigitalPlanning />
      <Clientlogo />
      {/* <Research /> */}
      <Casestudy />
      <ClientTrust />
      <Businesshelp />
      {/* <Aboutus /> */}
      <Recognisation />
      <Workwithus />
      <TrustedSlider />
      <Footer />
    </>
  )
}
