// src/Components/InsuranceLogos.js
import React from 'react';

// Import all the logos
import AAR from '../pages/Images/aar.png';;
import Britam from '../pages/Images/britam.png';;
import CIC from '../pages/Images/cic.png';;
import FIDELITY from '../pages/Images/fidelity.png';;
import KEBS from '../pages/Images/kebs.jpg';;
import KENBRIGHT from '../pages/Images/kenbright.png';;
import SHA from '../pages/Images/sha.webp';;
import EAGLES from '../pages/Images/Eagle.png';;
import MTIBA from '../pages/Images/mtiba.png';;
import GA from '../pages/Images/ga.png';;
import MUA from '../pages/Images/mua.png';;
import FIRSTASSURANCE from '../pages/Images/first-assurance.png';;
import KCB from '../pages/Images/kcb.png';;
import MEDILINK from '../pages/Images/medilink.png';;
import DEFMIS from '../pages/Images/defmis.png';;
import APA from '../pages/Images/APA.png';;
import LIAISON from '../pages/Images/LIAISON.png';;
import HERITAGE from '../pages/Images/heritage.png';;
import COAT from '../pages/Images/coat.png';;
import PACIS from '../pages/Images/pacis.png';;
// Add imports for all other logos here...

const InsuranceLogos = () => {
  const logos = [
    { src: AAR, alt: 'AAR Insurance' },
    { src: Britam, alt: 'Britam Insurance' },
    { src: CIC, alt: 'APA Insurance' },
    { src: FIDELITY, alt: 'Fidelity Insurance' },
    { src: KEBS, alt: 'Kebs Insurance' },
    { src: KENBRIGHT, alt: 'Kenbright Insurance' },
    { src: SHA, alt: 'SHA Insurance' },
    { src: EAGLES, alt: 'Eagles Insurance' },
    { src: MTIBA, alt: 'M-tiba Insurance' },
    { src: GA, alt: 'GA Insurance' },
    { src: MUA, alt: 'MUA Insurance' },
    { src: FIRSTASSURANCE, alt: 'First Assurance Insurance' },
    { src: KCB, alt: 'KCB Insurance' },
    { src: MEDILINK, alt: 'Medilink Insurance' },
    { src: DEFMIS, alt: 'Defmis Insurance' },
    { src: APA, alt: 'APA Insurance' },
    { src: LIAISON, alt: 'LIAISON Insurance' },
    { src: HERITAGE, alt: 'HERITAGE Insurance' },
    { src: COAT, alt: 'PSI Insurance' },
    { src: PACIS, alt: 'Pacis Insurance' },
    // Add more logo objects here...
  ];

  return (
    <section className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-8 mb-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Our Partners</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center">
            <img src={logo.src} alt={logo.alt} className="h-16" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default InsuranceLogos;
