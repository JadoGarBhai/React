import pic from "./assesets/pic.svg";
import "./SecondPicture.css";

export default function SecondPicture(){
    return (
        <>
                    {/* <!-- Second Box. --> */}
            <div className="mainBox2">
                <div className="container">
                    <div className="box2Wrapper">
                        <div className="imgSection2">
                            <img src={pic} alt="img" />
                        </div>
    
                        <div className="textSection2">
                            <h2>Where hanging out is easy</h2>
    
                            <p>
                                Grab a seat in a voice channel when you're free. Friends in your server can see you're around and instantly pop in to talk without having to call.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};