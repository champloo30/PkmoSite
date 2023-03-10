import './messages.scss'

export default function Messages() {

    let currentMonth = () => {
        const today = new Date();

        const options = {
            month: 'long'
        };

        return today.toLocaleDateString('en-US', options); 
    };

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
                    <h2>Here's our service of the month!</h2>
                    <h3>For our latest service, check out our Church Online page <a href="http://peacekmo.online.church" target="_blank" rel="noopener noreferrer"><span>here</span></a>.</h3>
                </div>
                <div className="catalog">
                    <div className="current-month">
                        <h2>{currentMonth()}</h2>
                        <div className="carousel">
                            <div className="video-container">
                                <iframe title='3/5/23' src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FPKMOhio%2Fvideos%2F759841219092270%2F&show_text=false&width=560&t=0" width="800" height="480" className='video' scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <h5>Can't find the service you're looking for? Click <a href="https://www.facebook.com/PeaceMissionaryBaptistChurch/videos" target="_blank" rel="noopener noreferrer"><span>here</span></a> to go to our Facebook page for all our past services.</h5>
            </div>
        </>
    )
}
