import { useRef } from 'react'
import { Typography, Container, Grid, Card, CardContent, CardMedia, Button } from '@mui/material'
import { motion, useInView } from 'framer-motion'

const projects = [
  { title: 'Project Alpha', description: 'A cutting-edge AI-powered web application', image: '/placeholder.svg?height=200&width=300' },
  { title: 'Project Beta', description: 'Blockchain-based decentralized platform', image: '/placeholder.svg?height=200&width=300' },
  { title: 'Project Gamma', description: 'IoT solution for smart cities', image: '/placeholder.svg?height=200&width=300' },
  { title: 'Project Delta', description: 'Next-gen e-commerce platform', image: '/placeholder.svg?height=200&width=300' },
  { title: 'Project Epsilon', description: 'Virtual reality educational system', image: '/placeholder.svg?height=200&width=300' },
  { title: 'Project Zeta', description: 'Quantum computing simulation software', image: '/placeholder.svg?height=200&width=300' },
]

export default function ProjectsPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <Container ref={ref} maxWidth="lg" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h2" className="text-4xl font-bold mb-12 text-center text-green-400">
          Our Projects
        </Typography>
      </motion.div>
      <Grid container spacing={6}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-black border-2 border-green-400 hover:border-fuchsia-400 transition-colors duration-300">
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h5" component="div" className="mb-2 text-fuchsia-400">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" className="text-green-400 mb-4">
                    {project.description}
                  </Typography>
                  <Button
                    variant="outlined"
                    fullWidth
                    className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}