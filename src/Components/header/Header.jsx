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
                        <li><a className="header-item" href="#"></a></li>
                        <li><a className="header-item" href="#"></a></li>
                        <li><a className="header-item" href="#"></a></li>
                        <li><a className="header-item" href="#"></a></li>
                    </ul>
                </div>
            </div>
          </div>
        </>
    )
}
export default Header;