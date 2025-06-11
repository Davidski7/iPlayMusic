import { useState } from 'react'
import "../style/login.scss"
import { FaUser, FaKey, FaFingerprint } from 'react-icons/fa'
import { Link } from "react-router";

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="login-screen">
            <h1>Log In</h1>

            <div className="input-group">
                <label>Username</label>
                <div className="input-wrapper">
                    <input
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <FaUser className="icon" />
                </div>
            </div>

            <div className="input-group">
                <label>Password</label>
                <div className="input-wrapper">
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FaKey className="icon" />
                </div>
            </div>
            <Link to={`/walkthrough/`}>
                <button className="login-button">LOG IN</button>
            </Link>

            <div className="fingerprint-section">
                <div className="fingerprint-circle">
                    <FaFingerprint className="fingerprint-icon" />
                </div>
                <p>One-Touch Login</p>
            </div>
        </div>
    )
}
