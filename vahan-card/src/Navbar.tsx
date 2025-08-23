function Navbar(){
    return(
        <>
        <header className="flex items-center">
            <img src="src/assets/logo.png" alt="Logo" className="logo" />
            <nav>
                <ul className="flex flex-row items-center list-none gap-8" >
                    <li><a href="/" className="no-underline">Home</a></li>
                    <li><a href="/" className="no-underline">How it works</a></li>
                    <li><a href="/" className="no-underline">Plans & Pricing</a></li>
                    <li><a href="/" className="no-underline">My Account</a></li>
                    <li><a href="/" className="no-underline">Get a Card</a></li>
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

