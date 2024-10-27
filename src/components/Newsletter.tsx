import React, { useState } from 'react'
import { Typography, TextField, Button, Snackbar } from '@mui/material'
import { motion } from 'framer-motion'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [openSnackbar, setOpenSnackbar] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your server
    console.log('Submitted email:', email)
    setOpenSnackbar(true)
    setEmail('')
  }

  return (
    <section className="py-20 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-fuchsia-900 p-8 border-2 border-fuchsia-400 max-w-2xl mx-auto"
      >
        <Typography variant="h4" align="center" gutterBottom className="text-green-400 font-bold">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          >
            Stay Updated with OpenWeb Labs
          </motion.span>
        </Typography>
        <Typography variant="body1" align="center" paragraph className="text-fuchsia-200">
          Subscribe to our newsletter for the latest updates and innovations.
        </Typography>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            className="bg-black rounded-none"
            InputProps={{
              style: { color: '#00ff00', borderColor: '#00ff00' },
            }}
          />
          <Button 
            type="submit" 
            variant="outlined"
            className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
          >
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              Subscribe
            </motion.span>
          </Button>
        </form>
      </motion.div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        message="Thank you for subscribing!"
        ContentProps={{
          className: 'bg-green-400 text-black',
        }}
      />
    </section>
  )
}