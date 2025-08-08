'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  
  const categories = ['All', 'Weddings', 'Birthdays', 'Corporate', 'Custom']
  
  const galleryImages = [
    { id: 1, category: 'Weddings', title: 'Elegant Wedding Cake' },
    { id: 2, category: 'Birthdays', title: 'Rainbow Birthday Cake' },
    { id: 3, category: 'Corporate', title: 'Corporate Event Cake' },
    { id: 4, category: 'Custom', title: 'Custom Character Cake' },
    { id: 5, category: 'Weddings', title: 'Floral Wedding Design' },
    { id: 6, category: 'Birthdays', title: 'Princess Theme Cake' },
  ]

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <section id="gallery" className="section-padding bg-cream">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-script text-xl mb-4 block">
            Our Work
          </span>
          <h2 className="text-h1 font-serif font-bold text-dark mb-6">
            Gallery of Creations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of beautiful cakes and desserts that have made 
            countless celebrations memorable and delicious.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative h-64 bg-gradient-to-br from-primary to-accent rounded-xl overflow-hidden cursor-pointer group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              layout
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-lg font-serif">{image.title}</span>
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
