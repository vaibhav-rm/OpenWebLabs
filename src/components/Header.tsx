import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const menuItems = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Services', path: '/services' },
  { title: 'Contact', path: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <AppBar position="static" color="transparent" elevation={0} className="border-b-2 border-green-400">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="font-bold text-green-400">
            <Link to="/">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
              >
                OpenWeb Labs
              </motion.span>
            </Link>
          </Typography>
          <div className="hidden md:flex">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.title}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  
                  color="inherit"
                  component={Link}
                  to={item.path}
                  className="text-green-400 hover:text-black hover:bg-green-400"
                >
                  {item.title}
                </Button>
              </motion.div>
            ))}
          </div>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, backgroundColor: 'rgba(0, 0, 0, 0.9)', borderRight: '2px solid #00ff00' },
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.title}
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
            >
              <ListItemText primary={item.title} className="text-green-400" />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </motion.div>
  )
}