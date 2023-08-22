import pic from "./assesets/pic.svg";
import "./FourthPicture.css";


export default function FourthPicture(){
    return (
        <>
                    {/* <!-- Fourth Box. --> */}
            <div className="mainBox4">
                <div className="container">
                    <div className="boxWrapper4">
                        <div className="textSection4">
                            <h2>RELIABLE TECH FOR STAYING CLOSE</h2>
    
                            <p>
                                Low-latency voice and video feels like you're in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.
                            </p>
                        </div>

                        <div className="imgSection4">
                            <img src={pic} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};