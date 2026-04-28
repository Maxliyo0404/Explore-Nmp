import "./SectionTwo.css";
import { IoLocationSharp } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";
function SectionTwo (){
    return (
        <>
           <div className="sectionTwo">
            <div className="container">
                <div className="sectionTwo-wrapper">
                    <div className="two-titles">
                        <h2 className="two-title">Featured destinations</h2>
                        <h4 className="two-text">View all<span className="span"><SlArrowRight /></span></h4>
                    </div>
                    <ul className="two-list">
                        <li className="two-item">
                        <img className="two-rasm" src={} alt="" />
                        <span className="two-span">
                            <h4 className="span-title"></h4>
                             <p className="span-text"></p>
                        </span>
                        </li>
                        <li className="two-item">
                        <img className="two-rasm" src={} alt="" />
                        <span className="two-span">
                            <h4 className="span-title"></h4>
                             <p className="span-text"></p>
                        </span>
                        </li>
                        <li className="two-item">
                        <img className="two-rasm" src={} alt="" />
                        <span className="two-span">
                            <h4 className="span-title"></h4>
                             <p className="span-text"></p>
                        </span>
                        </li>
                        <li className="two-item">
                        <img className="two-rasm" src={} alt="" />
                        <span className="two-span">
                            <h4 className="span-title"></h4>
                             <p className="span-text"></p>
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