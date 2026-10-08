/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveSimulator } from './components/InteractiveSimulator';
import { NeedsCalculator } from './components/NeedsCalculator';
import { ServicesSection } from './components/ServicesSection';
import { AboutUs } from './components/AboutUs';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <InteractiveSimulator />
        <NeedsCalculator />
        <ServicesSection />
        <AboutUs />
        <CaseStudiesSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
