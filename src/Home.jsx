import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Logo from '../src/assets/logos-main/logos-main/svg/logo-type-a.svg'
import Docker from '../src/assets/logos-main/logos-main/svg/docker.svg'
import Python from '../src/assets/logos-main/logos-main/svg/py.svg'
import Postgres from '../src/assets/logos-main/logos-main/svg/pg.svg'
import Node from '../src/assets/logos-main/logos-main/svg/node.svg'
import UbuntuLogo from '../src/assets/logos-main/logos-main/svg/ubuntu.svg'
import Android from '../src/assets/logos-main/logos-main/svg/an.svg'
import Bash from '../src/assets/logos-main/logos-main/svg/bash.svg'
import Next from '../src/assets/logos-main/logos-main/svg/next.svg'
import Linux from '../src/assets/logos-main/logos-main/svg/linux.svg'
import Windows from '../src/assets/logos-main/logos-main/svg/windows.svg'
import Ruby from '../src/assets/logos-main/logos-main/svg/ruby.svg'
import Logotipo from '../src/assets/logos-main/logos-main/png/logo.jpeg';
import Logo2 from '../src/assets/logos-main/logos-main/png/logo.png'


import { useNavigate } from 'react-router'
import { useState } from 'react'
import Footer from './footer'


export default function Home() {
    const navigate = useNavigate();
    const [Ubuntu, setUbuntu] = useState(false);
    const [docker, setDocker] = useState(false);
    const [python, setPython] = useState(false);
    const [postgres, setPostgres] = useState(false);
    const [node, setNode] = useState(false);
    const [android, setAndroid] = useState(false);
    const [bash, setBash] = useState(false);
    const [next, setNext] = useState(false);
    const [linux, setLinux] = useState(false);
    const [windows, setWindows] = useState(false);
    const [ruby, setRuby] = useState(false);
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(true);
    
    
    //change icon favicon to spinner
    const changeFavicon = (icon) => {
        const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        if(link) {
            link.href = icon;
            document.head.appendChild(link);
        }
        link.href
        link.type = 'image/svg+xml';
    };

    const loadingApp = () => {
        setLoading(true);
            changeFavicon("/spinn.svg");
          //simular
          setTimeout(() => {
            changeFavicon("/favicon.ico");
            setUrl("http://localhost:5173/");
            setLoading(false);
            window.location.href = "http://localhost:5173/";
            }, 2000);
    }
    const loadingDatabase = () =>{
        setLoading(true);
            setTimeout(()=>{
                 setUrl("http://localhost:5173/modules");
            setLoading(false);
            window.location.href = "http://localhost:5173/modules";
            }, 1000)
    }
    
    

    const scannerTool= ()=>{
        setWindows(true)
        navigate('/ToolsBrowser')
    }
    const windowsRender = () => {
        setWindows(true);
        navigate('/windowsRender');
    }
    const ubuntuRender = () => {
        setUbuntu(true);
        navigate('/ubuntuRender');
    }
    const handleMetasploitClick = () => {
        navigate('/flowshttp');
    }

    const handleNgrokClick = () => {
        navigate('/flowshttp');
    }

    const HamdleClickPython = () => {
        navigate('/exe');
    }

    const expoRender = () => {
        navigate('/expoRender');
    }

    const handleLoginClick = () => {
        navigate('/login');
    }

    const cardsData = Array(2).fill(null).map((__, index)=>({
        id: index + 1,
        title: index % 2 === 0 ? 'PYTHON' : 'EXPO/APP',
        nombre: index + 1,
        image: index % 2 === 0 ? Python : Logo,
        text: index % 2 === 0
          
    ? 'some modules for python and tkinter in this folder please see the folder python and tkinter'
    : 'expo app for android and ios please see the folder expo/app this folder contain the app movil',

        onclick: index % 2 === 0 ? HamdleClickPython : expoRender
    }));



    return (
        <div>
            <nav className="navbar bg-dark navbar-expand-lg fixed-top">
                <div className="container-fluid align-items-center justify-content-center">
                    <div className='d-flex align-items-center justify-content-center position-absolute top-0 start-0'>
                        <img src={Logotipo} alt="" width="200" height="50" />
                    </div>
                    <form className="d-flex w-50 justify-content-center  " role="search">
                        <input className="form-control me-2 w-50" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light" type="submit" onClick={handleLoginClick}>Sign in</button>
                        <button className="btn btn-outline-light" type="submit" onClick={handleLoginClick}>Create account</button>
                    </form>

                    <div className="d-flex cursor-pointer hover:text-white hover:scale-125 hover:bg-white hover:rounded-full hover:pointer-events-auto">
                        <a href="https://www.apple.com/"><i className="bi bi-apple text-white mx-1 cursor-pointer hover:text-white hover:scale-125 hover:bg-white hover:rounded-full size-10"></i></a>
                        <a href="https://www.amazon.com/"><i className="bi bi-amazon text-white mx-1 cursor-pointer hover:text-white hover:scale-125 hover:bg-white hover:rounded-full"></i></a>
                        <a href="https://www.mozilla.org/"><i className="bi bi-browser-firefox text-white mx-1 cursor-pointer hover:text-white hover:scale-125 hover:bg-white hover:rounded-full"></i></a>
                        <a href="https://git-scm.com/"><i className="bi bi-git text-white mx-1 cursor-pointer hover:text-white hover:scale-125 hover:bg-white hover:rounded-full"></i></a>
                        <a href="https://github.com/"><i className="bi bi-github text-white mx-1 cursor-pointer hover:text-white hover:scale-125 hover:bg-white hover:rounded-full"></i></a>
                        <a href="https://www.android.com/"><i className="bi bi-android text-white mx-1 cursor-pointer hover:text-white hover:scale-125 hover:bg-white hover:rounded-full"></i></a>
                        <a href="https://www.microsoft.com/"><i className="bi bi-windows text-white mx-1"></i></a>
                        <a href="https://www.linux.org/"><i className="bi bi-tux text-white mx-1"></i></a>

                        <div className='icon user'>
                            <i className="bi bi-person-fill text-white mx-1 cursor-pointer hover:text-white hover:scale-125 hover:bg-white hover:rounded-full w-10 h-10 cursor-pointer"></i>
                        </div>
                    </div>
                </div>
            </nav>


            <main className='container flex-shrink-0 ' style={{ width: "100%" }} >
                <div className="container mt-0 p-3 bg-white border-end border-dark scrollbar-dark overflow-y-scroll full-height mt-5 fixed top-0 start-0 z-1 position-absolute text-white vh-100"  style={{ width: "280px" }}>
                    <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
                        <svg className="bi me-2" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
                        <span className="fs-5 fw-semibold cursor-pointer hover:text-white hover:scale-125 hover:bg-white hover:rounded-full">DOCS/[typefish]</span>
                    </a>
                    <ul className="list-unstyled ps-0 ">
                        <li className="mb-1">
                            <button className="btn btn-toggle align-items-center rounded text-blue" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                                SHELL
                            </button>
                            <div className="collapse show" id="home-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>Payloads/local</a></li>
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>Creating servidor con postgresql</a></li>
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>utilizando shell script</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1">
                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="true">
                                PYTHON
                            </button>
                            <div className="collapse show" id="dashboard-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>python/modules</a></li>
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>python/scripts</a></li>
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>python/web</a></li>
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>python/api</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1">
                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                                WEB
                            </button>
                            <div className="collapse show" id="orders-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>WEB/html</a></li>
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>WEB/css</a></li>
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>WEB/javascript</a></li>
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>WEB/tailwindcss</a></li>
                                </ul>
                            </div>
                        </li>
                         <li className="mb-1">
                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                                postgresql
                            </button>
                            <div className="collapse show" id="orders-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>database/pg</a></li>
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }} type='button' onClick={loadingDatabase}>database/modules</a></li>
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>database/modules/http</a></li>
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>database/modules/html</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1">
                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                                EXPO/APP
                            </button>
                            <div className="collapse show" id="account-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>EXPO/APP</a></li>
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>react native</a></li>
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>EXPO/router</a></li>
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>EXPO/github</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1">
                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                                Docker
                            </button>
                            <div className="collapse show" id="account-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>Docker</a></li>
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>docker/compose</a></li>
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>docker/github</a></li>
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>docker/gitlab</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1">
                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                                ANDROID
                            </button>
                            <div className="collapse show" id="account-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>Android/kotlin</a></li>
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>Android/github</a></li>
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>Android/gitlab</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1">
                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                                UBUNTU
                            </button>
                            <div className="collapse show" id="account-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>Ubuntu/github</a></li>
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>Ubuntu/gitlab</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1">
                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                                KALI
                            </button>
                            <div className="collapse show" id="account-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>Kali/github</a></li>
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>Kali/gitlab</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1">
                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                                WINDOWS
                            </button>
                            <div className="collapse show" id="account-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>Windows/github</a></li>
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>Windows/gitlab</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1">
                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                                RUBY
                            </button>
                            <div className="collapse show" id="account-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>Ruby/github</a></li>
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>Ruby/gitlab</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1">
                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                                HTTP/HTTPs
                            </button>
                            <div className="collapse show" id="account-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="#" type='button' onClick={handleMetasploitClick} className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>HTTP/metasploit</a></li>
                                    <li><a href="#" type='button' onClick={handleNgrokClick} className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>HTTP/ngrok</a></li>
                                    <li><a href="#" type='button' onClick={handleMetasploitClick} className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>HTTPs/metasploit</a></li>
                                    <li><a href="#" type='button' onClick={handleNgrokClick} className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>HTTPs/ngrok</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1">
                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                                SQLite
                            </button>
                            <div className="collapse show" id="account-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>modules/sqlite</a></li>
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>modules/sqlite</a></li>
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>modules/sqlite</a></li>
                                    <li><a href="#" className="rounded" style={{ color: "rgba(4, 98, 221, 1)", cursor: "pointer", hover: "text-white hover:scale-125 hover:bg-white hover:rounded-full", fontFamily: "monospace", fontSize: '15px' }}>modules/sqlite</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1">
                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                                Account
                            </button>
                            <div className="collapse show" id="account-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="#" className="link-dark rounded">New...</a></li>
                                    <li><a href="#" className="link-dark rounded">Profile</a></li>
                                    <li><a href="#" className="link-dark rounded">Settings</a></li>
                                    <li><a href="#" className="link-dark rounded">Sign out</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1">
                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                                Account
                            </button>
                            <div className="collapse show" id="account-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="#" className="link-dark rounded">New...</a></li>
                                    <li><a href="#" className="link-dark rounded">Profile</a></li>
                                    <li><a href="#" className="link-dark rounded">Settings</a></li>
                                    <li><a href="#" className="link-dark rounded">Sign out</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1">
                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                                Account
                            </button>
                            <div className="collapse show" id="account-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="#" className="link-dark rounded">New...</a></li>
                                    <li><a href="#" className="link-dark rounded">Profile</a></li>
                                    <li><a href="#" className="link-dark rounded">Settings</a></li>
                                    <li><a href="#" className="link-dark rounded">Sign out</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1">
                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                                Account
                            </button>
                            <div className="collapse show" id="account-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="#" className="link-dark rounded">New...</a></li>
                                    <li><a href="#" className="link-dark rounded">Profile</a></li>
                                    <li><a href="#" className="link-dark rounded">Settings</a></li>
                                    <li><a href="#" className="link-dark rounded">Sign out</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1">
                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                                Account
                            </button>
                            <div className="collapse show" id="account-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="#" className="link-dark rounded">New...</a></li>
                                    <li><a href="#" className="link-dark rounded">Profile</a></li>
                                    <li><a href="#" className="link-dark rounded">Settings</a></li>
                                    <li><a href="#" className="link-dark rounded">Sign out</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1">
                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                                Account
                            </button>
                            <div className="collapse show" id="account-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="#" className="link-dark rounded">New...</a></li>
                                    <li><a href="#" className="link-dark rounded">Profile</a></li>
                                    <li><a href="#" className="link-dark rounded">Settings</a></li>
                                    <li><a href="#" className="link-dark rounded">Sign out</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1">
                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                                Account
                            </button>
                            <div className="collapse show" id="account-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="#" className="link-dark rounded">New...</a></li>
                                    <li><a href="#" className="link-dark rounded">Profile</a></li>
                                    <li><a href="#" className="link-dark rounded">Settings</a></li>
                                    <li><a href="#" className="link-dark rounded">Sign out</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1">
                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                                Account
                            </button>
                            <div className="collapse show" id="account-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="#" className="link-dark rounded">New...</a></li>
                                    <li><a href="#" className="link-dark rounded">Profile</a></li>
                                    <li><a href="#" className="link-dark rounded">Settings</a></li>
                                    <li><a href="#" className="link-dark rounded">Sign out</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1">
                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                                Account
                            </button>
                            <div className="collapse show" id="account-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="#" className="link-dark rounded">New...</a></li>
                                    <li><a href="#" className="link-dark rounded">Profile</a></li>
                                    <li><a href="#" className="link-dark rounded">Settings</a></li>
                                    <li><a href="#" className="link-dark rounded">Sign out</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1">
                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                                Account
                            </button>
                            <div className="collapse" id="account-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="#" className="link-dark rounded">New...</a></li>
                                    <li><a href="#" className="link-dark rounded">Profile</a></li>
                                    <li><a href="#" className="link-dark rounded">Settings</a></li>
                                    <li><a href="#" className="link-dark rounded">Sign out</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='container-fluid mt-2 'style={{left: '10rem', position: 'relative'}}>
                      <div className='container-fluid d-flex'>
                          <div className="col-lg-4 mb-4">
                              <div className="card" style={{ width: '18rem' }}>
                                     <img src={Postgres} className="card-img-top" width="200" height="50"></img>
                                        <div className="card-body">
                                        <h5 className="card-title" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '12px', fontFamily: 'monospace', color: 'white' }}>Postgresql/18/modules</h5>
                                        <p className="card-text" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '12px', fontFamily: 'monospace', color: 'white' }}>expo app for android and ios please see the folder expo/app this folder contain the app movil </p>
                                              <a href="#" className="btn btn-primary" type='button' onClick={expoRender}>Push me</a>
                                 </div>
                               </div>
                          </div>
                           <div className="col-lg-4 mb-4">
                              <div className="card" style={{ width: '18rem' }}>
                                     <img src={Postgres} className="card-img-top" width="200" height="50"></img>
                                        <div className="card-body">
                                        <h5 className="card-title" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '12px', fontFamily: 'monospace', color: 'white' }}>Postgresql</h5>
                                        <p className="card-text" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '12px', fontFamily: 'monospace', color: 'white' }}>expo app for android and ios please see the folder expo/app this folder contain the app movil </p>
                                              <a href="#" className="btn btn-primary" type='button' onClick={expoRender}>Push me</a>
                                 </div>
                               </div>
                          </div>
                           <div className="col-lg-4 mb-4">
                              <div className="card" style={{ width: '18rem' }}>
                                     <img src={Postgres} className="card-img-top" width="200" height="50"></img>
                                        <div className="card-body">
                                        <h5 className="card-title" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '12px', fontFamily: 'monospace', color: 'white' }}>Postgresql/18/linux</h5>
                                        <p className="card-text" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '12px', fontFamily: 'monospace', color: 'white' }}>expo app for android and ios please see the folder expo/app this folder contain the app movil </p>
                                              <a href="#" className="btn btn-primary" type='button' onClick={ubuntuRender}>Push me</a>
                                 </div>
                               </div>
                          </div>
                </div>
                  <div className='container-fluid d-flex'>
                          <div className="col-lg-4 mb-4">
                              <div className="card" style={{ width: '18rem' }}>
                                     <img src={Postgres} className="card-img-top" width="200" height="50"></img>
                                        <div className="card-body">
                                        <h5 className="card-title" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '12px', fontFamily: 'monospace', color: 'white' }}>Postgresql/18/windows</h5>
                                        <p className="card-text" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '12px', fontFamily: 'monospace', color: 'white' }}>expo app for android and ios please see the folder expo/app this folder contain the app movil </p>
                                              <a href="#" className="btn btn-primary" type='button' onClick={expoRender}>Push me</a>
                                 </div>
                               </div>
                          </div>
                           <div className="col-lg-4 mb-4">
                              <div className="card" style={{ width: '18rem' }}>
                                     <img src={Postgres} className="card-img-top" width="200" height="50"></img>
                                        <div className="card-body">
                                        <h5 className="card-title" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '12px', fontFamily: 'monospace', color: 'white' }}>Postgresql/18/expo</h5>
                                        <p className="card-text" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '12px', fontFamily: 'monospace', color: 'white' }}>expo app for android and ios please see the folder expo/app this folder contain the app movil </p>
                                              <a href="#" className="btn btn-primary" type='button' onClick={expoRender}>Push me</a>
                                 </div>
                               </div>
                          </div>
                           <div className="col-lg-4 mb-4">
                              <div className="card" style={{ width: '18rem' }}>
                                     <img src={Bash} className="card-img-top" width="200" height="50"></img>
                                        <div className="card-body">
                                        <h5 className="card-title" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '12px', fontFamily: 'monospace', color: 'white' }}>TOOLS</h5>
                                        <p className="card-text" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '12px', fontFamily: 'monospace', color: 'white' }}>expo app for android and ios please see the folder expo/app this folder contain the app movil </p>
                                              <a href="#" className="btn btn-primary" type='button' onClick={scannerTool}>Push me</a>
                                 </div>
                               </div>
                          </div>
                </div>

                </div>
            

            </main>
            <Footer />
        </div>
    );
}