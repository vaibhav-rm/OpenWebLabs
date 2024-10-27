import React from 'react'
import { Typography, Grid, Paper } from '@mui/material'
import { motion } from 'framer-motion'
import { Code, Rocket, Zap, Globe, Shield, Cpu } from 'lucide-react'

const features = [
  { icon: <Code size={40} />, title: 'Advanced Coding', description: 'Next-gen development tools and frameworks' },
  { icon: <Rocket size={40} />, title: 'Rapid Deployment', description: 'Launch projects at light speed' },
  { icon: <Zap size={40} />, title: 'Lightning Performance', description: 'Optimized for unparalleled speed' },
  { icon: <Globe size={40} />, title: 'Global CDN', description: 'Content delivered at the edge' },
  { icon: <Shield size={40} />, title: 'Advanced Security', description: 'Enterprise-grade protection' },
  { icon: <Cpu size={40} />, title: 'AI Integration', description: 'Harness the power of machine learning' },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-black">
      <Typography variant="h2" align="center" gutterBottom className="text-4xl font-bold mb-12 text-green-400">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        >
          Cutting-Edge Features
        </motion.span>
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Paper elevation={3} className="p-6 h-full bg-black border-2 border-green-400">
                <motion.div
                  className="text-green-400 mb-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  {feature.icon}
                </motion.div>
                <Typography variant="h6" gutterBottom className="text-fuchsia-400">
                  {feature.title}
                </Typography>
                <Typography variant="body2" className="text-green-400">
                  {feature.description}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </section>
  )
}