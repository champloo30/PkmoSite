import "../home/home.scss"
import dove from "../../assets/dove-png-41736.png"
import Logo from "../../assets/PKMO-Full-Logo-Big.png"
import PKMOid from "../../assets/PKMO-ID-White.png"

export default function Home() {
    return (
        <div className="home" id="home">
            <div className="hero">
                <div className="hero-text">
                    <h2>Welcome to</h2>
                    <img className="PKMOid" src={PKMOid} alt="Peace Kingdom Ministries of Ohio. Preaching the Gospel, empowering people, changing the world!" />
                </div>
            </div>
            <div className="welcome" id="welcome">
                
                <h1>Welcome to the Kingdom</h1>
                <div>
                    <iframe title="Welcome Video" className="welcome-video" width="560" height="315" src="https://www.youtube.com/embed/LL521D_1124" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="location-box">
                    <h2>Join us how ever you can!</h2>
                    <div className="container">
                        <a href="/location"><button className="button" aria-label="in person">In Person</button></a>
                        <a href="http://peacekmo.online.church" target="_blank" rel="noopener noreferrer"><button className="button" aria-label="church online">Online</button></a>
                    </div>
                </div>
            </div>
            <div className="about" id="about">
                <div className="left">
                    <img src={Logo} alt="PKMO Logo" />
                </div>
                <div className="right">
                    <div className="top-text">
                        <h2>“These things I have spoken unto you, that in me ye might have peace. In the world ye shall have tribulation: but be of good cheer; I have overcome the world.”</h2>
                        <h2>John 16:33</h2>
                    </div>
                    <div className="bottom-text">
                        <h1>Learn more about our church organiztion here</h1>
                    </div>
                    <a href="/about"><button className="button" aria-label="about us">About Us</button></a>
                </div>
            </div>
            <div className="peace-post" id="peacepost">
                <div className="container">
                    <h1>Peace Post</h1>
                    <span className="line"></span>
                    <h3>Your one stop shop for all Peace updates and events!</h3>
                    <a href="/peacepost"><button className="button" aria-label="peace post">Here</button></a>
                </div>
                <img src={dove} alt="Dove" />
            </div>
        </div>
    )
}
