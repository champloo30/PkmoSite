import '../../scss/menu.scss'
import { Link } from 'react-router-dom';

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
                            <Link className="link" to="/leadership">Our Leadership</Link>
                        </li>
                        <li onClick={()=>setMenuOpen(false)}>
                            <Link className="link" to="/location">Location & Directions</Link>
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
                            <Link className="link" to="/bibleteachings">Bible Teachings</Link>
                        </li>
                        <li className="link">Church Online</li>
                    </li>
                    <li className="link-name">
                        <div className="title">
                            <hr />
                            <h1>Peace Post</h1>
                            <hr />
                        </div>
                        <li className="link">Church Announcements</li>
                        <li className="link">COVID-19 Updates</li>
                    </li>
                    <li className="link-name">
                        <div className="title">
                            <hr />
                            <h1>Connect</h1>
                            <hr />
                        </div>
                        <li className="link">Connect</li>
                        <li className="link">Prayer</li>
                        <li className="link">Join The Kingdom</li>
                        <li className="link">Give</li>
                    </li>
                </ul>
            </div>
        </div>
    )
}
