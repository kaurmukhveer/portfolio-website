function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container">
            <a className="navbar-brand nav-logo" href="#">Mukhveer</a>

            <div>
                <ul className="navbar-nav d-flex flex-row gap-3">
                    <li className="nav-item">
                        <a className="nav-link custom-nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link custom-nav-link" href="#projects">Projects</a>
                    </li>
                    
                </ul>
            </div>
        </div>

    </nav>
  )
}

export default Navbar