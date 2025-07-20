import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Hammer } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const menuVariants = {
    closed: {
      y: '-100%',
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const linkVariants = {
    closed: {
      opacity: 0,
      y: -20,
    },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-warm-200">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 text-primary-600">
              <Hammer size={28} />
              <span className="text-xl font-bold">HandyPro</span>
            </Link>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="relative w-8 h-8 flex items-center justify-center focus:outline-none"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={isMenuOpen ? 'open' : 'closed'}
                className="w-6 h-6 relative"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 },
                  }}
                  className="absolute top-0 left-0 w-full h-0.5 bg-warm-800 transform origin-center"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  className="absolute top-2.5 left-0 w-full h-0.5 bg-warm-800"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 },
                  }}
                  className="absolute top-5 left-0 w-full h-0.5 bg-warm-800 transform origin-center"
                />
              </motion.div>
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-16 left-0 right-0 bottom-0 z-40 bg-white"
          >
            <div className="container-custom h-full flex items-center justify-center">
              <nav className="text-center">
                <ul className="space-y-8">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      custom={index}
                      variants={linkVariants}
                      initial="closed"
                      animate="open"
                    >
                      <Link
                        to={item.path}
                        onClick={toggleMenu}
                        className={`text-4xl md:text-5xl font-light transition-colors duration-200 hover:text-primary-600 ${
                          location.pathname === item.path
                            ? 'text-primary-600'
                            : 'text-warm-800'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;