import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const services = [
    'General Repairs',
    'Painting & Drywall',
    'Electrical Work',
    'Plumbing Services',
    'Installation Services',
    'Home Maintenance',
    'Kitchen & Bath',
    'Custom Projects',
    'Other'
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '(123) 456-7890',
      link: 'tel:+1234567890'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@handypro.com',
      link: 'mailto:info@handypro.com'
    },
    {
      icon: MapPin,
      title: 'Service Area',
      details: 'Downtown & Surrounding Areas',
      link: null
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon-Fri: 7AM-7PM, Sat: 8AM-5PM',
      link: null
    }
  ];

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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Ready to get started? Get in touch for your free consultation and quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              const content = (
                <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-primary-600" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-warm-800 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-warm-600">
                    {info.details}
                  </p>
                </div>
              );

              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {info.link ? (
                    <a href={info.link} className="block hover:scale-105 transition-transform duration-200">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-warm-800 mb-6">
                Get Your Free Quote
              </h2>
              <p className="text-lg text-warm-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a detailed quote for your project.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                >
                  <CheckCircle className="text-green-600 mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-green-700">
                    Your message has been sent successfully. We'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-warm-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-warm-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-warm-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-warm-700 mb-2">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-warm-700 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-vertical"
                      placeholder="Please describe your project in detail. Include any specific requirements, timeline, or questions you may have."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary text-lg flex items-center justify-center"
                  >
                    <Send className="mr-2" size={20} />
                    Send Message
                  </motion.button>

                  <p className="text-sm text-warm-500 text-center">
                    * Required fields. We'll respond within 24 hours.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-warm-800 mb-6">
                Service Area
              </h2>
              <p className="text-lg text-warm-600 mb-8">
                We proudly serve the downtown area and surrounding neighborhoods. 
                Contact us to confirm service availability in your specific location.
              </p>

              {/* Google Maps Embed */}
              <div className="bg-warm-100 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2184066076294!2d-74.00596368459394!3d40.71392937933044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e10317b%3A0x1e0df2aa10b8c28!2sDowntown%20Manhattan%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1699024598762!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HandyPro Service Area"
                />
              </div>

              <div className="mt-6 p-6 bg-warm-50 rounded-lg">
                <h3 className="text-xl font-semibold text-warm-800 mb-4">
                  Quick Contact
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:+1234567890"
                    className="flex items-center text-warm-700 hover:text-primary-600 transition-colors"
                  >
                    <Phone className="mr-3" size={18} />
                    (123) 456-7890
                  </a>
                  <a
                    href="mailto:info@handypro.com"
                    className="flex items-center text-warm-700 hover:text-primary-600 transition-colors"
                  >
                    <Mail className="mr-3" size={18} />
                    info@handypro.com
                  </a>
                  <div className="flex items-center text-warm-700">
                    <Clock className="mr-3" size={18} />
                    Mon-Fri: 7AM-7PM, Sat: 8AM-5PM
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Emergency Service?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              For urgent repairs that can't wait, call us directly. We offer emergency services 
              for plumbing leaks, electrical issues, and security concerns.
            </p>
            <motion.a
              href="tel:+1234567890"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center text-2xl px-8 py-4 bg-beige-400 hover:bg-beige-500 text-warm-800 font-bold rounded-lg transition-colors duration-200"
            >
              <Phone className="mr-3" size={24} />
              Emergency: (123) 456-7890
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;