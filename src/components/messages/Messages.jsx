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
                            <div className="carousel-video">
                                <div className="video"></div>
                                <h4>Title</h4>
                                <h4>Date</h4>
                            </div>
                            <div className="carousel-video">
                                <div className="video"></div>
                                <h4>Title</h4>
                                <h4>Date</h4>
                            </div>
                            <div className="carousel-video">
                                <div className="video"></div>
                                <h4>Title</h4>
                                <h4>Date</h4>
                            </div>
                            <div className="carousel-video">
                                <div className="video"></div>
                                <h4>Title</h4>
                                <h4>Date</h4>
                            </div>
                            <div className="carousel-video">
                                <div className="video"></div>
                                <h4>Title</h4>
                                <h4>Date</h4>
                            </div>
                        </div>
                        <div className="bible-study">
                            <h2>Bible Study</h2>
                            <div className="bs-catalog">
                                <div className="bs-videos">
                                    <div className="video"></div>
                                    <h3>Title</h3>
                                    <h3>Date</h3>
                                </div>
                                <div className="bs-videos">
                                    <div className="video"></div>
                                    <h3>Title</h3>
                                    <h3>Date</h3>
                                </div>
                                <div className="bs-videos">
                                    <div className="video"></div>
                                    <h3>Title</h3>
                                    <h3>Date</h3>
                                </div>
                                <div className="bs-videos">
                                    <div className="video"></div>
                                    <h3>Title</h3>
                                    <h3>Date</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="previous-month">
                        <h2>November</h2>
                        <div className="carousel">
                            <div className="carousel-video">
                                <div className="video"></div>
                                <h4>Title</h4>
                                <h4>Date</h4>
                            </div>
                            <div className="carousel-video">
                                <div className="video"></div>
                                <h4>Title</h4>
                                <h4>Date</h4>
                            </div>
                            <div className="carousel-video">
                                <div className="video"></div>
                                <h4>Title</h4>
                                <h4>Date</h4>
                            </div>
                            <div className="carousel-video">
                                <div className="video"></div>
                                <h4>Title</h4>
                                <h4>Date</h4>
                            </div>
                        </div>
                        <div className="bible-study">
                            <h2>Bible Study</h2>
                            <div className="bs-catalog">
                                <div className="bs-videos">
                                    <div className="video"></div>
                                    <h3>Title</h3>
                                    <h3>Date</h3>
                                </div>
                                <div className="bs-videos">
                                    <div className="video"></div>
                                    <h3>Title</h3>
                                    <h3>Date</h3>
                                </div>
                                <div className="bs-videos">
                                    <div className="video"></div>
                                    <h3>Title</h3>
                                    <h3>Date</h3>
                                </div>
                                <div className="bs-videos">
                                    <div className="video"></div>
                                    <h3>Title</h3>
                                    <h3>Date</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h5>Can't find the service you're looking for? Click <a href="https://www.facebook.com/PeaceMissionaryBaptistChurch/videos" target="_blank" rel="noopener noreferrer"><span>here</span></a> to go to our Facebook page for all our past services.</h5>
            </div>
        </>
    )
}
