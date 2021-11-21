import '../../scss/messages.scss'

export default function Messages() {
    return (
        <>
            <div className="messages">
                <h1>Messages</h1>
                <div className="message-questions">
                    <h3><span>Missed a service?</span></h3>
                    <h3>Have a scripture you want to share, but can't remember?</h3>
                    <h3><span>Just need to hear a recent message that spoke to you?</span></h3>
                </div>
                <div className="catalog-text">
                    <h2>Here's our recent Catalog</h2>
                    <h3>For our latest service, check out our Church Online page <span>here</span>!</h3>
                </div>
                <div className="catalog">
                    <div className="current-month">
                        <h2>December</h2>
                        <div className="carousel">
                            <div className="carousel-video"></div>
                            <div className="carousel-video"></div>
                            <div className="carousel-video"></div>
                            <div className="carousel-video"></div>
                            <div className="carousel-video"></div>
                        </div>
                    </div>
                    <div className="previous-month">
                    <h2>November</h2>
                        <div className="carousel">
                            <div className="carousel-video"></div>
                            <div className="carousel-video"></div>
                            <div className="carousel-video"></div>
                            <div className="carousel-video"></div>
                        </div>
                    </div>
                    <h4>Can't find the service you're looking for? Click <span>here</span> to go to our Facebook page for all our past services.</h4>
                </div>
            </div>
        </>
    )
}
