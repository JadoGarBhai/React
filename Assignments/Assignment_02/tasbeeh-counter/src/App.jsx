import "./App.css";
import React, { useState } from "react";
// import LandingPage from "./Components/LandingPage/LandingPage";

function App() {
  const [counter, setCounter] = useState(0);

  const add = () => {
    setCounter(counter + 1);
  };

  const reset = () => {
    setCounter(0);
  };
  return (
    <div className="d-flex vh-100 col-12 justify-content-center align-items-center">
      <div className="col-3">
        <h1 className="text-center bg-danger">Tasbeh Counter</h1>

        <div className="bg">
          <div className="btn btn-danger cc bg" onClick={add}>
            <p>{counter}</p>
          </div>
        </div>

        <button
          className="btn btn-warning col-12 my-2 fw-bold fs-5"
          onClick={reset}
        >
          RESET
        </button>
      </div>
    </div>
  );
}

export default App;
