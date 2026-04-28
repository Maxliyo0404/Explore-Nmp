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
                    <div className="one-right">
                        <h2 className="one-title">A new way to explore the world </h2>
                         <p className="one-text">For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect trip, but now, they can also let Lonely Planet Experiences lead the way</p>
                         <button className="one-btn">Learn more</button>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}
export default SectionOne;