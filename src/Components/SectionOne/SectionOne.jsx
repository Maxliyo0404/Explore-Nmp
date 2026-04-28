import "./SectionOne.css";
import one_rasm from "./image/one_rasm.svg";
function SectionOne (){
    return (
        <>
          <div className="sectionOne">
            <div className="container">
                <div className="sectionOne-wrapper">
                    <div className="one-left">
                        <img className="one-rasm" src={one_rasm} alt="rasm" />
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}
export default SectionOne;