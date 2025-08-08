'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, Mail, Instagram, Facebook } from 'lucide-react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navigationItems: { name: string; href: string }[]
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navigationItems }) => {
  const handleNavClick = (href: string) => {
    onClose()
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Mobile Menu */}
          <motion.div
            className="fixed right-0 top-0 h-full w-80 bg-white z-50 shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-script text-lg">S</span>
                  </div>
                  <span className="font-serif font-bold text-primary">Menu</span>
                </div>
                <motion.button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 py-6">
                <nav className="space-y-2 px-6">
                  {navigationItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className="w-full text-left py-4 px-4 text-lg font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors duration-200"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </nav>

                {/* Quick Actions */}
                <div className="px-6 mt-8">
                  <div className="space-y-4">
                    <motion.button
                      className="btn-primary w-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Order Now
                    </motion.button>
                    
                    <motion.button
                      className="btn-secondary w-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Menu
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t p-6">
                <div className="space-y-4">
                  {/* Contact Info */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Phone size={16} />
                      <span className="text-sm">+1 (555) 123-CAKE</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Mail size={16} />
                      <span className="text-sm">orders@sherincakeshop.com</span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-4 pt-4">
                    <motion.a
                      href="#"
                      className="bg-primary/20 p-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Instagram size={16} />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="bg-primary/20 p-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Facebook size={16} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu
