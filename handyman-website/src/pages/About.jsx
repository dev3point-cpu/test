import { motion } from 'framer-motion';
import { Award, Users, Clock, Heart, Shield, Wrench } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Mike Johnson',
      role: 'Founder & Lead Handyman',
      experience: '15+ Years Experience',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Master craftsman with expertise in electrical, plumbing, and general repairs.'
    },
    {
      name: 'Sarah Martinez',
      role: 'Project Manager',
      experience: '8+ Years Experience',
      image: 'https://images.unsplash.com/photo-1594824110398-8d6b6832e6b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Ensures every project runs smoothly and customers are completely satisfied.'
    },
    {
      name: 'David Chen',
      role: 'Electrical Specialist',
      experience: '12+ Years Experience',
      image: 'https://images.unsplash.com/photo-1556458530-5e1ee01d9d6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Licensed electrician specializing in residential electrical systems and repairs.'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Reliability',
      description: 'We show up on time and deliver exactly what we promise.'
    },
    {
      icon: Heart,
      title: 'Care',
      description: 'We treat every home as if it were our own.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'We take pride in our craftsmanship and attention to detail.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We\'re committed to serving our local community with integrity.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '15+', label: 'Years in Business' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '24/7', label: 'Emergency Service' }
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
              About HandyPro
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Your trusted local handyman service, dedicated to keeping your home 
              in perfect condition for over 15 years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-warm-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-warm-600">
                <p>
                  HandyPro started in 2008 when founder Mike Johnson realized there was a 
                  real need for reliable, honest handyman services in our community. After 
                  years of working for large construction companies, Mike wanted to bring 
                  personal service back to home repairs.
                </p>
                <p>
                  What began as a one-man operation has grown into a trusted team of skilled 
                  professionals. We've completed over 1,000 projects, but we still maintain 
                  that personal touch that made us who we are today.
                </p>
                <p>
                  Every job, whether it's fixing a squeaky door or renovating a kitchen, 
                  gets our full attention and commitment to quality. That's the HandyPro difference.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Handyman at work"
                className="rounded-lg object-cover h-48"
              />
              <img 
                src="https://images.unsplash.com/photo-1609372332255-611485350f25?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Tools and equipment"
                className="rounded-lg object-cover h-48 mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Home renovation"
                className="rounded-lg object-cover h-48 -mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1606887196817-4d4f37b78f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Quality workmanship"
                className="rounded-lg object-cover h-48"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-warm-800 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-warm-600 mb-12">
              To provide honest, reliable, and high-quality handyman services that help 
              homeowners maintain and improve their most valuable asset – their home.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="text-center bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-primary-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-warm-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-warm-600">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-beige-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-100 text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Team
            </h2>
            <p className="text-xl text-warm-600 max-w-3xl mx-auto">
              Our experienced professionals are the heart of HandyPro. 
              Each team member brings years of expertise and a commitment to excellence.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="bg-warm-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-warm-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-beige-600 text-sm mb-3">
                    {member.experience}
                  </p>
                  <p className="text-warm-600">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-warm-800 mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-warm-600 mb-8 max-w-2xl mx-auto">
              Experience the HandyPro difference for yourself. 
              Contact us today for your free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg inline-flex items-center justify-center"
              >
                Get Your Free Quote
              </motion.a>
              <motion.a
                href="tel:+1234567890"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg inline-flex items-center justify-center"
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

export default About;