import "/.SectionSix.css";
import six from "./image/six.svg"
function SectionSix () {
    return (
        <>
         <div className="sectionSix">
            <div className="container">
                <div className="sectionSix-wrapper">
                    <ul className="six-list">
                        <li className="six-item">
                         <img className="six-rasm" src={six} alt="" />
                         <p className="six-text">Plan and book your perfect trip with expert advice, travel tips destination information from us</p>
                         <a className="sixs" href="#">©2020 Thousand Sunny. All rights reserved</a>
                        </li>
                        <li className="six-item">
                            <a className="six-link" href="#">Destinations</a>
                            <a className="six-link" href="#">Africa  </a>
                            <a className="six-link" href="#">Antarctica</a>
                            <a className="six-link" href="#">Asia</a>
                            <a className="six-link" href="#"> Europe </a>
                            <a className="six-link" href="#">America</a>
                        </li>
                        <li className="six-item">
                            <a className="six-link" href="#">Shop</a>
                            <a className="six-link" href="#">Destination Guides  </a>
                            <a className="six-link" href="#">Pictorial & Gifts</a>
                            <a className="six-link" href="#">Special Offers </a>
                            <a className="six-link" href="#">Delivery Times</a>
                            <a className="six-link" href="#"> FAQs</a>
                        </li>
                        <li className="six-item">
                            <a className="six-link" href="#">Interests</a>
                            <a className="six-link" href="#">Adventure Travel   </a>
                            <a className="six-link" href="#">Art And Culture</a>
                            <a className="six-link" href="#">Wildlife And Nature</a>
                            <a className="six-link" href="#">Family Holidays </a>
                            <a className="six-link" href="#">Food And Drink</a>
                        </li>
                    </ul>
                    <hr />
                    
                </div>
            </div>
         </div>
        </>
    )
}
export default SectionSix;