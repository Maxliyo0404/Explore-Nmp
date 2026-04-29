import "./SectionFive.css";
import { IoLocationSharp } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";
import five_rasm1 from "./image/five_rasm1.svg";
import five_rasm2 from "./image/five_rasm2.svg";
import five_rasm3 from "./image/five_rasm3.svg";
import five_rasm4 from "./image/five_rasm4.svg";
function SectionFive (){
    return (
        <>
          <div className="sectionFive">
            <div className="container">
                <div className="sectionFive-wrapper">
                      <div className="five-titles">
                         <h2 className="five-title">Featured destinations</h2>
                         <h4 className="five-text">View all <br /><span className="spans"><SlArrowRight /></span></h4>
                    </div>
                    <ul className="five-list">
                        <li className="five-item">
                            <img className="five-rasm" src={five_rasm1} alt="rasm" />
                            <div className="five-titles">
                                <h5 className="five-many">The many benefits of  taking a healing holiday</h5>
                                <p className="five-texte">‘Helaing holidays’ are on the rise tohelp maximise your health and happines...</p>
                                <a className="link" href="#">Read more</a>
                            </div>
                        </li>
                        <li className="five-item">
                            <img className="five-rasm" src={five_rasm2} alt="rasm" />
                            <div className="five-titles">
                                <h5 className="five-many">The best Kyoto restaurant to try Japanese food</h5>
                                <p className="five-texte">From tofu to teahouses, here’s our guide to Kyoto’s best restaurants to visit...</p>
                                <a className="link" href="#">Read more</a>
                            </div>
                        </li>
                        <li className="five-item">
                            <img className="five-rasm" src={five_rasm3} alt="rasm" />
                            <div className="five-titles">
                                <h5 className="five-many">Skip Chichen Itza and head to this remote Yucatan</h5>
                                <p className="five-texte">It’s remote and challenging to get, but braving the jungle and exploring these ruins without the...</p>
                                <a className="link" href="#">Read more</a>
                            </div>
                        </li>
                        <li className="five-item">
                            <img className="five-rasm" src={five_rasm4} alt="rasm" />
                            <div className="five-titles">
                                <h5 className="five-many">Surf’s up at these beginner spots around the world</h5>
                                <p className="five-texte">If learning to surf has in on your to- do list for a while, the good news is: it’s never too late...</p>
                                <a className="link" href="#">Read more</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
          </div>
        </>
    )
}
export default SectionFive;