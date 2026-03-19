import './Nav.css'
import GoogleLogin from './GoogleLogin'

function Nav({ setPage }){
    return (
        <div className="nav-container">
            <ul className="nav-links">
                <li onClick={() => setPage("Home")}>Home</li>
                <li onClick={() => setPage("About")}>About</li>
                <li onClick={() => setPage("APIs")}>Advice and Jokes</li>
                <li onClick={() => setPage("Contact")}>Contact</li>
            </ul>
            <div className="nav-auth">
                <GoogleLogin suppressHydrationWarning />
            </div>
        </div>
    )
}

export default Nav