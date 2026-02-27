"use client";

import Page from "@/components/UI/Page";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ServicesSection from "./components/ServicesSection";

const HomePage = () => (
  <Page>
    <HeroSection />
    <AboutSection />
    <TestimonialsSection />
    <ServicesSection />
  </Page>
);

export default HomePage;
