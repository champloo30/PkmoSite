import "../footer/footer.scss"
import Logo from "../../assets/PKMO-Icon.png"
import facebook from "../../assets/icons8-facebook.svg"
import youtube from "../../assets/icons8-youtube.svg"

export default function Footer() {
    return (
        <div className="footer" id="footer">
            <img className="logo" src={Logo} alt="Peace Kingdom Ministries of Ohio Globe Logo" />
            <a href="/">
                <h2>Peace Kingdom Ministries of Ohio</h2>
            </a>
            <a href="http://www.facebook.com/PeaceMissionaryBaptistChurch" target="_blank" rel="noopener noreferrer" aria-label="Peace K M O Facebook Page">
                <img className="icon" src={facebook} alt="Facebook Logo" />
            </a>
            <a href="http://www.youtube.com/user/PeaceMBChurch" target="_blank" rel="noopener noreferrer" aria-label="Peace K M O Youtube Page">
                <img className="icon" src={youtube} alt="Youtube Logo" />
            </a>
        </div>
    )
}
