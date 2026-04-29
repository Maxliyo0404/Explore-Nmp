import "./SectionFive.css";
import { IoLocationSharp } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";
import five_rasm1 from "./image/five_rasm1.svg";
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
                            <img className="five-rasm" src={} alt="rasm" />
                            <div className="five-titles">
                                <h5 className="five-many">The many benefits of  taking a healing holiday</h5>
                                <p className="five-texte"></p>
                                <a className="link" href="#">Read more</a>
                            </div>
                        </li>
                        <li className="five-item">
                            <img className="five-rasm" src={} alt="rasm" />
                            <div className="five-titles">
                                <h5 className="five-many">The many benefits of  taking a healing holiday</h5>
                                <p className="five-texte"></p>
                                <a className="link" href="#">Read more</a>
                            </div>
                        </li>
                        <li className="five-item">
                            <img className="five-rasm" src={} alt="rasm" />
                            <div className="five-titles">
                                <h5 className="five-many">The many benefits of  taking a healing holiday</h5>
                                <p className="five-texte"></p>
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