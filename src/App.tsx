import { Box } from '@chakra-ui/react'
import Navigation from './components/Navigation'
import RunLog from './components/RunLog'
import HomePage from './components/HomePage'
import Activities from './components/Activities'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EditActivity from './components/EditActivity'
import supabase from './lib/supabase'

const App = () => {
  return (
    <Router>
    <Box>
      <Navigation />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add-run" element={<RunLog />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/edit/:id" element={<EditActivity />} />
      </Routes>
    </Box>
    </Router>
  )
}

export default App
