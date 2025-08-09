'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Heart, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { getFeaturedProducts, formatPrice } from '../lib/data'
import { useCart } from '../lib/contexts/CartContext'
import { Product } from '../types'

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [favorites, setFavorites] = useState<string[]>([])
  const { addItem } = useCart()

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProducts.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length)
  }

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const handleAddToCart = (product: Product) => {
    addItem(product, 1)
    // Could add a toast notification here
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-script text-xl mb-4 block">
            Customer Favorites
          </span>
          <h2 className="text-h1 font-serif font-bold text-dark mb-6">
            Featured Creations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our most loved cakes and desserts, carefully selected based on 
            customer reviews and our pastry chef&apos;s recommendations.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={24} className="text-primary" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={24} className="text-primary" />
          </motion.button>

          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex"
              animate={{ x: `${-currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {featuredProducts.map((product) => (
                <div key={product.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]">
                    {/* Product Image */}
                    <motion.div
                      className="relative h-96 lg:h-[500px] overflow-hidden rounded-2xl"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                      
                      {/* Favorite Button */}
                      <motion.button
                        onClick={() => toggleFavorite(product.id)}
                        className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Heart
                          size={20}
                          className={`${
                            favorites.includes(product.id)
                              ? 'text-red-500 fill-current'
                              : 'text-gray-600'
                          }`}
                        />
                      </motion.button>

                      {/* Featured Badge */}
                      <div className="absolute top-4 left-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    </motion.div>

                    {/* Product Details */}
                    <motion.div
                      className="space-y-6"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <div>
                        <span className="text-primary font-medium text-sm uppercase tracking-wide">
                          {product.category}
                        </span>
                        <h3 className="text-3xl font-serif font-bold text-dark mt-2 mb-4">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      {/* Rating */}
                      {product.rating && (
                        <div className="flex items-center space-x-2">
                          <div className="flex space-x-1">
                            {renderStars(product.rating)}
                          </div>
                          <span className="text-gray-600 text-sm">
                            ({product.rating}/5)
                          </span>
                        </div>
                      )}

                      {/* Ingredients */}
                      {product.ingredients && (
                        <div>
                          <h4 className="font-semibold text-dark mb-2">Premium Ingredients:</h4>
                          <div className="flex flex-wrap gap-2">
                            {product.ingredients.slice(0, 4).map((ingredient, idx) => (
                              <span
                                key={idx}
                                className="bg-cream px-3 py-1 rounded-full text-sm text-gray-700"
                              >
                                {ingredient}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Price */}
                      <div className="flex items-center space-x-4">
                        <span className="text-3xl font-bold text-primary">
                          {formatPrice(product.price)}
                        </span>
                        {product.sizes && product.sizes.length > 1 && (
                          <span className="text-sm text-gray-500">
                            Starting from
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-4">
                        <motion.button
                          onClick={() => handleAddToCart(product)}
                          className="btn-primary flex items-center space-x-2 flex-1 justify-center"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ShoppingCart size={20} />
                          <span>Add to Cart</span>
                        </motion.button>

                        <motion.button
                          className="btn-secondary px-6"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          View Details
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {featuredProducts.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Auto-play controls could be added here */}
      </div>
    </section>
  )
}

export default FeaturedProducts
