import React, { useState } from 'react'
import { Typography, Container, TextField, Button, Snackbar } from '@mui/material'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [openSnackbar, setOpenSnackbar] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setOpenSnackbar(true)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <Container maxWidth="md" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h2" className="text-4xl font-bold mb-8 text-center text-green-400">
          Contact Us
        </Typography>
      </motion.div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            InputProps={{ className: 'text-green-400' }}
            InputLabelProps={{ className: 'text-fuchsia-400' }}
          />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            InputProps={{ className: 'text-green-400' }}
            InputLabelProps={{ className: 'text-fuchsia-400' }}
          />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            InputProps={{ className: 'text-green-400' }}
            InputLabelProps={{ className: 'text-fuchsia-400' }}
          />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            fullWidth
            className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
          >
            Send Message
          </Button>
        </motion.div>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        message="Message sent successfully!"
        ContentProps={{
          className: 'bg-green-400 text-black',
        }}
      />
    </Container>
  )
}