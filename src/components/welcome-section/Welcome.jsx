import '../../scss/welcome.scss'

export default function Welcome() {
    return (
        <div className="welcome" id="welcome">
            <div className="location-box">
                <h2>Join us how ever you can!</h2>
                <div className="container">
                    <div className="item">
                        <h3>In Person</h3>
                    </div>
                    <div className="item">
                        <h3>Online</h3>
                    </div>
                </div>
            </div>
            <h1>Welcome to the Kingdom</h1>
        </div>
    )
}
