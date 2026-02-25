import { BrowserRouter as Router, Routes, Route } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './Home'
import FlowsHttp from './flowsHttp'
import Http from './http'
import Login from './login'
import Exe from './exe'
import ExpoRender from './Expo'
import UbuntuRender from './ubuntu'
import WindowsRender from './windows'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flowsHttp" element={<FlowsHttp />} />
          <Route path="/http" element={<Http />} />
          <Route path="/login" element={<Login />} />
          <Route path="/exe" element={<Exe />} />
          <Route path="/expoRender" element={<ExpoRender />} />
          <Route path="/ubuntuRender" element={<UbuntuRender />} />
          <Route path="/windowsRender" element={<WindowsRender />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
