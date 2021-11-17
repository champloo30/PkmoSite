import "../../scss/footer.scss"
import facebook from "../../img-icon/icons8-facebook.svg"
import youtube from "../../img-icon/icons8-youtube.svg"

export default function Footer() {
    return (
        <div className="footer" id="footer">
            <div className="logo"></div>
            <h2>Peace Kingdom Ministries of Ohio</h2>
            <a href="http://www.facebook.com/PeaceMissionaryBaptistChurch" target="_blank" rel="noopener noreferrer">
                <img className="icon" src={facebook} alt="Facebook Logo" />
            </a>
            <a href="http://www.youtube.com/user/PeaceMBChurch" target="_blank" rel="noopener noreferrer">
                <img className="icon" src={youtube} alt="Youtube Logo" />
            </a>
        </div>
    )
}
