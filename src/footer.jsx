import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Logotipo from '../src/assets/logos-main/logos-main/logo.jpeg';

export default function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-3 fixed-bottom">
            © 2026 Mi Sitio Web
            <ul className='justify-content-center d-flex gap-5'>
                <li><a href="#" className='text-white fw-bold fs-5 hover:text-blue-500 hover:scale-125 hover:bg-blue-500 hover:rounded-full hover:pointer-events-auto' >DOCS</a></li>
                <li><a href="#" className='text-white fw-bold fs-5 hover:text-blue-500 hover:scale-125 hover:bg-blue-500 hover:rounded-full hover:pointer-events-auto'>About US</a></li>
                <li><a href="#" className='text-white fw-bold fs-5 hover:text-blue-500 hover:scale-125 hover:bg-blue-500 hover:rounded-full hover:pointer-events-auto'>NEWS</a></li>
                <li><a href="#" className='text-white fw-bold fs-5 hover:text-blue-500 hover:scale-125 hover:bg-blue-500 hover:rounded-full hover:pointer-events-auto'>TYPEFISH</a></li>
                <li><a href="#" className='text-white fw-bold fs-5 hover:text-blue-500 hover:scale-125 hover:bg-blue-500 hover:rounded-full hover:pointer-events-auto'>COMMUNITY</a></li>
                <img src={Logotipo} alt="" width="200" height="50" />
            </ul>
            <div className='justify-content-center d-flex gap-1 w-100'>
                <a href="#"><i className="bi bi-android text-white mx-1 cursor-pointer hover:text-white hover:scale-125 hover:bg-white hover:rounded-full size-25"></i></a>
                <a href="#"><i className="bi bi-github text-white mx-1 cursor-pointer hover:text-white hover:scale-125 hover:bg-white hover:rounded-full size-25"></i></a>
                <a href="#"><i className="bi bi-google text-white mx-1 cursor-pointer hover:text-white hover:scale-125 hover:bg-white hover:rounded-full size-25"></i></a>
            </div>
        </footer>

    )
}