import group10 from "./assesets/Group 10.jpg";
import pS1 from "./assesets/PS-1.jpg";
import pS2 from "./assesets/PS-2.jpg";
import pS3 from "./assesets/PS-3.jpg";
import pS4 from "./assesets/PS-4.jpg";
import pS5 from "./assesets/PS-5.jpg";
import pS6 from "./assesets/PS-6.jpg";
import "./NextSection.css";


export default function NextSection (){
    return (
        <>
            <div className="eye">
                <div><img src={group10} className="e-pic" /></div>
            </div>



                                {/* <!-- Picture Section  --> */}
            <h2 className="h2">
                What to read next
            </h2>       
        
        
            <div className="pic1-3">

                            {/* <!-- 1st Picture. --> */}
                <figure>
                    <img src={pS1} className="ps1 cs" />
                    <br />
                    <figcaption className="size size1">
                        Connecting artificial intelligence with digital product design
                    </figcaption>
                </figure>

                            {/* <!-- 2nd Picture --> */}
                <figure>
                    <img src={pS2} className="ps2 cs" />
                    <br />
                    <figcaption className="size size2">
                        Hello world, or, in other words, why this blog exists
                    </figcaption>
                </figure>

                            {/* <!-- 3rd Picture --> */}
                <figure>
                    <img src={pS3} className="ps3 cs" />
                    <br />
                    <figcaption className="size3">
                        Here are some things you should know regarding how we work 
                    </figcaption>
                </figure>
            </div>

            <div className="pic3-6">

                                {/* <!-- 4st Picture. --> */}
                <figure>
                    <img src={pS4} className="ps4 cs0" />
                    <br />
                    <figcaption className="size0 size01">
                        A few words about this blog platform, Ghost, and how this site was made
                    </figcaption>
                </figure>

                                {/* <!-- 5nd Picture --> */}
                <figure>
                    <img src={pS5} className="ps5 cs0" />
                    <br />
                    <figcaption className="size0 size02">
                        Updating list of 50+ sources on distributed teams, remote work, and how to make it all work better
                    </figcaption>
                </figure>

                                {/* <!-- 6rd Picture --> */}
                <figure>
                    <img src={pS6} className="ps6 cs0" />
                    <br />
                    <figcaption className="size03">
                        How modern remote working tools get along with Old School Cowboy's methods 
                    </figcaption>
                </figure>
            </div>



                        {/* <!-- SignUp Box --> */}
            <div className="box4">
                <div className="box5">
                    <h3 className="h4">
                        Sign up for the newsletter
                    </h3>

                    <p className="box-para">
                        If you want relevant updates occasionally, sign up for the private newsletter. Your email is never shared. 
                    </p>


                        {/* <!-- Button. --> */}
                    <input type="text" placeholder="Enter your email.." className="input" />
                    <button className="btn">SIGN UP</button>
                </div>   
            </div>
        </>
    );
};