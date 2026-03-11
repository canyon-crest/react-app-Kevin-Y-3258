import './Nav.css'

function Nav({ setPage }){
    return (
        <div>
            <ul>
                <li onClick={() => setPage("Home")}>Home</li>
                <li onClick={() => setPage("About")}>About</li>
                <li onClick={() => setPage("Contact")}>Contact</li>
            </ul>
        </div>
    )
}

export default Nav