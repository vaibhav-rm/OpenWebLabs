import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Typography } from '@mui/material'

const technologies = [
  { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Tailwind CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Next.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'GraphQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
]

export default function TechOrbit() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div ref={ref} className="relative w-full h-[800px] flex items-center justify-center bg-black overflow-hidden">
      <Typography variant="h2" className="text-5xl font-bold mb-16 text-center text-green-400 absolute z-10">
        Our Tech Stack
      </Typography>
      <motion.div
        className="relative w-[600px] h-[600px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {technologies.map((tech, index) => {
          const angle = (index / technologies.length) * 2 * Math.PI
          const x = Math.cos(angle) * 280
          const y = Math.sin(angle) * 280

          return (
            <motion.div
              key={tech.name}
              className="absolute top-1/2 left-1/2 w-24 h-24 -ml-12 -mt-12 bg-black bg-opacity-50 rounded-full border-2 border-green-400 flex items-center justify-center"
              style={{ x, y }}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <motion.img
                src={tech.image}
                alt={tech.name}
                className="w-16 h-16"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          )
        })}
      </motion.div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="w-[600px] h-[600px] rounded-full border-2 border-green-400" />
      </motion.div>
    </div>
  )
}   