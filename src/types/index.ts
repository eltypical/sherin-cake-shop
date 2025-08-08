export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  images?: string[]
  category: string
  ingredients?: string[]
  allergens?: string[]
  sizes?: ProductSize[]
  flavors?: string[]
  rating?: number
  reviews?: Review[]
  inStock: boolean
  featured?: boolean
}

export interface ProductSize {
  size: string
  price: number
  serves: string
}

export interface Review {
  id: string
  customerName: string
  rating: number
  comment: string
  date: string
  verified: boolean
}

export interface CartItem {
  product: Product
  quantity: number
  selectedSize?: string
  selectedFlavor?: string
  customizations?: string
}

export interface Customer {
  id: string
  name: string
  email: string
  phone?: string
  address?: Address
  orderHistory?: Order[]
}

export interface Address {
  street: string
  city: string
  state: string
  zipCode: string
  country: string
}

export interface Order {
  id: string
  customerId: string
  items: CartItem[]
  total: number
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered' | 'cancelled'
  orderDate: string
  deliveryDate?: string
  deliveryAddress?: Address
  notes?: string
}

export interface Category {
  id: string
  name: string
  description: string
  image: string
  productCount: number
}

export interface Testimonial {
  id: string
  customerName: string
  customerImage?: string
  rating: number
  comment: string
  location?: string
  date: string
  orderType?: string
}

export interface GalleryImage {
  id: string
  url: string
  alt: string
  category: string
  title?: string
  description?: string
}

export interface ContactInfo {
  phone: string
  email: string
  address: Address
  hours: {
    [key: string]: string
  }
  socialMedia: {
    instagram?: string
    facebook?: string
    twitter?: string
    whatsapp?: string
  }
}

export interface FormData {
  name: string
  email: string
  phone?: string
  message: string
  orderType?: string
  eventDate?: string
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}
