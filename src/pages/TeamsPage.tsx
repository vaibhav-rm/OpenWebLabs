import { useRef } from 'react'
import { Typography, Container, Grid, Card, CardContent, Avatar } from '@mui/material'
import { motion, useInView } from 'framer-motion'

const teamMembers = [
  { name: 'Vaibhav Rathod', role: 'CEO & Founder', avatar: '/placeholder.svg?height=100&width=100' },
  { name: 'Omkar Kokatnoor', role: 'CTO', avatar: '/placeholder.svg?height=100&width=100' },
  { name: 'Sagar Rathod', role: 'CMO', avatar: '/placeholder.svg?height=100&width=100' },
  { name: 'Kshitij Dinni', role: 'UX Designer', avatar: '/placeholder.svg?height=100&width=100' },
  { name: 'Hussain Patel', role: 'Project Manager', avatar: '/placeholder.svg?height=100&width=100' },
  { name: 'Sami Kotwal', role: 'Lead Developer', avatar: '/placeholder.svg?height=100&width=100' },
]

export default function TeamsPage() {
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
          Our Team
        </Typography>
      </motion.div>
      <Grid container spacing={6}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-black border-2 border-green-400 hover:border-fuchsia-400 transition-colors duration-300">
                <CardContent className="flex flex-col items-center text-center">
                  <Avatar
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 mb-4 border-2 border-fuchsia-400"
                  />
                  <Typography variant="h5" component="div" className="mb-2 text-fuchsia-400">
                    {member.name}
                  </Typography>
                  <Typography variant="body2" className="text-green-400">
                    {member.role}
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