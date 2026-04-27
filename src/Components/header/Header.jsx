import "./Header.css";
import Explorer_logo from "./Image/Explorer_logo.svg";
function Header (){
    return (
        <>
          <div className="header">
            <div className="container">
                <div className="header-container">
                    <a href="#"><img src={Explorer_logo} alt="" /></a>
                </div>
            </div>
          </div>
        </>
    )
}
export default Header;