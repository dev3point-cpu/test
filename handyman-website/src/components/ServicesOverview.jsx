import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Paintbrush, 
  Zap, 
  Droplets, 
  Hammer, 
  Drill,
  ArrowRight 
} from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: Hammer,
      title: 'General Repairs',
      description: 'From squeaky doors to broken fixtures, we handle all your general home repair needs.',
      image: 'https://images.unsplash.com/photo-1606887196817-4d4f37b78f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      icon: Paintbrush,
      title: 'Painting & Drywall',
      description: 'Professional interior and exterior painting, plus drywall repair and installation.',
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      icon: Zap,
      title: 'Electrical Work',
      description: 'Safe and reliable electrical repairs, outlet installation, and lighting solutions.',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      icon: Droplets,
      title: 'Plumbing Services',
      description: 'Leaky faucets, clogged drains, and toilet repairs handled by experienced professionals.',
      image: 'https://images.unsplash.com/photo-1607473069935-fb394d3a9c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      icon: Drill,
      title: 'Installation Services',
      description: 'TV mounting, shelf installation, furniture assembly, and more.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      icon: Wrench,
      title: 'Home Maintenance',
      description: 'Regular maintenance services to keep your home in perfect condition year-round.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
            Our Services
          </h2>
          <p className="text-xl text-warm-600 max-w-3xl mx-auto">
            From minor repairs to major improvements, we provide comprehensive handyman services 
            to keep your home in perfect condition.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group bg-warm-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
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
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            to="/services"
            className="btn-primary group inline-flex items-center text-lg"
          >
            View All Services
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;