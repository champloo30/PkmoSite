import "../connect/connect.scss"
import { useState } from "react";

export default function Connect() {
    const [data, setData] = useState({
        fname: "",
        lname: "",
        phone: "",
        email: "",
        option: "",
        text: "",
    });

    const { fname, lname, phone, email, option, text } = data;

    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                'https://v1.nocodeapi.com/champloo30/google_sheets/vqfYVNYpdvYYGPlN?tabId=Connect', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify([
                        [fname, lname, phone, email, option, text, new Date().toLocaleString()],
                    ]),
                }
            );
                await response.json();
                setData({ 
                    ...data, 
                    fname: "", 
                    lname: "", 
                    phone: "", 
                    email: "", 
                    option: "", 
                    text:"" 
                });

        } catch (error) {
            console.log(error)
        }
    }

    function thankYou() {
        alert('Thank you for your submission! We will reach out as soon as possible.')
    }

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
                    <form className="form" onSubmit={handleSubmit}>
                        <h3>Get Connected With The Kingdom</h3>
                        <div className="form-name">
                            <div className="fname">
                                <label htmlFor="fname">First Name</label><br />
                                <input 
                                    type="text" 
                                    name="fname" 
                                    id="fname" 
                                    placeholder="John" 
                                    value={fname}
                                    onChange={handleChange}
                                    required
                                />
                                <br />
                            </div>
                            <div className="lname">
                                <label htmlFor="lname">Last Name</label><br />
                                <input 
                                    type="text" 
                                    name="lname" 
                                    id="lname" 
                                    placeholder="Doe" 
                                    value={lname}
                                    onChange={handleChange}
                                    required
                                />
                                <br />
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
                                    <input 
                                        className="text" 
                                        type="tel" 
                                        name="phone" 
                                        id="phone" 
                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                                        placeholder="999-999-9999"
                                        value={phone}
                                        onChange={handleChange}
                                    />
                                    <br />
                                </div>
                                <div className="email">
                                    <div className="label">
                                        <input className="checkbox" type="checkbox" name="phone-email" id="email" value="Email" />
                                        <label htmlFor="email">Email Address</label><br />
                                    </div>
                                    <input 
                                        className="text" 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        placeholder="johndoe1@email.com"
                                        value={email}
                                        onChange={handleChange}
                                    />
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div className="request-options">
                            <label>Please select an option below:</label><br />
                            <div className="request-row">
                                <div>
                                    <input 
                                        className="radio" 
                                        type="radio" 
                                        name="option" 
                                        id="question" 
                                        value="Question"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="question">Question</label>
                                    <br />
                                </div>
                                <div>
                                    <input 
                                        className="radio" 
                                        type="radio" 
                                        name="option" 
                                        id="comment" 
                                        value="Comment"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="comment">Comment</label>
                                    <br />
                                </div>
                                <div>
                                    <input 
                                        className="radio" 
                                        type="radio" 
                                        name="option" 
                                        id="baptism" 
                                        value="Baptism"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="baptism">Baptism</label>
                                    <br />
                                </div>
                                <div>
                                    <input 
                                        className="radio" 
                                        type="radio" 
                                        name="option" 
                                        id="prayer" 
                                        value="Prayer"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="prayer">Prayer</label>
                                    <br />
                                </div>
                                <div>
                                    <input 
                                        className="radio" 
                                        type="radio" 
                                        name="option" 
                                        id="join" 
                                        value="Join"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="join">Join The Kingdom</label>
                                    <br />
                                </div>
                                
                            </div>
                        </div>
                        <div className="textarea">
                            <label htmlFor="text">Please let us know what we can do for you below:</label><br />
                            <textarea 
                                name="text" 
                                id="text" 
                                placeholder="Please enter text here." 
                                value={text}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <input onClick={thankYou} className="button" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    )
}
