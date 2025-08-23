function Navbar(){
    return(
        <>
        <header className="header flex  items-center">
            <img src="src/assets/logo.png" alt="Logo" className="logo" />
            <nav className="nav-links">
                <ul className="flex flex-row gap-8 items-center" >
                    <li><a href="/">Home</a></li>
                    <li><a href="/">How it works</a></li>
                    <li><a href="/">Plans & Pricing</a></li>
                    <li><a href="/">My Account</a></li>
                    <li><a href="/">Get a Card</a></li>
                </ul>
            </nav>

            <div className="buttons ml-auto">
                <button className="btn"> <img src="./assets/warning-icon.png" alt="" className="btn-icon" /> Scam Alert</button>
                <button className="btn">Vahan Card for web</button>
            </div>
        </header>       
        </>
    )
}

export default Navbar;

