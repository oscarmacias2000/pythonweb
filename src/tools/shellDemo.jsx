import  { useState, useRef, useEffect } from 'react';
import '../MiniShell.css';
import Footer from '../footer';

const MiniShell = () => {
  const [history, setHistory] = useState([
    { type: 'system', content: 'Mini Shell v1.0 - Comandos disponibles: help, clear, echo, date, whoami, ls, pwd, scan, calc, random' }
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const shellEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll al final
  useEffect(() => {
    shellEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Enfocar input al cargar
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const executeCommand = (cmd) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    // Añadir comando al historial de comandos
    setCommandHistory(prev => [...prev, trimmedCmd]);
    setHistoryIndex(-1);

    // Añadir comando a la salida
    setHistory(prev => [...prev, { type: 'input', content: `$ ${trimmedCmd}` }]);

    // Procesar comando
    processCommand(trimmedCmd);
  };

  const processCommand = (cmd) => {
    const args = cmd.split(' ');
    const command = args[0].toLowerCase();

    switch(command) {
      case 'help':
        setHistory(prev => [...prev, { 
          type: 'output', 
          content: `Comandos disponibles:
  help     - Muestra esta ayuda
  clear    - Limpia la pantalla
  echo     - Muestra un mensaje (ej: echo Hola Mundo)
  date     - Muestra la fecha y hora actual
  whoami   - Muestra información del usuario
  ls       - Lista archivos del directorio actual
  pwd      - Muestra el directorio actual
  scan     - Simula escaneo de puertos
  calc     - Calculadora simple (ej: calc 5+3)
  random   - Genera un número aleatorio
  ip       - Muestra información de IP
  sysinfo  - Muestra información del sistema
  hacker   - Modo hacker (efectos visuales)
  cd       - navegar sobre los directorios
  ` 
        }]);
        break;

      case 'clear':
        setHistory([]);
        break;

      case 'echo':
        const message = args.slice(1).join(' ');
        setHistory(prev => [...prev, { type: 'output', content: message || '' }]);
        break;

      case 'date':
        setHistory(prev => [...prev, { 
          type: 'output', 
          content: new Date().toLocaleString() 
        }]);
        break;

      case 'whoami':
        setHistory(prev => [...prev, { 
          type: 'output', 
          content: `Usuario: ${navigator.userAgent.split('(')[1]?.split(')')[0] || 'unknown'}
Navegador: ${navigator.userAgent}
Plataforma: ${navigator.platform}
Idioma: ${navigator.language}` 
        }]);
        break;

      case 'ls':
        setHistory(prev => [...prev, { 
          type: 'output', 
          content: `📁 documents/
📁 downloads/
📁 pictures/
📁 videos/
📄 readme.txt
📄 config.json
📄 index.html
🔗 shortcut.lnk` 
        }]);
        break;

      case 'pwd':
        setHistory(prev => [...prev, { 
          type: 'output', 
          content: `/home/${navigator.userAgent.split('(')[1]?.split(')')[0] || 'user'}/shell` 
        }]);
        break;

      case 'scan':
        setHistory(prev => [...prev, { type: 'output', content: 'Iniciando escaneo de puertos...' }]);
        
        // Simular escaneo de puertos
        const ports = [21, 22, 23, 25, 80, 443, 8080, 3306, 5432];
        ports.forEach((port, index) => {
          setTimeout(() => {
            const status = Math.random() > 0.7 ? 'ABIERTO' : 'CERRADO';
            const color = status === 'ABIERTO' ? '#00ff00' : '#ff0000';
            setHistory(prev => [...prev, { 
              type: 'output', 
              content: `Puerto ${port}: `,
              extra: <span style={{ color }}>{status}</span>
            }]);
          }, index * 300);
        });
        break;

      case 'calc':
        try {
          const expression = args.slice(1).join('');
          if (expression) {
            // Evaluar de forma segura
            const result = Function('"use strict"; return (' + expression + ')')();
            setHistory(prev => [...prev, { 
              type: 'output', 
              content: `${expression} = ${result}` 
            }]);
          } else {
            setHistory(prev => [...prev, { 
              type: 'output', 
              content: 'Uso: calc [expresión] (ej: calc 5+3*2)' 
            }]);
          }
        } catch (e) {
          setHistory(prev => [...prev, { 
            type: 'error', 
            content: 'Error: Expresión inválida' 
          }]);
        }
        break;

      case 'random':
        const min = parseInt(args[1]) || 1;
        const max = parseInt(args[2]) || 100;
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        setHistory(prev => [...prev, { 
          type: 'output', 
          content: `Número aleatorio (${min}-${max}): ${random}` 
        }]);
        break;

      case 'ip':
        // Obtener IP usando WebRTC (limitado)
        setHistory(prev => [...prev, { 
          type: 'output', 
          content: 'Obteniendo información de IP...' 
        }]);
        
        fetch('https://api.ipify.org?format=json')
          .then(res => res.json())
          .then(data => {
            setHistory(prev => [...prev, { 
              type: 'output', 
              content: `IP Pública: ${data.ip}` 
            }]);
          })
          .catch(() => {
            setHistory(prev => [...prev, { 
              type: 'error', 
              content: 'No se pudo obtener la IP' 
            }]);
          });

        // IP local usando WebRTC
        getLocalIP();
        break;

      case 'sysinfo':
        setHistory(prev => [...prev, { 
          type: 'output', 
          content: `💻 SISTEMA:
  • Navegador: ${navigator.userAgent}
  • Plataforma: ${navigator.platform}
  • Idioma: ${navigator.language}
  • Cookies: ${navigator.cookieEnabled ? 'Habilitadas' : 'Deshabilitadas'}
  • Memoria: ${navigator.deviceMemory || 'Desconocida'} GB
  • Núcleos CPU: ${navigator.hardwareConcurrency || 'Desconocido'}
  • Conexión: ${navigator.connection ? navigator.connection.effectiveType : 'Desconocida'}
  • Resolución: ${window.screen.width}x${window.screen.height}
  • Profundidad color: ${window.screen.colorDepth} bits` 
        }]);
        break;

      case 'hacker':
        setHistory(prev => [...prev, { 
          type: 'output', 
          content: '💀 MODO HACKER ACTIVADO 💀' 
        }]);
        document.body.classList.add('hacker-mode');
        
        // Efecto de matriz
        const interval = setInterval(() => {
          const chars = '01';
          if (document.body.classList.contains('hacker-mode')) {
            setHistory(prev => [...prev, { 
              type: 'hacker', 
              content: Array(50).fill().map(() => chars[Math.floor(Math.random() * chars.length)]).join('')
            }]);
          } else {
            clearInterval(interval);
          }
        }, 100);

        setTimeout(() => {
          document.body.classList.remove('hacker-mode');
          clearInterval(interval);
          setHistory(prev => [...prev, { 
            type: 'output', 
            content: '💀 MODO HACKER DESACTIVADO 💀' 
          }]);
        }, 5000);
        break;
        case 'cd':
            
      default:
        setHistory(prev => [...prev, { 
          type: 'error', 
          content: `Comando no encontrado: ${command}. Escribe 'help' para ver los comandos disponibles.` 
        }]);
    }
  };

  const getLocalIP = () => {
    try {
      const rtc = new RTCPeerConnection();
      rtc.createDataChannel('');
      
      rtc.onicecandidate = (e) => {
        if (e.candidate) {
          const ip = e.candidate.address || e.candidate.ip;
          if (ip && !ip.includes(':')) {
            setHistory(prev => [...prev, { 
              type: 'output', 
              content: `IP Local: ${ip}` 
            }]);
          }
          rtc.close();
        }
      };

      rtc.createOffer()
        .then(offer => rtc.setLocalDescription(offer))
        .catch(() => {});

      setTimeout(() => rtc.close(), 3000);
    } catch (error) {
      console.log('No se pudo obtener IP local');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(currentInput);
      setCurrentInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      } else {
        setHistoryIndex(-1);
        setCurrentInput('');
      }
    }
  };

  return (
    <div className="mini-shell">
      <div className="shell-header">
        <span className="shell-title">Terminal</span>
        <span className="shell-status">🟢 CONECTADO</span>
      </div>
      
      <div className="shell-body">
        {history.map((item, index) => (
          <div key={index} className={`shell-line ${item.type}`}>
            {item.type === 'input' && <span className="shell-prompt">{item.content}</span>}
            {item.type === 'output' && <span className="shell-output">{item.content}</span>}
            {item.type === 'error' && <span className="shell-error">{item.content}</span>}
            {item.type === 'system' && <span className="shell-system">{item.content}</span>}
            {item.type === 'hacker' && <span className="shell-hacker">{item.content}</span>}
            {item.extra}
          </div>
        ))}
        <div ref={shellEndRef} />
      </div>

      <div className="shell-input-line">
        <span className="shell-prompt">$</span>
        <input
          ref={inputRef}
          type="text"
          className="shell-input"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Escribe un comando..."
        />
      </div>
      <Footer/>
    </div>
  );
};

export default MiniShell;