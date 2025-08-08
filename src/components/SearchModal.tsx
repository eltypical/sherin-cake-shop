'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Search } from 'lucide-react'
import { searchProducts, formatPrice } from '../lib/data'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[]>([])

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery)
    if (searchQuery.trim()) {
      const searchResults = searchProducts(searchQuery)
      setResults(searchResults)
    } else {
      setResults([])
    }
  }

  const handleClose = () => {
    setQuery('')
    setResults([])
    onClose()
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
            onClick={handleClose}
          />

          {/* Search Modal */}
          <motion.div
            className="fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl bg-white rounded-2xl shadow-2xl z-50 mx-4"
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Search Header */}
            <div className="flex items-center p-6 border-b">
              <div className="flex-1 relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for cakes, cupcakes, or cookies..."
                  value={query}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  autoFocus
                />
              </div>
              <motion.button
                onClick={handleClose}
                className="ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto p-6">
              {query && results.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No products found for "{query}"</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Try searching for "chocolate cake" or "cupcakes"
                  </p>
                </div>
              ) : results.length > 0 ? (
                <div className="space-y-3">
                  <p className="text-sm text-gray-500 mb-4">
                    Found {results.length} result{results.length !== 1 ? 's' : ''}
                  </p>
                  {results.map((product, index) => (
                    <motion.div
                      key={product.id}
                      className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      onClick={handleClose}
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm font-medium">
                          {product.name.substring(0, 2)}
                        </span>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-medium text-dark">{product.name}</h3>
                        <p className="text-sm text-gray-600 truncate">{product.description}</p>
                        <p className="text-sm text-primary font-medium mt-1">
                          {formatPrice(product.price)}
                        </p>
                      </div>

                      <div className="text-right">
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {product.category}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Search size={48} className="text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-500 mb-2">
                    Search our delicious collection
                  </h3>
                  <p className="text-gray-400">
                    Find your perfect cake, cupcake, or sweet treat
                  </p>
                </div>
              )}
            </div>

            {/* Popular Searches */}
            {!query && (
              <div className="border-t p-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Popular Searches</h4>
                <div className="flex flex-wrap gap-2">
                  {['Chocolate Cake', 'Wedding Cake', 'Cupcakes', 'Birthday Cake', 'Custom Design'].map((term) => (
                    <motion.button
                      key={term}
                      onClick={() => handleSearch(term)}
                      className="text-sm bg-gray-100 hover:bg-primary hover:text-white px-3 py-1 rounded-full transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {term}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default SearchModal
