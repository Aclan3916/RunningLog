import { lazy, Suspense } from 'react'
import { Box } from '@chakra-ui/react'
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const HomePage = lazy(() => import('./components/HomePage'))
const RunLog = lazy(() => import('./components/RunLog'))
const Activities = lazy(() => import('./components/Activities'))
const EditActivity = lazy(() => import('./components/EditActivity'))

const App = () => {
  return (
    <Router>
      <Box>
        <Navigation />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-run" element={<RunLog />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/edit/:id" element={<EditActivity />} />
          </Routes>
        </Suspense>
      </Box>
    </Router>
  )
}

export default App
