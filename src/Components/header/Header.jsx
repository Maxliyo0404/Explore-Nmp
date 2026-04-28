import "./Header.css";
import Explorer_logo from "./Image/Explorer_logo.svg";
function Header (){
    return (
        <>
          <div className="header">
            <div className="container">
                <div className="header-container">
                    <a className="logo" href="#"><img src={Explorer_logo} alt="logo" /></a>
                    <ul className="header-list">
                        <li><a className="header-item" href="#">Home</a></li>
                        <li><a className="header-item" href="#">Destinations</a></li>
                        <li><a className="header-item" href="#">About</a></li>
                        <li><a className="header-item" href="#">Partner</a></li>
                    </ul>
                    <div className="header-btns">
                        <button className="header-btn">Login</button>
                        <button className="header-btn">Register</button>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}
export default Header;