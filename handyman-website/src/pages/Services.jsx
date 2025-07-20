import { motion } from 'framer-motion';
import { 
  Hammer, 
  Paintbrush, 
  Zap, 
  Droplets, 
  Drill, 
  Wrench,
  Home,
  Settings,
  Shield,
  Clock,
  DollarSign,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Hammer,
      title: 'General Repairs',
      description: 'Complete home repair solutions for all your everyday needs.',
      features: ['Door and window repairs', 'Squeaky hinge fixes', 'Cabinet adjustments', 'Minor carpentry work'],
      image: 'https://images.unsplash.com/photo-1606887196817-4d4f37b78f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Paintbrush,
      title: 'Painting & Drywall',
      description: 'Professional painting and drywall services to refresh your space.',
      features: ['Interior and exterior painting', 'Drywall repair and installation', 'Texture matching', 'Color consultation'],
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Zap,
      title: 'Electrical Work',
      description: 'Safe and certified electrical repairs and installations.',
      features: ['Outlet installation', 'Light fixture mounting', 'Switch replacements', 'Electrical troubleshooting'],
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Droplets,
      title: 'Plumbing Services',
      description: 'Reliable plumbing solutions for leaks, clogs, and installations.',
      features: ['Faucet repairs', 'Toilet fixes', 'Drain cleaning', 'Pipe leak repairs'],
      image: 'https://images.unsplash.com/photo-1607473069935-fb394d3a9c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Drill,
      title: 'Installation Services',
      description: 'Professional installation of fixtures, appliances, and furniture.',
      features: ['TV wall mounting', 'Shelf installation', 'Furniture assembly', 'Appliance hookup'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Wrench,
      title: 'Home Maintenance',
      description: 'Preventive maintenance to keep your home in perfect condition.',
      features: ['Seasonal inspections', 'Gutter cleaning', 'Caulking and sealing', 'HVAC filter changes'],
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Home,
      title: 'Kitchen & Bath',
      description: 'Specialized services for your kitchen and bathroom needs.',
      features: ['Tile repairs', 'Grout cleaning', 'Cabinet hardware', 'Fixture updates'],
      image: 'https://images.unsplash.com/photo-1556909114-9ba7d8a6c673?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Settings,
      title: 'Custom Projects',
      description: 'Unique solutions tailored to your specific requirements.',
      features: ['Custom storage solutions', 'Built-in installations', 'Home organization', 'Accessibility improvements'],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed and insured for your peace of mind'
    },
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'Same-day service available for urgent repairs'
    },
    {
      icon: DollarSign,
      title: 'Fair Pricing',
      description: 'Transparent, competitive pricing with no hidden fees'
    },
    {
      icon: CheckCircle,
      title: 'Quality Guarantee',
      description: '100% satisfaction guarantee on all our work'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              From minor repairs to major improvements, we're your trusted partner 
              for all home maintenance and improvement needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  variants={cardVariants}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-primary-600" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold text-warm-800 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-warm-600">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-warm-800 mb-6">
              What We Do
            </h2>
            <p className="text-xl text-warm-600 max-w-3xl mx-auto">
              Professional handyman services covering every aspect of home maintenance and improvement.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={cardVariants}
                  className="group bg-warm-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="md:w-1/2 p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                          <IconComponent className="text-primary-600" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-warm-800">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-warm-600 mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-warm-700">
                            <CheckCircle className="text-primary-500 mr-2" size={16} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Our Services?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Don't see exactly what you need? Contact us anyway! 
              We handle a wide variety of home improvement projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg inline-flex items-center justify-center"
              >
                Get Free Quote
              </motion.a>
              <motion.a
                href="tel:+1234567890"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center text-lg px-8 py-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Call (123) 456-7890
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Services;