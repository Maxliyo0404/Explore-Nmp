import "./SectionFour.css";
import { HiStar } from "react-icons/hi";
import four_rasm from "./image/four_rasm.svg";
function SectionFour (){
    return (
        <>
          <div className="sectionFour">
            <div className="container">
                <div className="sectionFour-wrapper">
                    <h2 className="four-title">Testimonials</h2>
                    <div className="four-cards">
                      <div className="four-left">
                        <div className="four-icons">
                         <div className="icon"><HiStar /></div>
                         <div className="icon"><HiStar /></div>
                         <div className="icon"><HiStar /></div>
                         <div className="icon"><HiStar /></div>
                         <div className="icon"><HiStar /></div>
                        </div>
                        <p className="four-text">“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”</p>
                        <h3 className="four-new">Edward Newgate</h3>
                        <h4 className="four-circel">Founder Circle</h4>
                      </div>
                      <div className="four-right">
                        <img className="four-img" src={four_rasm} alt="rasm" />
                        <span></span>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}
export default SectionFour;