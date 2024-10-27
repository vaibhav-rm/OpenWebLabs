import React from 'react'
import { Typography, Button, Container } from '@mui/material'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <Container maxWidth="md" className="text-center py-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h1" component="h1" gutterBottom className="text-5xl md:text-7xl font-bold text-green-400">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          >
            The Future of Web is Now
          </motion.span>
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Typography variant="h2" gutterBottom className="text-xl md:text-2xl mb-10 text-fuchsia-400">
          OpenWeb Labs: Where Innovation Meets the Internet
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Button
          variant="outlined"
          color="primary"
          size="large"
          endIcon={<ChevronRight />}
          className="mt-8 border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
        >
          <motion.span
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            Explore the Future
          </motion.span>
        </Button>
      </motion.div>
    </Container>
  )
}