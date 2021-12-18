import '../../scss/menu.scss'

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <div className="menu-items">
                <ul className="menu-links">
                    <li className="link-name">
                        <div className="title">
                            <hr />
                            <h1>About</h1>
                            <hr />
                        </div>
                        <li onClick={()=>setMenuOpen(false)}>
                            <a className="link" href="/about">About PKMO</a>
                        </li>
                        <li onClick={()=>setMenuOpen(false)}>
                            <a className="link" href="/leadership">Our Leadership</a>
                        </li>
                        <li onClick={()=>setMenuOpen(false)}>
                            <a className="link" href="/location">Location & Directions</a>
                        </li>
                    </li>
                    <li className="link-name">
                        <div className="title">
                            <hr />
                            <h1>Messages</h1>
                            <hr />
                        </div>
                        <li onClick={()=>setMenuOpen(false)}>
                            <a className="link" href="/messages">Our Sunday Services</a>
                        </li>
                        <li onClick={()=>setMenuOpen(false)}>
                            <a className="link" href="http://peacekmo.online.church" target="_blank" rel="noopener noreferrer">
                                Church Online
                            </a>
                        </li>
                    </li>
                    <li className="link-name">
                        <div className="title">
                            <hr />
                            <h1>Peace Post</h1>
                            <hr />
                        </div>
                        <li onClick={()=>setMenuOpen(false)}>
                            <a className="link" href="/peacepost">Church Announcements</a>
                        </li>
                        <li className="link">COVID-19 Updates</li>
                    </li>
                    <li className="link-name">
                        <div className="title">
                            <hr />
                            <h1>Connect</h1>
                            <hr />
                        </div>
                        <li onClick={()=>setMenuOpen(false)}>
                            <a className="link" href="/connect">Connect</a>
                        </li>
                        <li className="link">Give</li>
                    </li>
                </ul>
            </div>
        </div>
    )
}
