import { useState } from "react";
import "./App.css";

const message = ["apple", "bat", "cat", "Dog", "Eat"];

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(true);

  function next() {
    if (count < 5) setCount(count + 1);
  }

  function previous() {
    if (count > 1) setCount(count - 1);
  }

  function close() {
    setText(!text);
  }

  return (
    <>
      <div className="close" onClick={close}>
        x
      </div>
      {text && (
        <div className="steps">
          <div className="numbers">
            <div className={`${count === 1 ? "active" : " "}`}>1</div>
            <div className={`${count === 2 ? "active" : " "}`}>2</div>
            <div className={`${count === 3 ? "active" : " "}`}>3</div>
            <div className={`${count === 4 ? "active" : " "}`}>4</div>
            <div className={`${count === 5 ? "active" : " "}`}>5</div>
          </div>

          <p className="message">
            Task Number : {count} = {message[count - 1]}
          </p>

          <div className="buttons">
            <button
              className="previous"
              onClick={() => previous()}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Previous
            </button>

            <button
              className="next"
              onClick={next}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
