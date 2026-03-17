
import chrome from '../src/assets/logos-main/logos-main/svg/Chrome.svg'
import Firefox from '../src/assets/logos-main/logos-main/svg/Firefox.svg'
import Footer from './footer';
import { useState } from "react";
import './PortScanner.css';

const PortScanner = ()=>{
  const [targetHost, setTargetHost] = useState('localhost');
  const [scanResults, setScanResults] = useState([]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [selectedPort, setSelectedPort] = useState(null);
  const [connectionAttempts, setConnectionAttempts] = useState([]);

    
  const commonPorts = [80, 443, 8080, 21, 22, 23, 25, 53, 110, 143, 3389, 3306, 5432, 27017];
  
  const services = {
    80: 'HTTP',
    443: 'HTTPS',
    8080: 'HTTP-Proxy',
    21: 'FTP',
    22: 'SSH',
    23: 'Telnet',
    25: 'SMTP',
    53: 'DNS',
    110: 'POP3',
    143: 'IMAP',
    3389: 'RDP',
    3306: 'MySQL',
    5432: 'PostgreSQL',
    27017: 'MongoDB'
  };

  // Método 1: WebSocket Scanner
  const checkPortWebSocket = (host, port) => {
    return new Promise((resolve) => {
      const ws = new WebSocket(`ws://${host}:${port}`);
      const timeout = setTimeout(() => {
        ws.close();
        resolve({ port, status: 'closed', method: 'WebSocket' });
      }, 3000);

      ws.onopen = () => {
        clearTimeout(timeout);
        ws.close();
        resolve({ port, status: 'open', service: services[port] || 'Unknown', method: 'WebSocket' });
        addConnectionAttempt(port, 'WebSocket', 'Conexión exitosa');
      };

      ws.onerror = () => {
        clearTimeout(timeout);
        resolve({ port, status: 'closed', method: 'WebSocket' });
      };
    });
  };

  // Método 2: WebRTC Scanner (para IP local)
  const checkPortWebRTC = () => {
    return new Promise((resolve) => {
      try {
        const rtc = new RTCPeerConnection();
        rtc.createDataChannel('');
        
        rtc.onicecandidate = (e) => {
          if (e.candidate) {
            const ip = e.candidate.address || e.candidate.ip;
            if (ip && !ip.includes(':')) { // IPv4
              resolve({ localIP: ip });
            }
            rtc.close();
          }
        };

        rtc.createOffer()
          .then(offer => rtc.setLocalDescription(offer))
          .catch(() => resolve({ localIP: null }));

        setTimeout(() => {
          rtc.close();
          resolve({ localIP: null });
        }, 3000);
      } catch (error) {
        resolve({ localIP: null });
      }
    });
  };

  // Método 3: EventSource Scanner (SSE)
  const checkPortEventSource = (host, port) => {
    return new Promise((resolve) => {
      const source = new EventSource(`http://${host}:${port}/events`);
      const timeout = setTimeout(() => {
        source.close();
        resolve({ port, status: 'closed', method: 'EventSource' });
      }, 3000);

      source.onopen = () => {
        clearTimeout(timeout);
        source.close();
        resolve({ port, status: 'open', service: services[port] || 'Unknown', method: 'EventSource' });
        addConnectionAttempt(port, 'EventSource', 'Conexión establecida');
      };

      source.onerror = () => {
        clearTimeout(timeout);
        source.close();
        resolve({ port, status: 'closed', method: 'EventSource' });
      };
    });
  };

  // Método 4: Image Load Scanner (técnica clásica)
  const checkPortImage = (host, port) => {
    return new Promise((resolve) => {
      const img = new Image();
      const timeout = setTimeout(() => {
        img.src = '';
        resolve({ port, status: 'closed', method: 'Image' });
      }, 3000);

      img.onload = () => {
        clearTimeout(timeout);
        resolve({ port, status: 'open', service: services[port] || 'Unknown', method: 'Image' });
        addConnectionAttempt(port, 'Image', 'Imagen cargada');
      };

      img.onerror = () => {
        clearTimeout(timeout);
        // Un error no siempre significa que el puerto esté cerrado
        resolve({ port, status: 'filtered', method: 'Image' });
      };

      img.src = `http://${host}:${port}/favicon.ico?${Date.now()}`;
    });
  };

  // Registrar intentos de conexión
  const addConnectionAttempt = (port, method, result) => {
    setConnectionAttempts(prev => [...prev, {
      port,
      method,
      result,
      timestamp: new Date().toLocaleTimeString()
    }]);
  };

  // Escanear todos los métodos
  const scanPort = async (host, port) => {
    const methods = [
      checkPortWebSocket(host, port),
      checkPortEventSource(host, port),
      checkPortImage(host, port)
    ];

    const results = await Promise.all(methods);
    
    // Determinar si el puerto está abierto basado en múltiples métodos
    const openResults = results.filter(r => r.status === 'open');
    const filteredResults = results.filter(r => r.status === 'filtered');
    
    if (openResults.length > 0) {
      return { port, status: 'open', service: services[port] || 'Unknown', methods: openResults.map(r => r.method) };
    } else if (filteredResults.length > 0) {
      return { port, status: 'filtered', service: services[port] || 'Unknown' };
    } else {
      return { port, status: 'closed', service: services[port] || 'Unknown' };
    }
  };

  // Escaneo completo
  const startScan = async () => {
    setIsScanning(true);
    setScanResults([]);
    setConnectionAttempts([]);
    
    try {
      // Obtener IP local primero
      const localIP = await checkPortWebRTC();
      if (localIP.localIP) {
        addConnectionAttempt('N/A', 'WebRTC', `IP Local detectada: ${localIP.localIP}`);
      }

      const results = [];
      for (let i = 0; i < commonPorts.length; i++) {
        const port = commonPorts[i];
        setScanProgress(Math.round(((i + 1) / commonPorts.length) * 100));
        
        const result = await scanPort(targetHost, port);
        results.push(result);
        
        if (result.status !== 'closed') {
          setScanResults(prev => [...prev, result]);
        }
      }
      
      setScanResults(prev => [...prev, ...results.filter(r => r.status !== 'closed')]);
    } catch (error) {
      console.error('Error durante el escaneo:', error);
      addConnectionAttempt('Error', 'System', error.message);
    } finally {
      setIsScanning(false);
      setScanProgress(0);
    }
  };

  // Verificar puerto específico
  const checkSpecificPort = async (port) => {
    setSelectedPort(port);
    const result = await scanPort(targetHost, port);
    setScanResults(prev => [...prev, result]);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Escáner de Puertos (Navegador)</h2>
        <img src={chrome} style={{width: '2rem'}}></img>
        <img src={Firefox} style={{width: '2rem'}}></img>
      {/* Panel de control */}
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-8">
              <div className="input-group">
                <span className="input-group-text">Host:</span>
                <input 
                  type="text" 
                  className="form-control" 
                  value={targetHost}
                  onChange={(e) => setTargetHost(e.target.value)}
                  placeholder="localhost, 127.0.0.1, ejemplo.com"
                  disabled={isScanning}
                />
              </div>
            </div>
            <div className="col-md-4">
              <button 
                className="btn btn-primary w-100"
                onClick={startScan}
                disabled={isScanning}
              >
                {isScanning ? 'Escaneando...' : 'Iniciar Escaneo'}
              </button>
            </div>
          </div>

          {/* Barra de progreso */}
          {isScanning && (
            <div className="progress mt-3">
              <div 
                className="progress-bar progress-bar-striped progress-bar-animated" 
                role="progressbar" 
                style={{ width: `${scanProgress}%` }}
              >
                {scanProgress}%
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Resultados del escaneo */}
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">Puertos Abiertos/Detectados</h5>
            </div>
            <div className="card-body">
              {scanResults.length > 0 ? (
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Puerto</th>
                        <th>Servicio</th>
                        <th>Estado</th>
                        <th>Métodos</th>
                      </tr>
                    </thead>
                    <tbody>
                      {scanResults.map((result, index) => (
                        <tr key={index} className={
                          result.status === 'open' ? 'table-success' : 
                          result.status === 'filtered' ? 'table-warning' : ''
                        }>
                          <td><strong>{result.port}</strong></td>
                          <td>{result.service}</td>
                          <td>
                            <span className={`badge ${
                              result.status === 'open' ? 'bg-success' : 
                              result.status === 'filtered' ? 'bg-warning' : 'bg-secondary'
                            }`}>
                              {result.status}
                            </span>
                          </td>
                          <td>
                            {result.methods ? result.methods.join(', ') : 'Image'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-muted text-center mb-0">
                  {isScanning ? 'Escaneando puertos...' : 'No hay resultados. Inicia un escaneo.'}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Panel de logs */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-header bg-black text-white">
              <h5 className="mb-0">Logs de Conexión</h5>
            </div>
            <div className="card-body" style={{ maxHeight: '400px', overflowY: 'auto' }}>
              {connectionAttempts.length > 0 ? (
                <ul className="list-unstyled">
                  {connectionAttempts.map((attempt, index) => (
                    <li key={index} className="mb-2 p-2 bg-light rounded">
                      <small>
                        <span className="text-muted">[{attempt.timestamp}]</span><br />
                        <strong>Puerto {attempt.port}</strong> via {attempt.method}<br />
                        <span className="text-success">{attempt.result}</span>
                      </small>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted text-center mb-0">
                  Esperando intentos de conexión...
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Puertos comunes */}
      <div className="card mt-4">
        <div className="card-header bg-secondary text-white">
          <h5 className="mb-0">Puertos Comunes</h5>
        </div>
        <div className="card-body">
          <div className="row">
            {commonPorts.map(port => (
              <div key={port} className="col-md-2 mb-2">
                <button 
                  className="btn btn-outline-secondary btn-sm w-100"
                  onClick={() => checkSpecificPort(port)}
                  disabled={isScanning}
                >
                  {port} - {services[port] || 'Unknown'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advertencia */}
      <div className="alert alert-warning mt-4">
        <strong>Nota:</strong> El escaneo de puertos en el navegador está limitado por:
        <ul className="mb-0 mt-2">
          <li>Políticas CORS (Cross-Origin Resource Sharing)</li>
          <li>Firewalls del navegador</li>
          <li>Solo puede escanear servicios que permitan conexiones desde el navegador</li>
          <li>Los resultados pueden ser menos precisos que un escáner nativo</li>
        </ul>
      </div>
      <Footer/>
    </div>
  );
}

export default PortScanner;