import chrome from '../src/assets/logos-main/logos-main/svg/Chrome.svg'
import Bash from '../src/assets/logos-main/logos-main/svg/bash.svg'
import Footer from './footer'
import { useNavigate } from 'react-router'

export default function ToolsBrowser(){
    const navigate = useNavigate();

    const handlePortScanner = ()=>{
        const BROWSER = navigate('/PortScanner');
        const SHELL = navigate('/MiniShell');

        if(BROWSER === navigate('/PortScanner') || SHELL === navigate('/MiniShell')){
               return BROWSER || SHELL
        }
    }
    return(
        <div className="container-fluid d-flex">
             <div className="col-lg-6 mb-4">
                    <div className="card" style={{ width: '18rem' }}>
                          <img src={chrome} className="card-img-top" width="200" height="50"></img>
                         <div className="card-body">
                                <h5 className="card-title" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '12px', fontFamily: 'monospace', color: 'white' }}>scanner/Browser</h5>
                                <p className="card-text" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '12px', fontFamily: 'monospace', color: 'white' }}>scanner app browser here </p>
                                 <a href="#" className="btn btn-primary" type='button' onClick={handlePortScanner}>Push me</a>
                              </div>
                           </div>
                         </div>
      <div className="col-lg-4 mb-4">
                               <div className="card" style={{ width: '18rem' }}>
                                        <img src={Bash} className="card-img-top" width="200" height="50"></img>
                                     <div className="card-body">
                                    <h5 className="card-title" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '12px', fontFamily: 'monospace', color: 'white' }}>BASH/PowerShell</h5>
                                    <p className="card-text" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '12px', fontFamily: 'monospace', color: 'white' }}>BASH/PowerShell app here </p>
                                     <a href="#" className="btn btn-primary" type='button' onClick={handlePortScanner}>Push me</a>
                            </div>
                            </div>
                         </div>
         <Footer/>
        </div>
    )
}