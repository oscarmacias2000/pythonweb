import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


export default function MainLayout() {
    return (
        <div>
            <nav class="navbar bg-dark navbar-expand-lg fixed-top">
                <div class="container-fluid align-items-center justify-content-center">
                    <div className='d-flex align-items-center justify-content-center position-absolute top-0 start-0'>
                        <img src="https://docs.metasploit.com/assets/images/metasploit-logo-dark-external-use.svg" className='' style={{ translateY: "-5px", transition: "all 0.3s ease", hover: "translateY(0px)", overflow: "hidden" }} alt="" width="200" height="50" />
                    </div>
                    <form class="d-flex w-50 " role="search">
                        <input class="form-control me-2 w-50" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-success" type="submit">Sign in</button>
                        <button class="btn btn-outline-success" type="submit">Create account</button>
                    </form>

                    <div className="d-flex">
                        <i class="bi bi-apple text-white mx-1 cursor-pointer hover:text-white hover:scale-125 hover:bg-white hover:rounded-full size-10"></i>
                        <i class="bi bi-amazon text-white mx-1 cursor-pointer hover:text-white hover:scale-125 hover:bg-white hover:rounded-full"></i>
                        <i class="bi bi-browser-firefox text-white mx-1 cursor-pointer hover:text-white hover:scale-125 hover:bg-white hover:rounded-full"></i>
                        <i class="bi bi-git text-white mx-1 cursor-pointer hover:text-white hover:scale-125 hover:bg-white hover:rounded-full"></i>
                        <i class="bi bi-github text-white mx-1 cursor-pointer hover:text-white hover:scale-125 hover:bg-white hover:rounded-full"></i>
                        <i class="bi bi-android text-white mx-1 cursor-pointer hover:text-white hover:scale-125 hover:bg-white hover:rounded-full"></i>
                        <i class="bi bi-windows text-white mx-1"></i>
                        <i class="bi bi-tux text-white mx-1"></i>
                    </div>
                </div>
            </nav>

            {/*Sidebar*/}
            <div className="flex-shrink-0 fixed-bottom  p-3 bg-white border-end border-dark scrollbar-dark overflow-y-scroll full-height mt-5 fixed top-0 start-0 z-1 position-absolute text-white vh-100" style={{ width: "280px" }}>
                <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
                    <svg className="bi me-2" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
                    <span className="fs-5 fw-semibold">Collapsible</span>
                </a>
                <ul className="list-unstyled ps-0">
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" style={{ color: "rgba(4, 68, 196, 1)" }} data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                            Pruebas de penetracion
                        </button>
                        <div className="collapse show w-100" id="home-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" className="link-dark rounded">Configuracion de las opciones del modulo</a></li>
                                <li><a href="#" className="link-dark rounded">Actualizacion de Shells a meterpreter</a></li>
                                <li><a href="#" className="link-dark rounded">Modulos posteriores a la recopilacion</a></li>
                                <li><a href="#" className="link-dark rounded">HTTP + HTTPS</a></li>
                                <li><a href="#" className="link-dark rounded">kubernetes</a></li>
                                <li><a href="#" className="link-dark rounded">Postgresql</a></li>
                                <li><a href="#" className="link-dark rounded">SQLite</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" style={{ color: "rgba(4, 68, 196, 1)" }} data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                            Usando metasploit / typefish
                        </button>
                        <div className="collapse show" id="dashboard-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" className="link-dark rounded">Empezando</a></li>
                                <li><a href="#" className="link-dark rounded">Instaladores nocturnos</a></li>
                                <li><a href="#" className="link-dark rounded">informar de un error</a></li>
                                <li><a href="#" className="link-dark rounded">Lo esencial</a></li>
                                <li><a href="#" className="link-dark rounded">Modulos en ejecuccion</a></li>

                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" style={{ color: "rgba(4, 68, 196, 1)" }} data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                            Desarrollo
                        </button>
                        <div className="collapse show" id="orders-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" className="link-dark rounded">New</a></li>
                                <li><a href="#" className="link-dark rounded">Processed</a></li>
                                <li><a href="#" className="link-dark rounded">Shipped</a></li>
                                <li><a href="#" className="link-dark rounded">Returned</a></li>
                            </ul>
                        </div>
                    </li>

                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" style={{ color: "rgba(4, 68, 196, 1)" }} data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                            Contacto
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




            <div className="main flex-fill" id="top" style={{ width: "50rem" }}>
                <div id="main-header" className="main-header">

                    {/* SEARCH */}
                    <div className="search w-50">
                        <div className="search-input-wrap fixed-top" style={{ width: "100%" }}>
                            <label htmlFor="search-input" className="search-label">
                                <svg viewBox="0 0 24 24" className="search-icon">
                                    <use xlinkHref="#svg-search" />
                                </svg>
                            </label>
                        </div>

                        <div id="search-results" className="search-results"></div>
                    </div>

                    {/* NAV AUX */}
                    <nav aria-label="Auxiliar" className="aux-nav">
                        <div className="d-flex">
                            <div className="content main w-100 mt-5 bg-white word-wrap overflow-wrap overflow-x-hidden word-break">
                                <img className='card mx-auto' src="https://docs.metasploit.com/assets/images/metasploit-logo-dark-external-use.svg" alt="" />

                                <ul className="aux-nav-list">
                                    <li className="aux-nav-list-item">
                                        <a
                                            href="//github.com/rapid7/metasploit-framework"
                                            className="site-button"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Pruebas de penetracion /
                                        </a> <span className="text-dark">HTTP + HTTPS</span>
                                    </li>
                                </ul>
                                <h2>Flujos de trabajo HTTP</h2>
                                <p>Los flujos de trabajo HTTP son una forma de automatizar tareas en Metasploit.
                                    HTTP (Protocolo de transferencia de hipertexto) es un protocolo de nivel de aplicación para sistemas de información hipermedia distribuidos y colaborativos.
                                </p>
                                <p>
                                    Hay dos puertos principales:

                                    80/TCP-HTTP
                                    443/TCP - HTTPS (Protocolo de transporte de hipertexto seguro ): cifrado mediante seguridad de la capa de transporte o, anteriormente, capa de sockets seguros.
                                    Tenga en cuenta que se puede utilizar cualquier puerto para ejecutar una aplicación que se comunique a través de HTTP/HTTPS.

                                    Este documento ofrece consejos generales para ejecutar y depurar módulos de Metasploit basados ​​en HTTP, pero es recomendable usar un módulo de Metasploit específico para la aplicación que se está probando. Por ejemplo:
                                </p>
                                <div className="container language-msf highlighter-rouge mt-5  text-dark  justify-content-center align-items-center" style={{ backgroundColor: "rgba(197, 190, 190, 1)" }}><div className="highlight"><pre className="highlight"><code>
                                    <span className="zp">msf</span> <span className="p">&gt;</span> search tomcat http
                                </code></pre></div></div>
                                <h2>Ejemplos de HTTP</h2>
                                <h5 className="mt-5">Modos auxiliares:</h5>
                                <div className="container language-plaintext highlighter-rouge text-dark d-grid" style={{ backgroundColor: "rgba(197, 190, 190, 1)" }}><div className="highlight"><pre className="highlight"><code>
                                    use auxiliary/scanner/http/title
                                    <br />
                                    run https://example.com
                                </code></pre></div></div>
                                <h5>Especificación de credenciales e información de carga útil:</h5> <br />
                                <div className="container language-plaintext highlighter-rouge text-dark d-grid" style={{ backgroundColor: "rgba(197, 190, 190, 1)", color: "black" }}><div className="highlight"><pre className="highlight"><code>
                                    use exploit/unix/http/cacti_filter_sqli_rce
                                    <br />
                                    run http://admin:pass@application.local/cacti/ lhost=tun0 lport=4444
                                    <br />
                                    run 'http://admin:pass with spaces@application.local/cacti/' lhost=tun0 lport=4444
                                </code></pre></div></div>
                                <h5>Especificación de puertos alternativos:</h5>
                                <div className="container language-plaintext highlighter-rouge text-dark d-grid" style={{ backgroundColor: "rgba(197, 190, 190, 1)" }}><div className="highlight"><pre className="highlight"><code>
                                    run http://192.168.123.6:9001
                                </code></pre></div></div>
                                <h2>Depuracion HTTP</h2>
                                <p>Puede registrar todas las solicitudes y respuestas HTTP en la consola de Metasploit con la HttpTraceopción, así como habilitar un registro detallado adicional:</p>
                                <div className="container language-plaintext highlighter-rouge text-dark d-grid" style={{ backgroundColor: "rgba(197, 190, 190, 1)" }}><div className="highlight"><pre className="highlight"><code>
                                    use auxiliary/scanner/http/title
                                    <br />
                                    run https://example.com
                                </code></pre></div></div>
                            </div>
                        </div>
                        <h3>Por ejemplo:</h3>
                        <div className="language-msf highlighter-rouge position-relative h-100 w-100 mt-5 mb-5 justify-content-center align-items-center"><div className="highlight"><pre className="highlight"><code><span className="zp">msf</span> <span className="p">&gt;</span> use scanner/http/title
                            <span className="zp">msf</span> auxiliary<span className="p">(</span><span className="kc">scanner/http/title</span><span className="p">)</span> <span className="p">&gt;</span> set RHOSTS 127.0.0.1<font></font>
                            RHOSTS =&gt; 127.0.0.1<font></font>
                            <span className="zp">msf</span> auxiliary<span className="p">(</span><span className="kc">scanner/http/title</span><span className="p">)</span> <span className="p">&gt;</span> set HttpTrace true<font></font>
                            HttpTrace =&gt; true<font></font>
                            <span className="zp">msf</span> auxiliary<span className="p">(</span><span className="kc">scanner/http/title</span><span className="p">)</span> <span className="p">&gt;</span> run<font></font>
                            <font></font>
                            <br />
                            <br />
                            ####################<font></font>
                            # Request:<font></font>
                            ####################<font></font>
                            <br />
                            <br />
                            GET / HTTP/1.1<font></font>
                            Host: 127.0.0.1<font></font>
                            User-Agent: Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)<font></font>
                            <font></font>
                            <font></font>
                            <br />
                            <br />
                            ####################<font></font>
                            # Response:<font></font>
                            ####################<font></font>
                            <br />
                            <br />
                            HTTP/1.0 200 OK<font></font>
                            Server: SimpleHTTP/0.6 Python/2.7.16<font></font>
                            Date: Wed, 16 Dec 2020 01:16:32 GMT<font></font>
                            Content-type: text/html; charset=utf-8<font></font>
                            Content-Length: 178<font></font>
                            <font></font>
                            <font></font>
                            <br />
                            <br />
                            &lt;!DOCTYPE html PUBLIC "-//W3C//DTD HTML 3.2 Final//EN"&gt;&lt;html&gt;<font></font>
                            &lt;title&gt;Directory listing for /&lt;/title&gt;<font></font>
                            &lt;body&gt;<font></font>
                            &lt;h2&gt;Directory listing for /&lt;/h2&gt;<font></font>
                            &lt;hr&gt;<font></font>
                            &lt;ul&gt;<font></font>
                            &lt;/ul&gt;<font></font>
                            &lt;hr&gt;<font></font>
                            &lt;/body&gt;<font></font>
                            &lt;/html&gt;<font></font>
                            <font></font>
                            <font></font>
                            <br />
                            <br />
                            <span className="zg">[+]</span> [127.0.0.1:80] [C:200] [R:] [S:SimpleHTTP/0.6 Python/2.7.16] Directory listing for /
                            <br />
                            <br />
                            <span className="zs">[*]</span> Scanned 1 of 1 hosts (100% complete)
                            <br />
                            <br />
                            <span className="zs">[*]</span> Auxiliary module execution completed
                            <span className="zp">msf</span> auxiliary<span className="p">(</span><span className="kc">scanner/http/title</span><span className="p">)</span> <span className="p">&gt;</span>
                        </code></pre></div></div>
                        <div className="language-msf highlighter-rouge position-relative h-100 w-100 mt-5 mb-5 justify-content-center align-items-center"><div className="highlight"><pre className="highlight"><code><span className="zp">msf</span> <span className="p">&gt;</span> use scanner/http/title
                            <span className="zp">msf</span> auxiliary<span className="p">(</span><span className="kc">scanner/http/title</span><span className="p">)</span> <span className="p">&gt;</span> set RHOSTS 127.0.0.1<font></font>
                            RHOSTS =&gt; 127.0.0.1<font></font>
                            <span className="zp">msf</span> auxiliary<span className="p">(</span><span className="kc">scanner/http/title</span><span className="p">)</span> <span className="p">&gt;</span> set HttpTrace true<font></font>
                            HttpTrace =&gt; true<font></font>
                            <span className="zp">msf</span> auxiliary<span className="p">(</span><span className="kc">scanner/http/title</span><span className="p">)</span> <span className="p">&gt;</span> run<font></font>
                            <font></font>
                            <br />
                            <br />
                            ####################<font></font>
                            # Request:<font></font>
                            ####################<font></font>
                            <br />
                            <br />
                            GET / HTTP/1.1<font></font>
                            Host: 127.0.0.1<font></font>
                            User-Agent: Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)<font></font>
                            <font></font>
                            <font></font>
                            <br />
                            <br />
                            ####################<font></font>
                            # Response:<font></font>
                            ####################<font></font>
                            <br />
                            <br />
                            HTTP/1.0 200 OK<font></font>
                            Server: SimpleHTTP/0.6 Python/2.7.16<font></font>
                            Date: Wed, 16 Dec 2020 01:16:32 GMT<font></font>
                            Content-type: text/html; charset=utf-8<font></font>
                            Content-Length: 178<font></font>
                            <font></font>
                            <font></font>
                            <br />
                            <br />
                            &lt;!DOCTYPE html PUBLIC "-//W3C//DTD HTML 3.2 Final//EN"&gt;&lt;html&gt;<font></font>
                            &lt;title&gt;Directory listing for /&lt;/title&gt;<font></font>
                            &lt;body&gt;<font></font>
                            &lt;h2&gt;Directory listing for /&lt;/h2&gt;<font></font>
                            &lt;hr&gt;<font></font>
                            &lt;ul&gt;<font></font>
                            &lt;/ul&gt;<font></font>
                            &lt;hr&gt;<font></font>
                            &lt;/body&gt;<font></font>
                            &lt;/html&gt;<font></font>
                            <font></font>
                            <font></font>
                            <br />
                            <br />
                            <span className="zg">[+]</span> [127.0.0.1:80] [C:200] [R:] [S:SimpleHTTP/0.6 Python/2.7.16] Directory listing for /
                            <br />
                            <br />
                            <span className="zs">[*]</span> Scanned 1 of 1 hosts (100% complete)
                            <br />
                            <br />
                            <span className="zs">[*]</span> Auxiliary module execution completed
                            <span className="zp">msf</span> auxiliary<span className="p">(</span><span className="kc">scanner/http/title</span><span className="p">)</span> <span className="p">&gt;</span>
                        </code></pre></div></div>
                        <h3>Para enviar todas las solicitudes HTTP a través de un proxy, es decir, a través de Burp Suite:</h3>
                        <div className="language-plaintext highlighter-rouge position-relative h-100 w-100 mt-5 mb-5 justify-content-center align-items-center"><div className="highlight"><pre className="highlight"><code>use auxiliary/scanner/http/title<font></font>
                            run http://example.com HttpTrace=true verbose=true proxies=HTTP:127.0.0.1:8080<font></font>
                        </code></pre></div></div>
                    </nav>
                </div>
            </div>
            <div className="search-overlay">
                <div className="card" style={{ width: "15rem;" }}>
                    <img src="https://docs.metasploit.com/assets/images/metasploit-logo-dark-external-use.svg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">metasploit</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        <a href="#" className="card-link">see modules/auxiliary/scanner/smb/title</a>
                        <a href="#" class="card-link">see modules/auxiliary/scanner/ftp/title</a>
                    </div>
                </div>
            </div>


        </div>
    );
}
