import "../../scss/navbar.scss"

export default function Navbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a className="logo-sec" href="#hero"><span className="logo-ph"></span><h2>PKMO</h2></a>
                </div>
                <div className="center">
                    {/*<div className="nav-links">
                        <a href="">About</a>
                        <a href="">Messages</a>
                        <a href="">Peace Post</a>
                        <a href="">Connect</a>
    </div>*/}
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
