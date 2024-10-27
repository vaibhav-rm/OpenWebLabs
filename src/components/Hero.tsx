import React, { useRef } from 'react'
import { Typography, Button, Container } from '@mui/material'
import { motion, useInView } from 'framer-motion'

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-20 bg-black text-green-400">
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h1" align="center" gutterBottom className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to OpenWeb Labs
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography variant="h2" align="center" gutterBottom className="text-2xl md:text-3xl mb-8 text-fuchsia-400">
            Shaping the Future of Web Development
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center space-x-4"
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            className="bg-green-400 text-black hover:bg-green-500"
          >
            Get Started
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
          >
            Learn More
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}