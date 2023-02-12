import "../navbar/navbar.scss"
import NavLogo from "../../assets/PKMO-Icon.png"

export default function Navbar({ menuOpen, setMenuOpen }) {

    return (
        <div className={"navbar " + (menuOpen && "on")}>
            <div className="container">
                <div className="left">
                    <a className="logo-sec" href="/">
                        <img src={NavLogo} alt="Peace Kingdom Ministries of Ohio Globe Logo" className="logo-nav"/>
                        {/* <div className="logo-text">
                            <span className="text">Peace Kingdom</span>
                            <span className="text">Ministries of</span>
                            <span className="text">Ohio</span>
                        </div> */}
                    </a>
                </div>
                <div className="right">
                    <button className="hamburger" aria-label="menu" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1" aria-roledescription="hamburger"></span>
                        <span className="line2" aria-roledescription="hamburger"></span>
                        <span className="line3" aria-roledescription="hamburger"></span>
                    </button>
                </div>
            </div>
        </div>
    )
}
