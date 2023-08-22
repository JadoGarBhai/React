import "./Box.css";


export default function Box(num){
    return (
        <>
            <div className="box">
                <div className="container">
                    <h2>Page_{num}</h2>
                    <a href="https://react-assignment-01-1.netlify.app/">Click Here</a>
                </div>
            </div>
        </>
    );
};