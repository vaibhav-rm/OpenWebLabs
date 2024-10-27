import React, { useState, useEffect, useRef } from 'react'
import { Typography, Button, Paper, TextField } from '@mui/material'
import { motion, useInView } from 'framer-motion'

const sampleCode = `function helloOpenWeb() {
  return "Welcome to the future of web development!";
}

console.log(helloOpenWeb());`

export default function InteractiveDemo() {
  const [code, setCode] = useState<string>(sampleCode)
  const [output, setOutput] = useState<string>('')
  const [animatedCode, setAnimatedCode] = useState<string>('')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      let i = 0
      const intervalId = setInterval(() => {
        setAnimatedCode(sampleCode.slice(0, i))
        i++
        if (i > sampleCode.length) {
          clearInterval(intervalId)
        }
      }, 50)

      return () => clearInterval(intervalId)
    }
  }, [isInView])

  const runCode = () => {
    try {
      // Create a new Function from the code string and execute it
      const consoleLog = console.log
      const logs: string[] = []
      console.log = (...args: any[]) => {
        logs.push(args.map(arg => JSON.stringify(arg)).join(' '))
      }
      new Function(code)()
      console.log = consoleLog
      setOutput(logs.join('\n'))
    } catch (error: any) {
      setOutput(`Error: ${error.message}`)
    }
  }

  return (
    <section ref={ref} className="py-20 bg-black">
      <Typography variant="h2" align="center" gutterBottom className="text-4xl font-bold mb-12 text-green-400">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        >
          Experience the Power
        </motion.span>
      </Typography>
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <Paper elevation={3} className="p-8 bg-black border-2 border-green-400">
            <Typography variant="h5" gutterBottom className="text-fuchsia-400">
              Interactive Code Editor
            </Typography>
            <TextField
              multiline
              rows={10}
              variant="outlined"
              fullWidth
              value={code}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCode(e.target.value)}
              className="mb-4"
              InputProps={{
                style: { fontFamily: 'VT323, monospace', color: '#00ff00', backgroundColor: 'rgba(0, 255, 0, 0.1)' },
              }}
            />
            <Button 
              variant="outlined" 
              color="primary" 
              onClick={runCode}
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
            >
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                Run Code
              </motion.span>
            </Button>
            <Paper elevation={2} className="mt-4 p-4 bg-black border-2 border-fuchsia-400">
              <Typography variant="h6" gutterBottom className="text-fuchsia-400">
                Output:
              </Typography>
              <Typography variant="body2" style={{ whiteSpace: 'pre-wrap' }} className="text-green-400 font-mono">
                {output}
              </Typography>
            </Paper>
          </Paper>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1"
        >
          <Paper elevation={3} className="p-8 bg-black border-2 border-green-400 h-full">
            <Typography variant="h5" gutterBottom className="text-fuchsia-400">
              Coding Animation
            </Typography>
            <pre className="text-green-400 font-mono whitespace-pre-wrap">
              {animatedCode}
            </pre>
          </Paper>
        </motion.div>
      </div>
    </section>
  )
}