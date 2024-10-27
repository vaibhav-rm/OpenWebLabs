import React from 'react'
import { Typography, Button, Card, CardContent, CardActions, Grid } from '@mui/material'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    title: 'Starter',
    price: '$29',
    features: ['Basic features', '5 projects', 'Community support'],
    buttonText: 'Start Free Trial',
  },
  {
    title: 'Pro',
    price: '$99',
    features: ['Advanced features', 'Unlimited projects', 'Priority support', 'API access'],
    buttonText: 'Go Pro',
    highlighted: true,
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    features: ['All features', 'Dedicated support', 'Custom integrations', 'SLA'],
    buttonText: 'Contact Sales',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-black">
      <Typography variant="h2" align="center" gutterBottom className="text-4xl font-bold mb-12 text-green-400">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        >
          Flexible Pricing
        </motion.span>
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {plans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card 
                raised={plan.highlighted} 
                className={`h-full ${plan.highlighted ? 'bg-green-900' : 'bg-black'} border-2 ${plan.highlighted ? 'border-fuchsia-400' : 'border-green-400'}`}
              >
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom align="center" className="text-fuchsia-400">
                    {plan.title}
                  </Typography>
                  <Typography variant="h4" gutterBottom align="center" className="text-green-400">
                    {plan.price}
                  </Typography>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check size={16} className="text-green-400 mr-2" />
                        <Typography variant="body2" className="text-fuchsia-400">{feature}</Typography>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button 
                    fullWidth 
                    variant={plan.highlighted ? 'contained' : 'outlined'} 
                    className={plan.highlighted ? 'bg-fuchsia-400 text-black hover:bg-fuchsia-500' : 'text-green-400 border-green-400 hover:bg-green-400 hover:text-black'}
                  >
                    <motion.span
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      {plan.buttonText}
                    </motion.span>
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </section>
  )
}