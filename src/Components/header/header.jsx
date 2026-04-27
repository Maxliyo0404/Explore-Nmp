import logo from "./Image/logo.svg";
function Header (){
    return (
        <>
         <div className="header">
            <div className="container">
             <div className="header-container">
                <a className="logo" href="#"><img src={logo} alt="logo" /></a>
             </div>

            </div>
         </div>
        </>
    )
}
export default Header;