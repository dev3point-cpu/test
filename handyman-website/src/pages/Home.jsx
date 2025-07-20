import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Phone, Mail, MapPin } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ServicesOverview from '../components/ServicesOverview';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <main className="pt-16">
      <HeroSection />
      <ServicesOverview />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
};

export default Home;