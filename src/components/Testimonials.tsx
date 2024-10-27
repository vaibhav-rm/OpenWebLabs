import React from 'react'
import { Typography, Card, CardContent, Avatar, Grid } from '@mui/material'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, TechCorp',
    content: 'OpenWeb Labs has revolutionized our online presence. Their cutting-edge solutions have given us a significant competitive advantage.',
  },
  {
    name: 'Jane Smith',
    role: 'CTO, StartupX',
    content: 'The performance improvements weve seen since partnering with OpenWeb Labs are nothing short of extraordinary. Our load times have decreased by 70%!',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-black">
      <Typography variant="h2" align="center" gutterBottom className="text-4xl font-bold mb-12 text-green-400">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        >
          What Our Clients Say
        </motion.span>
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={6} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0  }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="h-full bg-black border-2 border-green-400">
                <CardContent>
                  <Typography variant="body1" paragraph className="italic text-fuchsia-400">
                    "{testimonial.content}"
                  </Typography>
                  <div className="flex items-center mt-4">
                    <Avatar className="mr-4 bg-green-400 text-black">{testimonial.name[0]}</Avatar>
                    <div>
                      <Typography variant="subtitle1" className="text-green-400">{testimonial.name}</Typography>
                      <Typography variant="body2" className="text-fuchsia-400">
                        {testimonial.role}
                      </Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </section>
  )
}