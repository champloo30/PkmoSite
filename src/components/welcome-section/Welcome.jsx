import '../../scss/welcome.scss'

export default function Welcome() {
    return (
        <div className="welcome" id="welcome">
            <div className="location-box">
                <h2>Join us how ever you can!</h2>
                <div className="container">
                    <button className="button">
                        <h3>In Person</h3>
                    </button>
                    <button className="button">
                        <h3>Online</h3>
                    </button>
                </div>
            </div>
            <h1>Welcome to the Kingdom</h1>
        </div>
    )
}
