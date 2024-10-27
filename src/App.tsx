import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import TeamsPage from './pages/TeamsPage'
import ProjectsPage from './pages/ProjectsPage'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ff00',
    },
    secondary: {
      main: '#ff00ff',
    },
    background: {
      default: '#000000',
      paper: '#111111',
    },
    text: {
      primary: '#00ff00',
      secondary: '#ff00ff',
    },
  },
  typography: {
    fontFamily: '"VT323", "Roboto Mono", monospace',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          padding: '10px 20px',
          border: '2px solid #00ff00',
          '&:hover': {
            backgroundColor: '#00ff00',
            color: '#000000',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '0',
          border: '2px solid #00ff00',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        },
      },
    },
  },
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="flex flex-col min-h-screen bg-black text-green-400 relative overflow-hidden">
          <AnimatedBackground />
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/teams" element={<TeamsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}