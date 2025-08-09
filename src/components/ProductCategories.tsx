'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { categories } from '../lib/data'

const ProductCategories = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="products" className="section-padding bg-cream">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-script text-xl mb-4 block">
            Our Specialties
          </span>
          <h2 className="text-h1 font-serif font-bold text-dark mb-6">
            Delicious Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From elegant layer cakes to delightful cupcakes, explore our carefully crafted 
            categories of sweet perfection, each made with the finest ingredients.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              className="group cursor-pointer"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="card overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary via-primary-light to-accent flex items-center justify-center">
                    <span className="text-white text-lg font-serif">{category.name}</span>
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-primary">
                      {category.productCount} items
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.button
                      className="bg-white text-primary px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>View Products</span>
                      <ArrowRight size={16} />
                    </motion.button>
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {category.description}
                  </p>
                  
                  <motion.div
                    className="flex items-center text-primary font-medium group-hover:text-accent transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span>Explore</span>
                    <ArrowRight size={16} className="ml-2" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/products">
            <motion.button
              className="btn-primary text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Products
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductCategories
