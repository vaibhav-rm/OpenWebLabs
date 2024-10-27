import { Typography, Link, Grid, IconButton } from '@mui/material'
import { GitHub, Twitter, LinkedIn } from '@mui/icons-material'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-black py-10 border-t-2 border-green-400">
      <Grid container spacing={4} justifyContent="space-between" className="container mx-auto px-4">
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
            Contact Us
          </Typography>
          <Typography variant="body2" className="text-fuchsia-400">
            hello@openweblabs.com
          </Typography>
          <Typography variant="body2" className="text-fuchsia-400">
            +1 (555) 123-4567
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom className="text-green-400 font-bold">
            Follow Us
          </Typography>
          <div>
            {[GitHub, Twitter, LinkedIn].map((Icon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{ display: 'inline-block' }}
              >
                <IconButton component={Link} href="#" className="text-green-400 hover:text-fuchsia-400">
                  <Icon />
                </IconButton>
              </motion.div>
            ))}
          </div>
        </Grid>
      </Grid>
      <Typography variant="body2" className="text-green-400 text-center mt-8">
        © 2023 OpenWeb Labs. All rights reserved.
      </Typography>
    </footer>
  )
}