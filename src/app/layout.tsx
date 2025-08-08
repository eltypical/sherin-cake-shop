import type { Metadata } from 'next'
import { Inter, Playfair_Display, Dancing_Script } from 'next/font/google'
import './globals.css'
import { CartProvider } from '../lib/contexts/CartContext'
import { FavoritesProvider } from '../lib/contexts/FavoritesContext'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

const dancing = Dancing_Script({ 
  subsets: ['latin'],
  variable: '--font-dancing',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://sherincakeshop.com' : 'http://localhost:3000'),
  title: 'Sherin Cake Shop - Crafted with Love, Baked to Perfection',
  description: 'Artisan cakes, cupcakes, and custom desserts made with the finest ingredients. Order fresh, handcrafted treats for any occasion.',
  keywords: 'cake shop, artisan cakes, custom cakes, cupcakes, desserts, bakery',
  authors: [{ name: 'Sherin Cake Shop' }],
  openGraph: {
    title: 'Sherin Cake Shop - Crafted with Love, Baked to Perfection',
    description: 'Artisan cakes, cupcakes, and custom desserts made with the finest ingredients.',
    url: 'https://sherincakeshop.com',
    siteName: 'Sherin Cake Shop',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sherin Cake Shop - Delicious Artisan Cakes',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sherin Cake Shop - Crafted with Love, Baked to Perfection',
    description: 'Artisan cakes, cupcakes, and custom desserts made with the finest ingredients.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${dancing.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <CartProvider>
          <FavoritesProvider>
            {children}
          </FavoritesProvider>
        </CartProvider>
      </body>
    </html>
  )
}
