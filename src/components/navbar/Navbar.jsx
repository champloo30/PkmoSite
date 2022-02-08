import "../../scss/navbar.scss"
import NavLogo from "../../img-icon/PKMO-Logo-Nav.png"

export default function Navbar({ menuOpen, setMenuOpen }) {

    const changeNavbarColor = () => {
        if (window.scrollY >= 1) {
            document.querySelector('.navbar').style.backgroundColor = 'var(--main)';
        } else {
            document.querySelector('.navbar').style.backgroundColor = '';
        }
    }
    window.addEventListener('scroll', changeNavbarColor)

    return (
        <div className={"navbar " + (menuOpen && "on")} onScroll={changeNavbarColor}>
            <div className="container">
                <div className="left">
                    <a className="logo-sec" href="/"><img src={NavLogo} alt="Peace Kingdom Ministries of Ohio Logo" /></a>
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
