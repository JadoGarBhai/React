import React from 'react';
import nordicRose from './assesets/nordicRose.jpg';
import headerImage from './assesets/headerImage.jpg';
import './Header.css';

export default function Header() {
    return (
        <>
            <header>
                <div className="navbar">
                    <div className="pic">
                        <img src={nordicRose} alt="img" />
                    </div>
                    <div className="nav">
                        <nav>
                            <ul>
                                <li className="nav1 nav2">BLOG</li>
                                <li className="nav1">ABOUT</li>
                                <li className="nav1">LINKS</li>
                                <li className="nav1">PROJECTS</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            {/* <!-- Header Ended --> */}

            {/* Main Starting */}
            <main>
                <div className="bold">
                    <h1>
                        A few words about this blog platform, Ghost, and how this site was made
                    </h1>
                </div>

                {/* <!-- Box 2 Starting --> */}
                <div className="box2">
                    <p>
                        Why Ghost (& Figma) instead of Medium, WordPress or other options?
                    </p>
                </div>

                {/* <!-- Yellow Picture --> */}
                <div className="yellow">
                    <img src={headerImage} alt="img" className="yp" />
                </div>
            </main>
        </>
    );
}
