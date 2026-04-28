
import "./Hero.css"
import Hero_img from "./image/Hero_img.svg";
function Hero (){
    return (
        <>
        <div className="Hero">
            <div className="container">
                <div className="hero-wrapper">
                    <div className="hero-left">
                        <h2 className="hero-title">Explore and Travel</h2>
                         <h3>holiday finder</h3>
                         <div className="line"></div>
                        <form className="form">
                            <div className="selcts">
                                <select className="select" >
                                    <option >Location</option>
                                    <option >Abuja</option>
                                    <option >Nigeria</option>
                                </select>
                          
                                <select className="select" >
                                    <option >Activity</option>
                                    <option >Swimming</option>
                                    <option >Hiking</option>
                                </select>
                          
                                <select className="select" >
                                    <option >Grade</option>
                                    <option >Economy</option>
                                    <option >Standart</option>
                                </select>
                          
                                <select className="select" >
                                    <option >Date</option>
                                    <option >Aprel 2026</option>
                                    <option >May 2026</option>
                                </select>
                              </div>
                              <button className="form-btn">Explore</button>
                        </form>
                    </div>
                    <div className="hero-right">
                     <img className="hero-rasm" src={ Hero_img } alt="hero" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Hero;