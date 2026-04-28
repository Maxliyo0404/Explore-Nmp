
import "./Hero.css"
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
                                    <option >Location</option>
                                    <option >Abuja</option>
                                    <option >Nigeria</option>
                                </select>
                          
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Hero;