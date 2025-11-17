import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import BarraConfianza from '@/components/BarraConfianza';
import Servicios from '@/components/Servicios';
import PorQueElegirnos from '@/components/PorQueElegirnos';
import Testimonios from '@/components/Testimonios';
import Proceso from '@/components/Proceso';
import AreasServicio from '@/components/AreasServicio';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <BarraConfianza />
      <Servicios />
      <PorQueElegirnos />
      <Testimonios />
      <Proceso />
      <AreasServicio />
      <ContactForm />
      <Footer />
    </div>
  );
}