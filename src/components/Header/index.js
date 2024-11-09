import logo from "../../assets/book-logo.jpg"
import "./index.css"

const Header = ()=>{
    return(
    <div className="header-container">
        <div className="logo-container">
            <img src={logo} alt="logo" className="logo"/>
        </div>
        <div className="list-container">
            <li>Home</li>
            <li>About</li>
        </div>
    </div>
    )
}
export default Header