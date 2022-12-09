import '../location/location.scss'

export default function Location() {
    return (
        <>
            <div className="location">
                <div className="loc-head">
                    <h1>Location & Directions</h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.0054176691833!2d-82.96857958461777!3d39.9636315794204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883888e609b8b243%3A0xab558810127c7a87!2s115%20Wilson%20Ave%2C%20Columbus%2C%20OH%2043205!5e0!3m2!1sen!2sus!4v1637288693513!5m2!1sen!2sus" title="Google Map Location 115 Wilson Aveune" className="googlemaps" allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className="direction">
                    <div className="loc-text">
                        <h2>Location</h2>
                        <h3>115 Wilson Aveune, Columbus, OH 43205</h3>
                        <h3><span>Services: Sunday @ 11am</span></h3>
                        <h3>(Join us in the Chapel)</h3>
                    </div>
                    <div className="container">
                        <div className="item">
                            <h3>For <span>Directions</span> Click Here</h3>
                            <a href="http://goo.gl/maps/2CJf1UEafdeuhvAB6" target="_blank" rel="noopener noreferrer"><button className="button" aria-label="directions">Here</button></a>
                        </div>
                        <div className="item">
                            <h3>For <span>Church Online</span> Click Here</h3>
                            <a href="http://peacekmo.online.church" target="_blank" rel="noopener noreferrer"><button className="button" aria-label="church online">Here</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
