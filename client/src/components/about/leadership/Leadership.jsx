import '../leadership/leadership.scss'
import founding from "../../../assets/Dalyn-Dunn-SS.png";
import campus from "../../../assets/David-Dunn-SS.png";

export default function Leadership() {
    return (
        <>
            <div className="l-hero">
                <h1>Our Leadership</h1>
            </div>
            <div className="bio">
                <div className="bio-fp">
                    <div className="img">
                        <img src={founding}alt="Pastor Dalyn Dunn" />
                    </div>
                    <div className="title">
                        <h2>Founding Pastor,</h2>
                        <h2>Dalyn L. Dunn</h2>
                    </div>
                    <div className="text">
                        <p>
                            Pastor Dalyn L. Dunn, is a native of Columbus, Ohio until his recent relocating to southern Georgia November 2021. He is the eldest  of 6 boys and embraces the healthy family values of a blended family dynamic.
                        </p>
                        <p>
                            Since accepting his call to ministry in 1991, he has served in a multiplicity of ways, both in the sacred and secular arenas. In almost 30 years of ministry, Pastor Dunn is nationally known as a Kingdom leader. He teaches and preaches Kingdom concepts that has challenged and changed many lives. His purpose is to empower people to discover, develop, and demonstrate their Kingdom identities in every aspect of life.
                        </p>
                        <p>
                            Since 2004, he has been blessed to serve as the Senior Pastor of Peace Missionary Baptist Church (soon to be Peace Kingdom Ministries of Ohio). Now, as of October 2021, he leads a 2-point charge. The new Senior Pastor of Kingdom Builders Ministries in Jesup, Georgia and overseer of Peace Kingdom Ministries of Ohio.
                        </p>
                        <p>
                            He is married to the beautiful Lady Dawn A. Dunn and has two incredible adult children Sarah Kae Evonne and Dalyn Joshua Lewis. He is also surrounded by three gregarious grandchildren Justen Rashaad Lewis, Jordyn Alise, and Parker Alexandria, with another grandson, Dalyn Kaleb Lewis, on the way.
                        </p>
                    </div>
                </div>
                <div className="bio-cp">
                    <div className="img">
                        <img src={campus} alt="Pastor David Dunn" />
                    </div>
                    <div className="title">
                        <h2>Campus Pastor,</h2>
                        <h2>David L. Dunn</h2>
                    </div>
                    <div className="text">
                        <p>
                            Pastor David L. Dunn was born October 14, 1976 in Columbus, Ohio to Vietnam veteran Harold (Skip) Lewis Dunn and Diana Dunn as the second oldest of six children. After serving in the United States Army, he preached his initial sermon in 2005 at Peace Missionary Baptist Church under the tutelage of Senior Pastor and eldest brother Dalyn L. Dunn.
                        </p>
                        <p>
                            Pastor David served as the media director since joining the ministry. In his tenure he has served as a worship leader, Men's Ministry director, Christian Formation instructor, and Youth Ministry director. In addition, Pastor David is a member of the Phi Beta Sigma Fraternity Inc., has worked as the host of the show "Saturday Morning Favor”, and was the board operator of the nationally syndicated "James Fortune Show" at 1580 WVKO The Praise.
                        </p>
                        <p>
                            Pastor David was ordained in 2015 and pastored for a short period of time before being called back to his home church to continue serving in ministry. As the ministry expanded, opportunity arose and Pastor David has been recently installed as the first Campus Pastor of the newly formed Peace Kingdom Ministries of Ohio.
                        </p>
                        <p>
                            Pastor David is committed to the advancement of the kingdom, through passionate preaching, and personable leadership to the glory of Jesus Christ.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
