import group4 from "./assesets/Group 4.jpg";
import group55 from "./assesets/Group 55.jpg";
import maskGroup from "./assesets/Mask Group.jpg";
import rectangle7 from "./assesets/Rectangle 7.png";
import secondPicture from "./assesets/Second Picture.jpg";
import "./HeroSection.css";


export default function HeroSection() {
    return (
        <>
            <div className = "group1">
            <div className = "gm">
            <img src={maskGroup} className="gm1" />
            <img src={group55} className="gm2" />
            <img src={group4} className="gm3" />
            </div>

            <div className = "para1">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. 
                                    <br />
                                    <br />
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus. 
                </p>
            </div>


            <div className="h3-1">
                <h3>
                    Next on the pipeline
                </h3>
            </div>
            

            <div className="para2">
                <p>
                    Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                                                <br />
                                                <br />
                    Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. 
                </p>
            </div>
        </div>

                            
        
                                {/* <!-- Second Picture --> */}
        <div className="sec-pic">
            <figure>
                <img src={secondPicture} className="secpic" />
                                        <br />
                <figcaption className="secfig">Image caption centered this way and I'll make this a bit longer to indicate the amount of line-height.</figcaption>
            </figure>
        </div>


                            {/* <!-- Group 2 Starting --> */}
        <div className="group2">
            <div>
                <p className="para2-1">
                    Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. 
                                                <br />
                                                <br />
                    In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo lacinia, auctor nisl et, consequat ante. Donec sit amet nisi arcu. Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. Nulla non volutpat leo.
                </p>
            </div>
            

            <div className="aa">
                <ul>
                    <span>A list looks like this:</span>
                    <br />
                    <br />
                    <li className="a">First item in the list</li>
                    <br />
                    <li className="b">Second item in the list lorem ipsum dolor sit amet nunc felis dolor lorem ipsum sit amet</li>
                    <br />
                    <li className="c">Third item in the list</li>
                </ul>
            </div>

            <div className="para2-2">
                <p>
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. 
                </p>
            </div>


            <div className="para2-3">
                <p>
                    Thanks for reading, <br />  Mika
                </p>
            </div>


            <div>
                <img src={rectangle7} className="g2-pic" />
            </div>


            <div>
                <p className="words">
                    Tags: product design, culture
                </p>
            </div>
        </div>


                            {/* <!-- Dash Line Starting  --> */}
        <div className="dash">
            <div><img src={maskGroup} className="d-pic" /></div>
            <div className="d-para">
                <p> <strong>Mika Matikainen</strong> is a Design Founder & Advisor, Berlin School of Creative Leadership Executive MBA participant, Zippie advisor, Wolt co-founder, and Nordic Rose stakeholder.  </p>
            </div>
        </div>
        </>
    );
}