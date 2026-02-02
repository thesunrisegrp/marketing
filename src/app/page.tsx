'use client';

import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Leadership from '../components/Leadership';
import Divisions from '../components/Divisions';
import GlobalNetwork from '../components/GlobalNetwork';
import QualityCertifications from '../components/QualityCertifications';
import Sustainability from '../components/Sustainability';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Leader, Certification, NavLink } from '../types';

export default function Home() {
  useScrollReveal();

  const navLinks: NavLink[] = [
    { label: 'About Us', href: '#about', children: [
      { label: 'Mission', href: '#mission' },
      { label: 'Team', href: '#leadership' }
    ]},
    { label: 'Businesses', href: '#businesses' },
    { label: 'Network', href: '#network' },
    { label: 'Quality', href: '#quality' },
    // { label: 'Sustainability', href: '#sustainability' },
    { label: 'Contact', href: '#contact' },
  ];

  const certifications: Certification[] = [
    { id: 'reach', title: 'REACH-Compliant', desc: 'Adhering to EU regulations for chemical substance safety and registration.' },
    { id: 'international', title: 'International-Grade Quality', desc: 'Meeting the highest global standards for quality and excellence.' },
    { id: 'export', title: 'Export-Ready Specifications', desc: 'Products manufactured to meet international export requirements and standards.' },
    { id: 'batch', title: 'Controlled Batch Consistency', desc: 'Ensuring uniform quality and specifications across all production batches.' }
  ];

  const leaders: Leader[] = [
    {
      name: "Bhavesh Waghela",
      role: "CMD",
      image: "/CMD.jpeg",
      bio: "Leading the strategic vision and overall direction of The Sunrise Group with decades of industry expertise."
    },
    {
      name: "Abhishek Waghela",
      role: "COO",
      image: "/COO.jpeg",
      bio: "Spearheading global operations and ensuring seamless execution of business strategies across all divisions."
    },
    {
      name: "Mitali Patel",
      role: "CFO",
      image: "/CFO.jpeg",
      bio: "Managing financial operations and ensuring sustainable growth through strategic financial planning and oversight."
    },
    {
      name: "Krish Parekh",
      role: "CTO",
      image: "/CTO.jpg",
      bio: "Driving technological innovation and digital transformation to enhance operational efficiency and market competitiveness."
    }
  ];

  return (
    <div className="min-h-screen font-sans bg-white overflow-x-hidden">
      <Navigation navLinks={navLinks} />
      <Hero />
      <About />
      <Leadership leaders={leaders} />
      <Divisions />
      <GlobalNetwork />
      <QualityCertifications certifications={certifications} />
      {/* <Sustainability /> */}
      <Contact />
      <Footer />
    </div>
  );
}
