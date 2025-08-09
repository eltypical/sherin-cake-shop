'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    orderType: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-script text-xl mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-h1 font-serif font-bold text-dark mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to order your perfect cake? We&apos;d love to hear from you and help 
            make your celebration extra special.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card p-6">
              <h3 className="text-xl font-serif font-semibold text-dark mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-dark">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-CAKE</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-dark">Email</p>
                    <p className="text-gray-600">orders@sherincakeshop.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-dark">Address</p>
                    <p className="text-gray-600">123 Sweet Street<br />New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-dark">Hours</p>
                    <p className="text-gray-600">
                      Mon-Fri: 9AM-7PM<br />
                      Sat: 8AM-8PM<br />
                      Sun: 10AM-6PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="card p-6">
              <h3 className="text-xl font-serif font-semibold text-dark mb-4">
                Find Us
              </h3>
              <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Interactive Map</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="card p-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-serif font-semibold text-dark mb-6">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="orderType" className="block text-sm font-medium text-dark mb-2">
                    Order Type
                  </label>
                  <select
                    id="orderType"
                    name="orderType"
                    value={formData.orderType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select type</option>
                    <option value="wedding">Wedding Cake</option>
                    <option value="birthday">Birthday Cake</option>
                    <option value="corporate">Corporate Order</option>
                    <option value="custom">Custom Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell us about your order requirements..."
                />
              </div>

              <motion.button
                type="submit"
                className="btn-primary w-full flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={20} />
                <span>Send Message</span>
              </motion.button>
            </form>

            <p>
              Feel free to reach out to Sherin&apos;s Cake Shop for any inquiries.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
