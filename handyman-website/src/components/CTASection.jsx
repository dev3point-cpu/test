import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, Clock } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="section-padding bg-primary-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Get a free quote for your next home improvement project. 
              Our experienced team is ready to help transform your space.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-white">
                <Phone className="mr-3" size={20} />
                <span className="text-lg">(123) 456-7890</span>
              </div>
              <div className="flex items-center text-white">
                <Mail className="mr-3" size={20} />
                <span className="text-lg">info@handypro.com</span>
              </div>
              <div className="flex items-center text-white">
                <Clock className="mr-3" size={20} />
                <span className="text-lg">Mon-Fri: 7AM-7PM, Sat: 8AM-5PM</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact"
                className="btn-secondary group inline-flex items-center text-lg justify-center"
              >
                Get Free Quote
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              
              <a 
                href="tel:+1234567890"
                className="inline-flex items-center justify-center text-lg px-8 py-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium rounded-lg transition-colors duration-200"
              >
                <Phone className="mr-2" size={20} />
                Call Now
              </a>
            </div>
          </motion.div>

          {/* Right Content - Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-primary-100 mb-6">
              Subscribe to our newsletter for home maintenance tips, seasonal reminders, 
              and exclusive offers.
            </p>
            
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-beige-400 hover:bg-beige-500 text-warm-800 font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Subscribe for Tips & Offers
              </motion.button>
            </form>
            
            <p className="text-primary-200 text-sm mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;