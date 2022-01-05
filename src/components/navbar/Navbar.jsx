import "../../scss/navbar.scss"
import NavLogo from "../../img-icon/PKMO-Logo-Nav.png"

export default function Navbar({ menuOpen, setMenuOpen }) {

    return (
        <div className={"navbar " + (menuOpen && "on")}>
            <div className="container">
                <div className="left">
                    <a className="logo-sec" href="/"><img src={NavLogo} alt="Peace Kingdom Ministries of Ohio Logo" /></a>
                </div>
                <div className="center">
                    <div className="nav-links">
                        <a className="link" href="/about">About</a>
                        <a className="link" href="/messages">Messages</a>
                        <a className="link" href="/peacepost">Peace Post</a>
                        <a className="link" href="/connect">Connect</a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
