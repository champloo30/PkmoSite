import "../../scss/home.scss"
import dove from "../../img-icon/dove-png-41736.png"
import GlobeLogo from "../../img-icon/PKMO-Globe-Logo.png"

export default function Home() {
    return (
        <div className="home" id="home">
            <div className="hero">
                <div className="hero-text">
                    <h2>Welcome to</h2>
                    <h1>Peace Kingdom Ministries of Ohio</h1>
                    <h3>"And let the peace of God rule in your hearts, to the which also ye are called in one body; and be ye thankful.”</h3>
                    <h3>Colossians 3:15 KJV</h3>
                </div>
            </div>
            <div className="welcome" id="welcome">
                <div className="location-box">
                    <h2>Join us how ever you can!</h2>
                    <div className="container">
                        <a href="/location"><button className="button">In Person</button></a>
                        <a href="http://peacekmo.online.church" target="_blank" rel="noopener noreferrer"><button className="button">Online</button></a>
                    </div>
                </div>
                <h1>Welcome to the Kingdom</h1>
                <div className="welcome-video"></div>
            </div>
            <div className="about" id="about">
                <div className="left">
                    <img src={GlobeLogo} alt="PKMO Globe Logo" />
                </div>
                <div className="right">
                    <div className="top-text">
                        <h2>“These things I have spoken unto you, that in me ye might have peace. In the world ye shall have tribulation: but be of good cheer; I have overcome the world.”</h2>
                        <h2>John 16:33</h2>
                    </div>
                    <div className="bottom-text">
                        <h1>Learn more about our church organiztion here</h1>
                    </div>
                    <a href="/about"><button className="button">About Us</button></a>
                </div>
            </div>
            <div className="peace-post" id="peacepost">
                <div className="container">
                    <h1>Peace Post</h1>
                    <span className="line"></span>
                    <h3>Your one stop shop for all Peace updates and events!</h3>
                    <a href="/peacepost"><button className="button">Here</button></a>
                </div>
                <img src={dove} alt="Dove" />
            </div>
        </div>
    )
}
