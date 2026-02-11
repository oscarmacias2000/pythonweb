
export default function Login() {
    return (
        <div className="container">
            <div className="container img d-flex align-items-center justify-content-center overflow-y">
                <div className="login">
                    <img src="https://docs.metasploit.com/assets/images/metasploit-logo-dark-external-use.svg" alt="" />
                    <form action="">
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" />
                        </div>

                        <div className="d-grid gap-2 w-50 mx-auto">
                            <button type="submit" className="btn btn-dark">Login</button>
                            <button type="button" className="btn btn-outline-dark">Create account</button>
                            <button type="button" className="btn btn-outline-dark">Forgot password</button>

                            <a type="button" className="btn btn-outline-dark" href="https://github.com/login"><i class="bi bi-github"></i></a>
                            <a type="button" className="btn btn-outline-dark" href="https://github.com/login"><i class="bi bi-google"></i></a>
                            <a type="button" className="btn btn-outline-dark" href="https://github.com/login"><i class="bi bi-facebook"></i></a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}