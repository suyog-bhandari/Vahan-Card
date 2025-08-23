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
                <button className="btn"> <img src="./assets/warning-icon.png" alt="" className="btn-icon" /> Scam Alert</button>
                <button className="btn">Vahan Card for web</button>
            </div>
        </header>       
        </>
    )
}

export default Navbar;

