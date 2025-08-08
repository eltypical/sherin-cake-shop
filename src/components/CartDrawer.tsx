'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { useCart } from '../lib/contexts/CartContext'
import { formatPrice } from '../lib/data'

const CartDrawer = () => {
  const { items, isOpen, closeCart, updateQuantity, removeItem, total } = useCart()

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
            onClick={closeCart}
          />

          {/* Cart Drawer */}
          <motion.div
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-xl font-serif font-semibold text-dark">
                  Shopping Cart ({items.length})
                </h2>
                <motion.button
                  onClick={closeCart}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingBag size={48} className="text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-500 mb-2">
                      Your cart is empty
                    </h3>
                    <p className="text-gray-400">
                      Add some delicious cakes to get started!
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item, index) => (
                      <motion.div
                        key={`${item.product.id}-${item.selectedSize || 'default'}`}
                        className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-200">
                          <span className="absolute inset-0 flex items-center justify-center text-xs text-gray-500">
                            {item.product.name.substring(0, 2)}
                          </span>
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-dark truncate">
                            {item.product.name}
                          </h4>
                          {item.selectedSize && (
                            <p className="text-sm text-gray-500">
                              Size: {item.selectedSize}
                            </p>
                          )}
                          {item.selectedFlavor && (
                            <p className="text-sm text-gray-500">
                              Flavor: {item.selectedFlavor}
                            </p>
                          )}
                          <p className="text-sm font-medium text-primary">
                            {formatPrice(item.product.price)}
                          </p>
                        </div>

                        <div className="flex items-center space-x-2">
                          <motion.button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-200 rounded"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Minus size={14} />
                          </motion.button>
                          
                          <span className="w-8 text-center font-medium">
                            {item.quantity}
                          </span>
                          
                          <motion.button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-200 rounded"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Plus size={14} />
                          </motion.button>
                        </div>

                        <motion.button
                          onClick={() => removeItem(item.product.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Trash2 size={16} />
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="border-t p-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-lg font-semibold text-dark">Total:</span>
                    <span className="text-2xl font-bold text-primary">
                      {formatPrice(total)}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <motion.button
                      className="btn-primary w-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Proceed to Checkout
                    </motion.button>
                    
                    <motion.button
                      onClick={closeCart}
                      className="btn-secondary w-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Continue Shopping
                    </motion.button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default CartDrawer
