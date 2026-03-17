import  { useState } from 'react';
import Ubuntu from "../src/assets/logos-main/logos-main/svg/ubuntu.svg";
import Kali from '../src/assets/logos-main/logos-main/svg/kali.svg'
import Footer from "./footer";

export default function UbuntuRender() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSystem, setSelectedSystem] = useState('ubuntu'); // 'ubuntu' o 'kali'
  const itemsPerPage = 5;

  // Datos de Ubuntu
  const ubuntuModules = [
    // Payloads de Ubuntu
    { name: "modules/payloads/linux/meterpreter/reverse_tcp", url: "#", type: "payload" },
    { name: "modules/payloads/linux/meterpreter/reverse_http", url: "#", type: "payload" },
    { name: "modules/payloads/linux/meterpreter/reverse_https", url: "#", type: "payload" },
    { name: "modules/payloads/linux/meterpreter/reverse_ftp", url: "#", type: "payload" },
    { name: "modules/payloads/linux/meterpreter/bind_tcp", url: "#", type: "payload" },
    { name: "modules/payloads/linux/meterpreter/bind_http", url: "#", type: "payload" },
    { name: "modules/payloads/linux/meterpreter/bind_https", url: "#", type: "payload" },
    { name: "modules/payloads/linux/meterpreter/reverse_sctp", url: "#", type: "payload" },
    { name: "modules/payloads/linux/meterpreter/reverse_icmp", url: "#", type: "payload" },
    { name: "modules/payloads/linux/meterpreter/reverse_dns", url: "#", type: "payload" },
    // Exploits de Ubuntu
    { name: "modules/metasploit/exploits/linux/ubuntu/version/1", url: "#", type: "exploit" },
    { name: "modules/metasploit/exploits/linux/ubuntu/version/2", url: "#", type: "exploit" },
    { name: "modules/metasploit/exploits/linux/ubuntu/version/3", url: "#", type: "exploit" },
    { name: "modules/metasploit/exploits/linux/ubuntu/version/4", url: "#", type: "exploit" },
    { name: "modules/metasploit/exploits/linux/ubuntu/version/5", url: "#", type: "exploit" },
    { name: "modules/metasploit/exploits/linux/ubuntu/version/6", url: "#", type: "exploit" },
    { name: "modules/metasploit/exploits/linux/ubuntu/version/7", url: "#", type: "exploit" },
    { name: "modules/metasploit/exploits/linux/ubuntu/version/8", url: "#", type: "exploit" },
    { name: "modules/metasploit/exploits/linux/ubuntu/version/9", url: "#", type: "exploit" },
    { name: "modules/metasploit/exploits/linux/ubuntu/version/10", url: "#", type: "exploit" },
  ];

  // Datos de Kali
  const kaliModules = [
    { name: "modules/exploits/linux/kernel/kali_local_exploit", url: "#", type: "exploit" },
    { name: "modules/exploits/linux/kali/privilege_escalation", url: "#", type: "exploit" },
    { name: "modules/payloads/linux/kali/meterpreter/reverse_tcp", url: "#", type: "payload" },
    { name: "modules/payloads/linux/kali/meterpreter/reverse_http", url: "#", type: "payload" },
    { name: "modules/payloads/linux/kali/meterpreter/reverse_https", url: "#", type: "payload" },
    { name: "modules/auxiliary/scanner/kali/port_scanner", url: "#", type: "auxiliary" },
    { name: "modules/auxiliary/scanner/kali/service_discovery", url: "#", type: "auxiliary" },
    { name: "modules/exploits/linux/kali/smb_exploit", url: "#", type: "exploit" },
    { name: "modules/exploits/linux/kali/ssh_bruteforce", url: "#", type: "exploit" },
    { name: "modules/post/linux/kali/persistence", url: "#", type: "post" },
    { name: "modules/post/linux/kali/credential_dump", url: "#", type: "post" },
    { name: "modules/post/linux/kali/hash_collector", url: "#", type: "post" },
    { name: "modules/exploits/linux/kali/webapp_rce", url: "#", type: "exploit" },
    { name: "modules/exploits/linux/kali/kernel_buffer_overflow", url: "#", type: "exploit" },
    { name: "modules/auxiliary/dos/kali/network_flood", url: "#", type: "auxiliary" },
  ];

  // Determinar qué módulos mostrar según el sistema seleccionado
  const currentModules = selectedSystem === 'ubuntu' ? ubuntuModules : kaliModules;
  const totalPages = Math.ceil(currentModules.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDisplayModules = currentModules.slice(startIndex, endIndex);

  // Cambiar de sistema
  const handleSystemChange = (system) => {
    setSelectedSystem(system);
    setCurrentPage(1); // Reset a primera página
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  // Renderizar números de página
  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
          <button 
            className="page-link" 
            onClick={() => handlePageChange(i)}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {i}
          </button>
        </li>
      );
    }
    return pages;
  };

  // Obtener el color según el tipo de módulo
  const getTypeColor = (type) => {
    switch(type) {
      case 'payload': return 'text-success';
      case 'exploit': return 'text-danger';
      case 'auxiliary': return 'text-warning';
      case 'post': return 'text-info';
      default: return 'text-primary';
    }
  };

  return (
    <>
      {/* Selector de Sistema */}
      <div className="text-center mb-5">
        <div className="btn-group" role="group">
          <button 
            className={`btn ${selectedSystem === 'ubuntu' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => handleSystemChange('ubuntu')}
          >
            <img src={Ubuntu} alt="ubuntu" width="30" height="30" className="me-2" />
            Ubuntu
          </button>
          <button 
            className={`btn ${selectedSystem === 'kali' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => handleSystemChange('kali')}
          >
            <img src={Kali} alt="kali" width="30" height="30" className="me-2" />
            Kali Linux
          </button>
        </div>
      </div>

      {/* Header del Sistema Seleccionado */}
      <div className="text-center mb-5">
        <img 
          src={selectedSystem === 'ubuntu' ? Ubuntu : Kali} 
          alt={selectedSystem} 
          width="200" 
          height="100" 
          className='cursor-pointer hover:scale-125 hover:bg-black hover:rounded-full transition-all duration-300' 
        />
        <h1 className="mt-3">{selectedSystem === 'ubuntu' ? 'Ubuntu' : 'Kali Linux'}</h1>
        <p style={{ 
          textAlign: 'center', 
          fontWeight: 'bold', 
          fontSize: '20px', 
          fontFamily: 'monospace', 
          color: 'black',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {selectedSystem === 'ubuntu' 
            ? 'Ubuntu is a free and open-source operating system based on Debian. It is widely used for desktop, server, and cloud computing.'
            : 'Kali Linux is an open-source, Debian-based Linux distribution designed for advanced Penetration Testing and Security Auditing.'}
        </p>
      </div>

      {/* Información de conteo */}
      <div className="text-center mb-3">
        <span className="badge bg-secondary">
          Total de módulos: {currentModules.length}
        </span>
        <span className="badge bg-info ms-2">
          Página {currentPage} de {totalPages}
        </span>
      </div>

      {/* Grid de Módulos */}
      <div className="container mb-5">
        <div className="row justify-content-center">
          {currentDisplayModules.map((module, index) => (
            <div key={startIndex + index} className="col-md-4 mb-3">
              <div className="card h-100 shadow-sm hover-shadow-lg transition-shadow">
                <div className="card-body text-center">
                  <img 
                    src={selectedSystem === 'ubuntu' ? Ubuntu : Kali} 
                    alt="" 
                    width="50" 
                    height="50" 
                    className="mb-3"
                  />
                  <span className={`badge ${getTypeColor(module.type)} mb-2`}>
                    {module.type}
                  </span>
                  <a 
                    href={module.url} 
                    className="text-primary text-decoration-none d-block"
                    style={{ fontSize: '14px', wordBreak: 'break-all' }}
                  >
                    {module.name}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Paginación Única */}
      {totalPages > 1 && (
        <>
          <nav aria-label="Page navigation" className="mt-4">
            <ul className="pagination justify-content-center">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button 
                  className="page-link" 
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                  style={{ background: 'none', border: 'none', cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
                >
                  Previous
                </button>
              </li>
              
              {renderPageNumbers()}
              
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button 
                  className="page-link" 
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  style={{ background: 'none', border: 'none', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>

          <div className="text-center text-muted mt-3">
            Mostrando {startIndex + 1} - {Math.min(endIndex, currentModules.length)} de {currentModules.length} módulos de {selectedSystem === 'ubuntu' ? 'Ubuntu' : 'Kali Linux'}
          </div>
        </>
      )}

      <Footer />
    </>
  );
}