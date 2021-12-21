import "../../scss/connect.scss"

export default function Connect() {
    return (
        <>
            <div className="connect">
                <h1>Kingdom Connection</h1>
                <div className="p-text">
                    <p>Have a question, comment, or concern about PKMO? Maybe even prayer, guidance, or you just want to get involved?</p>
                    <p><span>Well, this is the place to be!</span></p>
                    <p>Please fill out the form and we'll get you in touch with the right people to provide the right service that you need!</p>
                </div>
                <div className="formbox">
                    <form className="form" action="" method="post">
                        <h3>Get Connected With The Kingdom</h3>
                        <div className="form-name">
                            <div className="fname">
                                <label htmlFor="fname">First Name</label><br />
                                <input type="text" name="fname" id="lname" placeholder="John" required/><br />
                            </div>
                            <div className="lname">
                                <label htmlFor="lname">Last Name</label><br />
                                <input type="text" name="lname" id="lname" placeholder="Doe" required/><br />
                            </div>
                        </div>
                        <div className="phone-email">
                            <label htmlFor="phone">How can we reach you?</label><br />
                            <div>
                                <div className="phone">
                                    <div className="label">
                                        <input className="checkbox" type="checkbox" name="phone-email" id="phone" value="Phone" minLength="10" maxLength="14" />
                                        <label htmlFor="phone">Phone Number</label><br />
                                    </div>
                                    <input className="text" type="tel" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="999-999-9999"/><br />
                                </div>
                                <div className="email">
                                    <div className="label">
                                        <input className="checkbox" type="checkbox" name="phone-email" id="email" value="Email" />
                                        <label htmlFor="email">Email Address</label><br />
                                    </div>
                                    <input className="text" type="email" name="email" id="email" placeholder="johndoe1@email.com"/><br />
                                </div>
                            </div>
                        </div>
                        <div className="request-options">
                            <label htmlFor="option">Please select an option below:</label><br />
                            <div className="request-row">
                                <div>
                                    <input className="radio" type="radio" name="option" id="question" value="Questions"/>
                                    <label htmlFor="question">Question</label><br />
                                </div>
                                <div>
                                    <input className="radio" type="radio" name="option" id="comment" value="Comments"/>
                                    <label htmlFor="comment">Comment</label><br />
                                </div>
                                <div>
                                    <input className="radio" type="radio" name="option" id="baptism" value="Baptism"/>
                                    <label htmlFor="baptism">Baptism</label><br />
                                </div>
                                <div>
                                    <input className="radio" type="radio" name="option" id="prayer" value="Prayer"/>
                                    <label htmlFor="prayer">Prayer</label><br />
                                </div>
                                <div>
                                    <input className="radio" type="radio" name="option" id="join" value="JoinTheKingdom"/>
                                    <label htmlFor="join">Join The Kingdom</label><br />
                                </div>
                                
                            </div>
                        </div>
                        <div className="textarea">
                            <label htmlFor="text">Please let us know what we can do for you below:</label><br />
                            <textarea name="text" id="text" placeholder="Please enter text here." required></textarea>
                        </div>
                        <input className="button" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    )
}
