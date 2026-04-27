import "./Header.css";
import Explorer-logo from "../header/Image/Explorer-logo.svg"
function Header (){
    return (
        <>
          <div className="header">
            <div className="container">
                <div className="header-container">
                    <a href="#"><img src={Explorer-logo} alt="" /></a>
                </div>
            </div>
          </div>
        </>
    )
}
export default Header;