import { useState } from "react";


function Navbar(){
    const [navOpen, setNavOpen] = useState(false);
    const navClose = ()=>{
        setNavOpen(false);
    }

    const navToggle=()=>{
        setNavOpen(!navOpen);
    }

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

            <div className="hamburger" onClick={navToggle}>
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


        <div className={`side-nav ${navOpen ? "open":""}`}>
            <div className="cross-icon" onClick={navClose}>
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
  <line x1="18" y1="6" x2="6" y2="18" />
  <line x1="6" y1="6" x2="18" y2="18" />
</svg>

            </div>
            <nav className="nav-mobile">
                <ul className="mobile-list" >
                    <li><a href="/">Home</a></li>
                    <li><a href="/">How it works</a></li>
                    <li><a href="/">Plans & Pricing</a></li>
                    <li><a href="/">My Account</a></li>
                    <li><a href="/">Get a Card</a></li>
                </ul>
            </nav>
            <div className="mobile-buttons">
                <button className="btn btn-secondary mobile-secondary"> <img src="./assets/warning-icon.png" alt="" className="btn-icon" /> Scam Alert</button>
                <button className="btn btn-primary">Vahan Card for web</button>
            </div>
        </div>    
        </>
    )
}

export default Navbar;

