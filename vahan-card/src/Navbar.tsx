
function Navbar(){
    return(
        <>
        <header className="header">
            <img src="src/assets/logo.png" alt="Logo" className="logo" />
            <nav className="nav">
                <ul className="nav-list" >
                    <li><a href="/">Home</a></li>
                    <li><a href="/">How it works</a></li>
                    <li><a href="/">Plans & Pricing</a></li>
                    <li><a href="/">My Account</a></li>
                    <li><a href="/">Get a Card</a></li>
                </ul>
            </nav>

            <div className="buttons">
                <button className="btn btn-secondary"> <img src="./assets/warning-icon.png" alt="" className="btn-icon" /> Scam Alert</button>
                <button className="btn btn-primary">Vahan Card for web</button>
            </div>

            <div className="hamburger">
                <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
            </div>
        </header>       
        </>
    )
}

export default Navbar;

