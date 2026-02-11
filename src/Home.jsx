import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useNavigate } from 'react-router'

export default function Home() {
    const navigate = useNavigate();

    const handleMetasploitClick = () => {
        navigate('/flowshttp');
    }

    return (
        <div>
            <nav class="navbar bg-dark navbar-expand-lg fixed-top">
                <div class="container-fluid align-items-center justify-content-center">
                    <div className='d-flex align-items-center justify-content-center position-absolute top-0 start-0'>
                        <img src="https://docs.metasploit.com/assets/images/metasploit-logo-dark-external-use.svg" alt="" width="200" height="50" />
                    </div>
                    <form class="d-flex w-50 " role="search">
                        <input class="form-control me-2 w-50" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-success" type="submit">Sign in</button>
                        <button class="btn btn-outline-success" type="submit">Create account</button>
                    </form>

                    <div className="d-flex cursor-pointer hover:text-white hover:scale-125 hover:bg-white hover:rounded-full hover:pointer-events-auto">
                        <a href="https://www.apple.com/"><i class="bi bi-apple text-white mx-1 cursor-pointer hover:text-white hover:scale-125 hover:bg-white hover:rounded-full size-10"></i></a>
                        <a href="https://www.amazon.com/"><i class="bi bi-amazon text-white mx-1 cursor-pointer hover:text-white hover:scale-125 hover:bg-white hover:rounded-full"></i></a>
                        <a href="https://www.mozilla.org/"><i class="bi bi-browser-firefox text-white mx-1 cursor-pointer hover:text-white hover:scale-125 hover:bg-white hover:rounded-full"></i></a>
                        <a href="https://git-scm.com/"><i class="bi bi-git text-white mx-1 cursor-pointer hover:text-white hover:scale-125 hover:bg-white hover:rounded-full"></i></a>
                        <a href="https://github.com/"><i class="bi bi-github text-white mx-1 cursor-pointer hover:text-white hover:scale-125 hover:bg-white hover:rounded-full"></i></a>
                        <a href="https://www.android.com/"><i class="bi bi-android text-white mx-1 cursor-pointer hover:text-white hover:scale-125 hover:bg-white hover:rounded-full"></i></a>
                        <a href="https://www.microsoft.com/"><i class="bi bi-windows text-white mx-1"></i></a>
                        <a href="https://www.linux.org/"><i class="bi bi-tux text-white mx-1"></i></a>

                        <div className='icon user'>
                            <a href="/login"><i class="bi bi-person-fill text-white mx-1 cursor-pointer hover:text-white hover:scale-125 hover:bg-white hover:rounded-full w-10 h-10 cursor-pointer"></i></a>
                        </div>
                    </div>
                </div>
            </nav>


            <main className='container gap-4 mt-5 top-0 start-0 z-1 position-static'>

                <div className="flex-shrink-0 p-3 bg-white border-end border-dark scrollbar-dark overflow-y-scroll full-height mt-5 fixed top-0 start-0 z-1 position-absolute text-white vh-100" style={{ width: "280px" }}>
                    <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
                        <svg className="bi me-2" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
                        <span className="fs-5 fw-semibold">Collapsible</span>
                    </a>
                    <ul className="list-unstyled ps-0">
                        <li className="mb-1">
                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                                Home
                            </button>
                            <div className="collapse show" id="home-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="#" className="link-dark rounded">Overview</a></li>
                                    <li><a href="#" className="link-dark rounded">Updates</a></li>
                                    <li><a href="#" className="link-dark rounded">Reports</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1">
                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                                Dashboard
                            </button>
                            <div className="collapse show" id="dashboard-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="#" className="link-dark rounded">Overview</a></li>
                                    <li><a href="#" className="link-dark rounded">Weekly</a></li>
                                    <li><a href="#" className="link-dark rounded">Monthly</a></li>
                                    <li><a href="#" className="link-dark rounded">Annually</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1">
                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                                Orders
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

                <div className="container d-flex gap-4 gy-4 cards">
                    <div className="row">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="https://docs.metasploit.com/assets/images/metasploit-logo-dark-external-use.svg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Metasploit</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <a href="#" className="btn btn-dark" onClick={handleMetasploitClick}>Go metasploit</a>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={{ width: '19rem' }}>
                        <img src="https://www.python.org/static/img/python-logo.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Tkinter</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a href="#" className="btn btn-dark">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="https://sqlite.org/images/sqlite370_banner.svg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Sqlite</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a href="#" className="btn btn-dark">Go to Sqlite</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Docker_Logo.png/330px-Docker_Logo.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Docker</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a href="#" className="btn btn-dark">Go to Docker</a>
                        </div>
                    </div>
                </div>

                <div className="container d-flex gap-4 gy-4">
                    <div className="row">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="https://docs.metasploit.com/assets/images/metasploit-logo-dark-external-use.svg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Metasploit</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <a href="#" className="btn btn-dark">Go to Metasploit</a>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="https://www.python.org/static/img/python-logo.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Python</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a href="#" className="btn btn-dark">Go to Python</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="https://sqlite.org/images/sqlite370_banner.svg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Sqlite</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a href="#" className="btn btn-dark">Go to Sqlite</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Gnu-bash-logo.svg/250px-Gnu-bash-logo.svg.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Bash/exploits</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a href="#" className="btn btn-dark">Go to Bash/exploits</a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}