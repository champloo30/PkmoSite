import '../../scss/about.scss'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <>
            <div className="about-hero" id="about-hero">
                <h1>About PKMO</h1>
            </div>
            <div className="wwb" id="wwb">
                <h2>What We Believe</h2>
                <div className="container">
                    <div className="box">
                        <h3>The Father</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem et tortor consequat id porta. Elit duis tristique sollicitudin nibh sit amet commodo nulla.</p>
                    </div>
                    <div className="box">
                        <h3>The Son</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem et tortor consequat id porta. Elit duis tristique sollicitudin nibh sit amet commodo nulla.</p>
                    </div>
                    <div className="box">
                        <h3>The Holy Spirit</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem et tortor consequat id porta. Elit duis tristique sollicitudin nibh sit amet commodo nulla.</p>
                    </div>
                </div>
            </div>
            <div className="statements">
                <h1>The Declaration of the Spirit of Peace</h1>
                <h2>Our Vision</h2>
                <h3>As people of Peace and in accordance with our Vision we declare we are: A <span>Prepared People</span> perservering through our Experiences; An <span>Instructed People</span> submiting to God-given leadership; A <span>Directed People</span> secure in our Structure; A <span>Sanctified People</span> sublime in our Holiness; A <span>Victorious People</span> living a life of Empowerment.</h3>
                <span>Joushua 3</span>
                <h2>Our Mission</h2>
                <h3>We our a family-oriented and holistic ministry seeking to touch every aspect of humanity (psychologically, emotionally, spiritually, physiologically and financially) through the inexhaustible riches of the Word of God. We are a unified body, triumphant in spirit and growing in grace. We are empowered through worship, steadfast in stewardship and fervent in fellowship. We are purposed and driven to evangelize our homes, our community and our world for the cause of Christ.</h3>
            </div>
            <div className="leadership">
                <h2>Get to know our Kingdom Leaders</h2>
                <Link to="/leadership"><button className="button">Here</button></Link>
            </div>
            <div className="about-location">
                <h2>Our Location & Directions</h2>
                <Link to="/location"><button className="button">Here</button></Link>
            </div>
        </>
    )
}
