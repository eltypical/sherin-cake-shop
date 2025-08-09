'use client'

import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-script text-xl mb-4 block">
            Our Story
          </span>
          <h2 className="text-h1 font-serif font-bold text-dark mb-6">
            About Sherin Cake Shop
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Founded with passion and dedication to the art of baking, we create memorable
            experiences through exceptional cakes and desserts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-serif font-semibold text-dark">
              Crafting Sweet Memories Since 2008
            </h3>
            <p className="text-gray-600 leading-relaxed">
              What started as a small home bakery has grown into a beloved cake shop
              that serves our community with the finest handcrafted desserts. Every
              cake tells a story, and we&apos;re honored to be part of your special moments.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our commitment to quality means using only the finest ingredients,
              traditional techniques, and innovative designs to create cakes that
              not only look beautiful but taste extraordinary.
            </p>
            <p>
              Welcome to Sherin&apos;s Cake Shop, where every cake is a masterpiece.
            </p>
          </motion.div>

          <motion.div
            className="relative h-96 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-primary to-accent w-full h-full flex items-center justify-center">
              <span className="text-white text-2xl font-serif">About Image</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
