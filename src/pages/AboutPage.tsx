import React from 'react'
import { Typography, Container, Grid } from '@mui/material'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <Container maxWidth="lg" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h2" className="text-4xl font-bold mb-8 text-center text-green-400">
          About OpenWeb Labs
        </Typography>
      </motion.div>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography variant="body1" className="text-fuchsia-400 mb-4">
              OpenWeb Labs is at the forefront of web technology innovation. We are passionate about creating cutting-edge solutions that push the boundaries of what's possible on the web.
            </Typography>
            <Typography variant="body1" className="text-fuchsia-400 mb-4">
              Our team of expert developers, designers, and researchers work tirelessly to develop new technologies and methodologies that make the web faster, more secure, and more accessible for everyone.
            </Typography>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography variant="h4" className="text-2xl font-bold mb-4 text-green-400">
              Our Mission
            </Typography>
            <Typography variant="body1" className="text-fuchsia-400 mb-4">
              To revolutionize the web by creating innovative, open-source technologies that empower developers and enhance user experiences worldwide.
            </Typography>
            <Typography variant="h4" className="text-2xl font-bold mb-4 text-green-400">
              Our Vision
            </Typography>
            <Typography variant="body1" className="text-fuchsia-400">
              A web that is fast, secure, and accessible to all, driving the next generation of digital experiences and technological advancements.
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  )
}