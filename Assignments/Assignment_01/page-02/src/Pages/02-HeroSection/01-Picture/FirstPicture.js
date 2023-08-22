import pic from "./assesets/pic1.svg";
import "./FirstPicture.css";


export default function FirstPicture(){
    return (
        <>
                    {/* <!-- First Box. --> */}
            <div className="mainBox1">
                <div className="container">
                    <div className="box1Wrapper">
                        <div className="imgSection1">
                            <img src={pic} alt="img" />
                        </div>
    
    
                        <div className="textSection1">
                            <h2>Create an invite-only place where you belong</h2>
    
                            <p>
                                Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}