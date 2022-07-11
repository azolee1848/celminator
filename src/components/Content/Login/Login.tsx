import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Login() {
    return (
        <div className="w-25 mx-auto">
            <p className="h1">Login</p>
            <form>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input autoFocus type="text" className="form-control" id="username" aria-describedby="userHelp" />
                        <div id="userHelp" className="form-text">We'll never share your data with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
            </form>
            <button className="btn btn-primary">Login</button>
        </div>
    );
}

export default Login;