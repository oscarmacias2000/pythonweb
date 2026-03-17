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
import PortScanner from '../src/scannerTool'
import ToolsBrowser from './toolsBrowser'
import MiniShell from './tools/shellDemo'

function App() {

  console.log('PorScanner', PortScanner)
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
          <Route path='/portScanner' element={<PortScanner/>}></Route>
          <Route path='/ToolsBrowser' element={<ToolsBrowser/>}></Route>
          <Route path='/MiniShell' element={<MiniShell/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
