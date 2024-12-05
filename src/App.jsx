import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import SubmitRequest from './pages/SubmitRequest'
import RequestDetails from './pages/RequestDetails'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit-request" element={<SubmitRequest />} />
          <Route path="/request/:id" element={<RequestDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App