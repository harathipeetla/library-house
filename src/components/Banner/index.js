import banner from "../../assets/book-banner1.png"
import "./index.css"

const Banner =()=>{
    return(
        <div className="banner-container">
            <div>
                <h1>The more that you read, the more things you'll know.</h1>
                <p>The more that you learn,<br/>the more places you'll go</p>
            </div>
            <img src={banner} alt="banner" className="banner-img"/>
        </div>
    )
}

export default Banner