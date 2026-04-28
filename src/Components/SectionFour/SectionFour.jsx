import "./SectionFour.css";
import { HiStar } from "react-icons/hi";
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
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}
export default SectionFour;