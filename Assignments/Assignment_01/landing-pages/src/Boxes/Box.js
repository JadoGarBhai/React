import "./Box.css";


export default function Box(data){
    return (
        <>
            <div className="box">
                <div className="container">
                    <h2>Page_{data.num}</h2>

                    <button><a href={data.link} target="_blank" rel="noopener noreferrer">Live Demo</a></button>
                </div>
            </div>
        </>
    );
};