import "./SectionTwo.css";
import { IoLocationSharp } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";
import two_rasm from "./image/two_rasm.svg";
import two_rasm2 from "./image/two_rasm2.svg";
import two_rasm3 from "./image/two_rasm3.svg";
import two_rasm4 from "./image/two_rasm4.svg";
function SectionTwo (){
    return (
        <>
           <div className="sectionTwo">
            <div className="container">
                <div className="sectionTwo-wrapper">
                    <div className="two-titles">
                        <h2 className="two-title">Featured destinations</h2>
                        <h4 className="two-text">View all <br /><span className="span"><SlArrowRight /></span></h4>
                    </div>
                    <ul className="two-list">
                        <li className="two-item">
                        <img className="two-rasm" src={two_rasm} alt="rasm" />
                        <span className="two-spans">
                            <h3 className="span-title">Raja Ampat <br /> <span className="two-span">Indonesia</span> </h3>
                        </span>
                        </li>
                        <li className="two-item">
                        <img className="two-rasm" src={two_rasm2} alt="" />
                        <span className="two-spans">
                            <h3 className="span-title">Fanjingshan <br /><span className="two-span">China</span> </h3>
                        </span>
                        </li>
                        <li className="two-item">
                        <img className="two-rasm" src={two_rasm3} alt="" />
                        <span className="two-spans">
                            <h3 className="span-title">Vevey <br /><span className="two-span">Switzerland </span> </h3>
                        </span>
                        </li>
                        <li className="two-item">
                        <img className="two-rasm" src={two_rasm4} alt="" />
                        <span className="two-spans">
                            <h3 className="span-title">Skadar <br /><span className="two-span">Montenegro</span> </h3>
                        </span>
                        </li>
                    </ul>
                </div>
            </div>
           </div>
        </>
    )
}
export default SectionTwo;