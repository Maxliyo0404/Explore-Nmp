import "./SectionFour.css";
import { HiStar } from "react-icons/hi";
import four_rasm from "./image/four_rasm.svg";
import span1 from "./image/span1.svg";
import span2 from "./image/span2.svg";
import span3 from "./image/span3.svg";
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
                        <h3 className="four-new">Edward Newgate <span className="four-circel">Founder Circle</span></h3>
                      </div>
                      <div className="four-right">
                        <img className="four-img" src={four_rasm} alt="rasm" />
                        <span className="four-spans">
                          <img className="span-rasm" src={span1} alt="rasm" />
                          <span className="four-spane">
                             <img className="span-rasm1" src={span2} alt="rasm" />
                             <img className="span-rasm2" src={span3} alt="rasm" />
                          </span>
                        </span>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}
export default SectionFour;