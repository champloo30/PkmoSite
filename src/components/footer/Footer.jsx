import "../../scss/footer.scss"
import GlobeLogo from "../../img-icon/PKMO-Globe-Logo-Footer.png"
import facebook from "../../img-icon/icons8-facebook.svg"
import youtube from "../../img-icon/icons8-youtube.svg"

export default function Footer() {
    return (
        <div className="footer" id="footer">
            <img className="logo" src={GlobeLogo} alt="Peace Kingdom Ministries of Ohio Globe Logo" />
            <a href="/">
                <h2>Peace Kingdom Ministries of Ohio</h2>
            </a>
            <a href="http://www.facebook.com/PeaceMissionaryBaptistChurch" target="_blank" rel="noopener noreferrer">
                <img className="icon" src={facebook} alt="Facebook Logo" />
            </a>
            <a href="http://www.youtube.com/user/PeaceMBChurch" target="_blank" rel="noopener noreferrer">
                <img className="icon" src={youtube} alt="Youtube Logo" />
            </a>
        </div>
    )
}
