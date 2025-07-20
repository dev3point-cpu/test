import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Downtown District',
      rating: 5,
      text: 'HandyPro transformed our kitchen with professional tile work and plumbing updates. Their attention to detail was exceptional, and they completed everything on time and within budget.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b977?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Michael Chen',
      location: 'Riverside Heights',
      rating: 5,
      text: 'Quick response for emergency electrical work. The team was professional, knowledgeable, and fixed our power issues safely. Highly recommend their services!',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Emily Rodriguez',
      location: 'Garden Valley',
      rating: 5,
      text: 'From painting our living room to fixing squeaky doors, HandyPro handled everything perfectly. Their friendly service and quality work made our home feel brand new.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
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
      scale: 0.8,
      y: 50 
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className={`${
              i < rating ? 'text-beige-400 fill-current' : 'text-warm-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="section-padding bg-warm-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-warm-800 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-warm-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about our handyman services.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 relative"
            >
              <div className="absolute top-6 right-6 text-primary-200">
                <Quote size={32} />
              </div>
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-warm-800 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-warm-600 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              <StarRating rating={testimonial.rating} />
              
              <p className="text-warm-700 mt-4 leading-relaxed">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-warm-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">5★</div>
              <div className="text-warm-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">24hr</div>
              <div className="text-warm-600">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-warm-600">Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;