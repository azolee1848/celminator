import React from 'react';

function Login() {
    return (
        <>
            <p>Login</p>
            <label title="Username" htmlFor="username">Username</label>
            <input id="username" type="text" />
            <label title="Password" htmlFor="password">Password</label>
            <input id="password" type="password" />
        </>
    );
}

export default Login;