import "../../scss/navbar.scss"

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <a className="logo-sec" href="#hero"><span className="logo-ph"></span><h2>PKMO</h2></a>
                </div>
                <div className="center">
                    <div className="nav-links"></div>
                </div>
                <div className="right">
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
