import pic from "./assesets/pic.svg";
import "./ThirdPicture.css";


export default function ThirdPicture (){
    return (
        <>
                    {/* <!-- Third Box. --> */}
            <div className="mainBox3">
                <div className="container">
                    <div className="box3Wrapper">
                        <div className="imgSection3">
                            <img src={pic} alt="img" />
                        </div>
    
                        <div class="textSection3">
                            <h2>From few to a fandom</h2>
    
                            <p>
                                Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};