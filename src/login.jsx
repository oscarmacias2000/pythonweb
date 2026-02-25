import { useNavigate } from 'react-router';

export default function Login() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        const id = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        console.log(id, password);

        if (id === "oscar" && password === "123chivas") {
            navigate('/');
        } else {
            alert("Invalid credentials");
        }
    }
    return (
        <div className="container">
            <div className="container img d-flex align-items-center justify-content-center overflow-y">
                <div className="login">
                    <img src="https://docs.metasploit.com/assets/images/metasploit-logo-dark-external-use.svg" alt="" />
                    <form action="">
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label" id="username">Username</label>
                            <input type="text" className="form-control" id="username" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label" id="password">Password</label>
                            <input type="password" className="form-control" id="password" />
                        </div>

                        <div className="d-grid gap-2 w-50 mx-auto">
                            <button type="submit" className="btn btn-dark" onClick={handleLoginClick}>Login</button>
                            <button type="button" className="btn btn-outline-dark">Create account</button>
                            <button type="button" className="btn btn-outline-dark">Forgot password</button>

                            <a type="button" className="btn btn-outline-dark" href="https://github.com/login"><i className="bi bi-github"></i></a>
                            <a type="button" className="btn btn-outline-dark" href="https://github.com/login"><i className="bi bi-google"></i></a>
                            <a type="button" className="btn btn-outline-dark" href="https://github.com/login"><i className="bi bi-facebook"></i></a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}