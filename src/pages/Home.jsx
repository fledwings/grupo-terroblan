import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import VentajasComerciales from '../components/VentajasComerciales';
import Solutions from '../components/Solutions';
import CapacidadTecnica from '../components/CapacidadTecnica';
import Clients from '../components/Clients';
import Locations from '../components/Locations';
import ContactCTA from '../components/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <VentajasComerciales />
      <Solutions />
      <CapacidadTecnica />
      <Clients />
      <Locations />
      <ContactCTA />
    </>
  );
}