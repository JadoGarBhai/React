import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("Result");
  return (
    <>
      <div>
        <input type="text" name="result1" id="result1" readOnly />

        <input
          type="text"
          name="result2"
          id="result2"
          readOnly
          value={result}
        />
      </div>
      <button>9</button>
      <button>8</button>
      <button>7</button>
      <button>6</button>
      <button>5</button>
      <button>4</button>
      <button>3</button>
      <button>2</button>
      <button>1</button>
      <button>0</button>
    </>
  );
}

export default App;
