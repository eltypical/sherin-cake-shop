'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      id: '1',
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'The most incredible wedding cake! Every guest was raving about how delicious it was.',
      location: 'New York, NY'
    },
    {
      id: '2',
      name: 'Michael Chen',
      rating: 5,
      comment: 'Amazing cupcakes for my daughter&apos;s birthday party. The kids absolutely loved them!',
      location: 'Brooklyn, NY'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      rating: 5,
      comment: 'The custom design was exactly what I envisioned. Beautiful work and incredibly tasty.',
      location: 'Manhattan, NY'
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
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
            Happy Customers
          </span>
          <h2 className="text-h1 font-serif font-bold text-dark mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it - hear from our satisfied customers 
            who have made their celebrations sweeter with our cakes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="card p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-600 mb-6 italic">
                &quot;{testimonial.comment}&quot;
              </p>
              <div>
                <h4 className="font-semibold text-dark">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <p>
          Our customers love Sherin&apos;s Cake Shop! Here&apos;s what they have to say: &quot;Amazing cakes!&quot; and &quot;Excellent service!&quot;
        </p>
      </div>
    </section>
  )
}

export default Testimonials
