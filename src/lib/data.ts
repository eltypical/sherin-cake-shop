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
  {
    id: "3",
    name: "Red Velvet Cake",
    price: 22,
    image: getImageUrl('red-velvet-cake'),
    category: "Cakes",
    description: "A luxurious red velvet cake with cream cheese frosting.",
    rating: 4.7,
    featured: true,
    ingredients: ["Cocoa", "Flour", "Sugar", "Eggs", "Cream Cheese"],
    sizes: ["Small", "Medium", "Large"],
  },
  {
    id: "4",
    name: "Carrot Cake",
    price: 19,
    image: getImageUrl('carrot-cake'),
    category: "Cakes",
    description: "A moist carrot cake with a hint of cinnamon and cream cheese frosting.",
    rating: 4.6,
    featured: true,
    ingredients: ["Carrots", "Flour", "Sugar", "Eggs", "Cinnamon"],
    sizes: ["Small", "Medium", "Large"],
  },
  {
    id: "5",
    name: "Black Forest Cake",
    price: 25,
    image: getImageUrl('black-forest-cake'),
    category: "Cakes",
    description: "A classic black forest cake with layers of chocolate and cherries.",
    rating: 4.9,
    featured: true,
    ingredients: ["Cocoa", "Flour", "Sugar", "Eggs", "Cherries"],
    sizes: ["Small", "Medium", "Large"],
  },
];

export const categories = [
  {
    id: "1",
    name: "Cakes",
    productCount: 5,
    description: "Delicious cakes for every occasion.",
  },
  {
    id: "2",
    name: "Pastries",
    productCount: 0,
    description: "Freshly baked pastries to delight your taste buds.",
  },
  {
    id: "3",
    name: "Cupcakes",
    productCount: 0,
    description: "Delightful cupcakes in various flavors.",
  },
  {
    id: "4",
    name: "Cookies",
    productCount: 0,
    description: "Homemade cookies with a variety of toppings.",
  },
  {
    id: "5",
    name: "Wedding Cakes",
    productCount: 0,
    description: "Elegant wedding cakes for your special day.",
  },
  {
    id: "6",
    name: "Birthday Cakes",
    productCount: 0,
    description: "Celebrate with our delicious birthday cakes.",
  },
  {
    id: "7",
    name: "Custom Cakes",
    productCount: 0,
    description: "Have a specific design in mind? We can create it!",
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