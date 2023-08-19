import flag from "./assesets/flag.png";
import arrow from "./assesets/arrow.svg";
import logo from "./assesets/logo.svg";
import "./Footer.css";

export default function Footer(){

    const inlineStyle1 = {
        fontSize: '30px'
    };

    const inlineStyle2 = {
        color: '#5865f2'
    };

    const inlineStyle3 = {
        marginTop: '40px'
    };

    const inlineStyle4 = {
        marginTop: '41px', 
        fontFamily: "'Noto Sans', sans-serif"
    };

    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footerWrapper1">
                        <div className="footer1">
                            <div className="footerHeading">
                                <h3>IMAGINE A PLACE</h3>
    
                                <div className="line2">
                                    <img src={flag} alt="flag" className="flag" />
                                    <span>English, USA</span>
                                    <img src={arrow} alt="arrow" className="arrow" />
                                </div>
    
                                <div className="fIcons"  style={inlineStyle1}>
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                    <i class="fa-brands fa-square-facebook"></i>
                                    <i class="fa-brands fa-youtube"></i>
                                </div>
                            </div>
        
                            <div className="footerText">
                                <div className="fBox fBox1">
                                    <li style={inlineStyle2}>Product</li>
                                    <li>Download</li>
                                    <li>Nitro</li>
                                    <li>Status</li>
                                </div>
    
                                <div className="fBox fBox2">
                                    <li style={inlineStyle2}>Company</li>
                                    <li>About</li>
                                    <li>Jobs</li>
                                    <li>Branding</li>
                                    <li>Newsroom</li>
                                </div>

                                <div className="fBox fBox3">
                                    <li style={inlineStyle2}>Resources</li>
                                    <li>College</li>
                                    <li>Support</li>
                                    <li>Safetly</li>
                                    <li>Blog</li>
                                    <li>Feedback</li>
                                    <li>Developers</li>
                                    <li>StreamKit</li>
                                    <li>Creators</li>
                                </div>

                                <div className="fBox fBox4">
                                    <li style={inlineStyle2}>Policies</li>
                                    <li>Terms</li>
                                    <li>Privacy</li>
                                    <li>Cookie Settings</li>
                                    <li>Guidlines</li>
                                    <li>Acknowldgement</li>
                                    <li>Licenses</li>
                                    <li>Moderation</li>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer2">
                        <div className="logoSection">
                            <img src={logo} alt="img" style={inlineStyle3} />
                            <span style={inlineStyle4}>Discord</span>
                        </div>

                        <div className="buttonSection5">
                            <button>Sign up</button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};