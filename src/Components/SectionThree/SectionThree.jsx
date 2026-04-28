import "./SectionThree.css";
import three_rasm from "./image/three_rasm.svg";

function SectionThree (){
    return (
        <>
          <div className="sectionThree">
            <div className="container">
                <div className="sectionThree-wrapper">
                    <div className="three-left">
                         <h2 className="three-title">Guides by Thousand Sunny </h2>
                         <p className="three-text">Packed with tips and advice from our on-the-ground experts, our city guides app (iOS and Android) is the ultimate resource before and during a trip.</p>
                         <button className="three-btn">Download</button>
                    </div>
                    <div className="three-right">
                        <img className="three-rasm" src={three_rasm} alt="rasm" />
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}
export default SectionThree;