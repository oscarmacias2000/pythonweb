import { BrowserRouter as Router, Routes, Route } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './Home'
import FlowsHttp from './flowsHttp'
import Http from './http'
import Login from './login'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flowsHttp" element={<FlowsHttp />} />
          <Route path="/http" element={<Http />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
