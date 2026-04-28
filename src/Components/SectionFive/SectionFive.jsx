import "./SectionFive.css";
import { IoLocationSharp } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";
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
                    <ul className=""></ul>
                </div>
            </div>
          </div>
        </>
    )
}
export default SectionFive;