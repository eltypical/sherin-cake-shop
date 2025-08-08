'use client'

import { motion } from 'framer-motion'
import { Heart, Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ]

  const categories = [
    'Layer Cakes',
    'Cupcakes',
    'Cookies',
    'Custom Cakes',
    'Wedding Cakes',
    'Birthday Cakes',
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-script text-xl">S</span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold">Sherin Cake Shop</h3>
                <p className="text-sm text-gray-300 font-script">Crafted with Love</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Creating memorable experiences through exceptional cakes and desserts, 
              made with the finest ingredients and traditional techniques.
            </p>

            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="bg-primary/20 p-3 rounded-full hover:bg-primary transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="bg-primary/20 p-3 rounded-full hover:bg-primary transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="bg-primary/20 p-3 rounded-full hover:bg-primary transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-serif font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-serif font-semibold">Categories</h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category}>
                  <a
                    href="#products"
                    className="text-gray-300 hover:text-accent transition-colors duration-200"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-serif font-semibold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-accent" />
                <span className="text-gray-300">+1 (555) 123-CAKE</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-accent" />
                <span className="text-gray-300">orders@sherincakeshop.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-accent" />
                <span className="text-gray-300">123 Sweet Street, NY 10001</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="font-medium mb-3">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-primary text-white placeholder-gray-400"
                />
                <motion.button
                  className="bg-primary px-4 py-2 rounded-r-lg hover:bg-primary-dark transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>&copy; 2024 Sherin Cake Shop. All rights reserved.</span>
              <Heart size={16} className="text-accent" />
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-300">
              <a href="#" className="hover:text-accent transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-accent transition-colors duration-200">
                Cookie Policy
              </a>
            </div>

            <motion.button
              onClick={scrollToTop}
              className="bg-primary/20 p-2 rounded-full hover:bg-primary transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Back to top</span>
              ↑
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
