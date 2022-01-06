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
                    <h3>For our latest service, check out our Church Online page <a href="http://peacekmo.online.church" target="_blank" rel="noopener noreferrer"><span>here</span></a>!</h3>
                </div>
                <div className="catalog">
                    <div className="current-month">
                        <h2>January 2022</h2>
                        <div className="carousel">
                            <div className="carousel-video">
                                <iframe title="1/2/22" src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FPeaceMissionaryBaptistChurch%2Fvideos%2F4682791145149503%2F&show_text=false&width=267&t=0" width="304" height="440" className="video" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                                <h4>January 2, 2022</h4>
                            </div>
                            <div className="carousel-video">
                                <div className="video">
                                    <h3>No Content Available</h3>
                                </div>
                                <h4>N/A</h4>
                            </div>
                        </div>
                    </div>
                    <div className="previous-month">
                        <h2>Decmeber 2021</h2>
                        <div className="carousel">
                            <div className="carousel-video">
                                <iframe title="12/5/21" src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FPeaceMissionaryBaptistChurch%2Fvideos%2F1289352224871801%2F&show_text=false&width=267&t=0" width="304" height="440" className="video" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                                <h4>December 5, 2021</h4>
                            </div>
                            <div className="carousel-video">
                                <iframe title="12/12/21" src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FPeaceMissionaryBaptistChurch%2Fvideos%2F4186449218126185%2F&show_text=false&width=267&t=0" width="304" height="440" className="video" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                                <h4>December 12, 2021</h4>
                            </div>
                            <div className="carousel-video">
                                <iframe title="12/19/21" src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FPeaceMissionaryBaptistChurch%2Fvideos%2F1139558456848214%2F&show_text=false&width=267&t=0" width="304" height="440" className="video" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                                <h4>December 19, 2021</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <h5>Can't find the service you're looking for? Click <a href="https://www.facebook.com/PeaceMissionaryBaptistChurch/videos" target="_blank" rel="noopener noreferrer"><span>here</span></a> to go to our Facebook page for all our past services.</h5>
            </div>
        </>
    )
}
