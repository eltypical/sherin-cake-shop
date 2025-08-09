import { getImageUrl } from './imageUtils';

export const products = [
  {
    id: "1",
    name: "Chocolate Cake",
    price: 20,
    image: getImageUrl('chocolate-cake'),
    category: "Cakes",
    description: "A rich and moist chocolate cake.",
    rating: 4.8,
    featured: true,
    ingredients: ["Cocoa", "Flour", "Sugar", "Eggs"],
    sizes: ["Small", "Medium", "Large"],
  },
  {
    id: "2",
    name: "Vanilla Cake",
    price: 18,
    image: getImageUrl('vanilla-cake'),
    category: "Cakes",
    description: "A classic vanilla cake with creamy frosting.",
    rating: 4.5,
    featured: true,
    ingredients: ["Vanilla Extract", "Flour", "Sugar", "Eggs"],
    sizes: ["Small", "Medium", "Large"],
  },
];

export const categories = [
  {
    id: "1",
    name: "Cakes",
    productCount: 2,
    description: "Delicious cakes for every occasion.",
  },
  {
    id: "2",
    name: "Pastries",
    productCount: 0,
    description: "Freshly baked pastries to delight your taste buds.",
  },
];

export const getProductsByCategory = (categoryName: string) => {
  return products.filter((product) => product.category === categoryName);
};

export const formatPrice = (price: number) => {
  return `$${price.toFixed(2)}`;
};

export const getFeaturedProducts = () => {
  return products.slice(0, 2);
};

export const searchProducts = (searchTerm: string) => {
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
};