import "./App.css";

const message = ["apple", "bat", "cat", "Dog", "Eat"];

export default function App() {
  function next() {
    alert("next");
  }

  function previous() {
    alert("previous");
  }

  const x = 1;

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${x === 1 ? "active" : " "}`}>1</div>
        <div className={`${x === 2 ? "active" : " "}`}>2</div>
        <div className={`${x === 3 ? "active" : " "}`}>3</div>
        <div className={`${x === 4 ? "active" : " "}`}>4</div>
        <div className={`${x === 5 ? "active" : " "}`}>5</div>
      </div>

      <p className="message">
        Task Number : {x} = {message[x - 1]}
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
  );
}
