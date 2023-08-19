import logo from "./assesets/logo.svg";
import asseset1 from "./assesets/asset1.svg";
import asseset2 from "./assesets/asset2.png";
import './Header.css';

export default function Header() {
    return (
        <>
            <header>
                <div className="headerSection">
                    <div className="container">
                        <div className="navbarSection">
                            <div className="logoSection">
                                <img src={logo} alt="logo"/>
                                <span>Discord</span>
                            </div>
    
    
                            <div className="navSection">
                                <nav>
                                    <ul>
                                        <li>Download</li>
                                        <li>Nitro</li>
                                        <li>Discover</li>
                                        <li>Safety</li>
                                        <li>Support</li>
                                        <li>Blog</li>
                                        <li>Careers</li>
                                    </ul>
                                </nav>
                            </div>
        
        
                            <div className="buttonSection">
                                <button>Login</button>
                            </div>
                        </div>
                    </div>


                                    {/* <!-- Picture Section  --> */}
                    <div className="secondHeader">
                        <div className="textSection">
                            <div className="heading1">
                                <h1>IMAGINE A PLACE...</h1>
                            </div>

                            <div className="para1">
                                <p>
                                    ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
                                </p>
                            </div>
                        </div>


                        <div className="buttonSection2">    
                            <button className="btn1">
                                <i class="fa-sharp fa-solid fa-download"></i>Download for Windows
                            </button>

                            <button className="btn2">
                                Open Discord in your browser
                            </button>
                        </div>
    
                
                        <div className="imageSection">
                            <img src={asseset1} alt="img1" className="img1" />
                            <img src={asseset2} alt="img2" className="img2" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
