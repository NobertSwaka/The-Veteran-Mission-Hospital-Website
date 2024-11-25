// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Components/Pages/HomePage';
import AboutPage from './Components/pages/AboutPage';
import ServicesPage from './Components/Pages/ServicesPage';
import ClinicsCarousel from './Components/pages/ClinicsCarousel';
import BookAppointment from './Components/pages/BookAppointment';
import CardiologyClinic from './Components/pages/CardiologyClinic';
import DermatologyClinic from './Components/pages/DermatologyClinic';
import ENTClinic from './Components/pages/ENTClinic';
import GeneralSurgeryClinic from './Components/pages/GeneralSurgeryClinic';
import MaxillofacialSurgeon from './Components/pages/MaxillofacialSurgeon';
import Gallery from './Components/pages/Gallery';
import FAQ from './Components/pages/FAQ.JSX';
import Doctors from './Components/pages/Doctors';
import ContactUs from './Components/pages/ContactUs';
import PaediatricClinic from './Components/pages/PaediatricClinic';
import EmergencyCare from './Components/pages/EmergencyCare';
import Slider from './Components/pages/Slider';
import Testimonials from './Components/pages/Testimonials';
import OurTeam from './Components/pages/OurTeam';
import InsurancePage from './Components/InsurancePage';
import GynaecologyClinic from './Components/pages/GynaecologyClinic';
import DentalClinic from './Components/pages/DentalClinic';
import WhatsappIcon from './Components/pages/WhatsappIcon';
import SpecializedClinicsTimetable from './Components/pages/SpecializedClinicsTimetable';

const App = () => {
  return (
    <Router>
     <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path='/ClinicsCarousel' element={<ClinicsCarousel />} />
        <Route path='/BookAppointment' element={<BookAppointment />} />
        <Route path='/pediatrics' element={<pediatrics />} />
        <Route path='/CardiologyClinic' element={<CardiologyClinic />} />
        <Route path='/DermatologyClinic' element={<DermatologyClinic />} />
        <Route path='/ENTClinic' element={<ENTClinic />} />
        <Route path='/GeneralSurgeryClinic' element={<GeneralSurgeryClinic />} />
        <Route path='/MaxillofacialSurgeon' element={<MaxillofacialSurgeon />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/Doctors' element={<Doctors />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/PaediatricClinic' element={<PaediatricClinic />} />
        <Route path='/EmergencyCare' element={<EmergencyCare />} />
        <Route path='/Slider' element={<Slider />} />
        <Route path='/Testimonials' element={<Testimonials />} />
        <Route path='/OurTeam' element={<OurTeam />} />
        <Route path='/InsurancePage' element={<InsurancePage />} />
        <Route path='/GynaecologyClinic' element={<GynaecologyClinic />} />
        <Route path='/DentalClinic' element={<DentalClinic />} />
        <Route path='/WhatsappIcon' element={<WhatsappIcon />} />
        <Route path='/SpecializedClinicsTimetable' element={<SpecializedClinicsTimetable />} />

      
        {/* Add more routes as needed */}
      </Routes>
      
    </Router>
    
  );
};

export default App;
