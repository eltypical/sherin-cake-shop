'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star, Search, Grid, List } from 'lucide-react';
import { products, categories, getProductsByCategory } from '../../lib/data';
import { useCart } from '../../lib/contexts/CartContext';
import { useFavorites } from '../../lib/contexts/FavoritesContext';
import Image from 'next/image';
import { Product } from '../../types';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  
  const { addToCart } = useCart();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const filteredProducts = useMemo(() => {
    let filtered = selectedCategory === 'All' 
      ? products 
      : getProductsByCategory(selectedCategory);

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by price range
    filtered = filtered.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedCategory, searchTerm, sortBy, priceRange]);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };

  const handleToggleFavorite = (product: Product) => {
    if (isFavorite(product.id)) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-rose-600">Products</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our complete collection of handcrafted cakes, cupcakes, cookies, and custom creations
          </p>
        </motion.div>

        {/* Filters and Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            >
              <option value="All">All Categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>

            {/* View Mode */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex-1 flex items-center justify-center py-2 px-3 rounded-md transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-white text-rose-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <Grid className="w-4 h-4 mr-2" />
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex-1 flex items-center justify-center py-2 px-3 rounded-md transition-colors ${
                  viewMode === 'list'
                    ? 'bg-white text-rose-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <List className="w-4 h-4 mr-2" />
                List
              </button>
            </div>
          </div>

          {/* Price Range */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price Range: ${priceRange[0]} - ${priceRange[1]}
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="0"
                max="500"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="flex-1"
              />
              <input
                type="range"
                min="0"
                max="500"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="flex-1"
              />
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredProducts.length}</span> products
            {selectedCategory !== 'All' && (
              <span> in <span className="font-semibold">{selectedCategory}</span></span>
            )}
          </p>
        </motion.div>

        {/* Products Grid/List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              : 'space-y-4'
          }
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={
                viewMode === 'grid'
                  ? 'bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group'
                  : 'bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group flex'
              }
            >
              {/* Product Image */}
              <div className={viewMode === 'grid' ? 'relative h-48' : 'relative w-48 h-48 flex-shrink-0'}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // Fallback to appropriate placeholder based on category
                    if (product.category === 'Layer Cakes') {
                      target.src = 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop';
                    } else if (product.category === 'Cupcakes') {
                      target.src = 'https://images.unsplash.com/photo-1519869325930-281384150729?w=400&h=400&fit=crop';
                    } else if (product.category === 'Cookies') {
                      target.src = 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop';
                    } else {
                      target.src = 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=400&fit=crop';
                    }
                  }}
                />
                <div className="absolute top-3 right-3">
                  <button 
                    onClick={() => handleToggleFavorite(product)}
                    className={`p-2 rounded-full shadow-lg transition-all duration-200 ${
                      isFavorite(product.id) 
                        ? 'bg-rose-600 text-white hover:bg-rose-700' 
                        : 'bg-white/80 hover:bg-white text-rose-600'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isFavorite(product.id) ? 'fill-current' : ''}`} />
                  </button>
                </div>
                {product.featured && (
                  <div className="absolute top-3 left-3 bg-rose-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className={viewMode === 'grid' ? 'p-6' : 'p-6 flex-1'}>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-rose-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center ml-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                </div>

                <p className={`text-gray-600 mb-4 ${viewMode === 'grid' ? 'text-sm' : 'text-base'}`}>
                  {product.description}
                </p>

                {/* Price and Add to Cart */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-rose-600">
                    ${product.price}
                  </span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>

                {/* Category Badge */}
                <div className="mt-3">
                  <span className="inline-block bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-xs font-medium">
                    {product.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
