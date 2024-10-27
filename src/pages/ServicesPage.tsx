import React from 'react'
import { Typography, Container, Grid, Card, CardContent } from '@mui/material'
import { motion } from 'framer-motion'
import { Code, Cloud, Lock, Zap, Database, Cpu } from 'lucide-react'

const services = [
  { icon: <Code size={40} />, title: 'Custom Web Development', description: 'Tailored web solutions built with cutting-edge technologies.' },
  { icon: <Cloud size={40} />, title: 'Cloud Integration', description: 'Seamless integration with leading cloud platforms for scalability.' },
  { icon: <Lock size={40} />, title: 'Cybersecurity', description: 'Advanced security measures to protect your digital assets.' },
  { icon: <Zap size={40} />, title: 'Performance Optimization', description: 'Boost your web application\'s speed and efficiency.' },
  { icon: <Database size={40} />, title: 'Data Management', description: 'Efficient data storage and retrieval solutions.' },
  { icon: <Cpu size={40} />, title: 'AI Integration', description: 'Incorporate AI and machine learning into your web projects.' },
]

export default function ServicesPage() {
  return (
    <Container maxWidth="lg" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h2" className="text-4xl font-bold mb-8 text-center text-green-400">
          Our Services
        </Typography>
      </motion.div>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-black border-2 border-green-400">
                <CardContent>
                  <motion.div
                    className="text-green-400 mb-4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    {service.icon}
                  </motion.div>
                  <Typography variant="h5" component="div" className="mb-2 text-fuchsia-400">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" className="text-green-400">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}   