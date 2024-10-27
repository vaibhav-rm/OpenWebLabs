import { Typography, Link, Grid, IconButton, Container } from '@mui/material'
import { GitHub, Twitter, LinkedIn } from '@mui/icons-material'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-black py-10 border-t-2 border-green-400">
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom className="text-green-400 font-bold">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
              >
                OpenWeb Labs
              </motion.span>
            </Typography>
            <Typography variant="body2" className="text-fuchsia-400">
              Shaping the future of the web
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom className="text-green-400 font-bold">
              Quick Links
            </Typography>
            <ul className="space-y-2">
              {['About', 'Services', 'Teams', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link component={RouterLink} to={`/${item.toLowerCase()}`} className="text-fuchsia-400 hover:text-green-400 transition-colors duration-300">
                    {item}
                  </Link>
                
                </li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom className="text-green-400 font-bold">
              Connect With Us
            </Typography>
            <div className="flex space-x-4">
              {[GitHub, Twitter, LinkedIn].map((Icon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <IconButton component={Link} href="#" className="text-green-400 hover:text-fuchsia-400 transition-colors duration-300">
                    <Icon />
                  </IconButton>
                </motion.div>
              ))}
            </div>
            <Typography variant="body2" className="text-fuchsia-400 mt-4">
              hello@openweblabs.com
            </Typography>
            <Typography variant="body2" className="text-fuchsia-400">
              +1 (555) 123-4567
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" className="text-green-400 text-center mt-8">
          © {new Date().getFullYear()} OpenWeb Labs. All rights reserved.
        </Typography>
      </Container>
    </footer>
  )
}