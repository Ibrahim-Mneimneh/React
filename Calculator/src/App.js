import "./App.css";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("");
  const [calc, setCalc] = useState("");
  const [exp, setExp] = useState("");

  const clear = () => {
    setDisplay("");
    setExp("");
    setCalc("");
  };
  const remove = () => {
    setDisplay(display.slice(0, display.length - 1));
  };

  const answer = () => {
    if (exp === "*") {
      setDisplay(parseFloat(calc) * parseFloat(display));
    } else if (exp === "/") {
      setDisplay(parseFloat(calc) / parseFloat(display));
    } else if (exp === "+") {
      setDisplay(parseFloat(calc) + parseFloat(display));
    } else if (exp === "-") {
      setDisplay(parseFloat(calc, 10) - parseFloat(display));
    }
    setExp("");
  };
  const updateCalc = (ops) => {
    setCalc(display);
    setDisplay("");
    setExp(ops);
  };
  const calculate = (number) => {
    let k = display + number;
    setDisplay(k);
  };

  return (
    <div className="app">
      <div className="box">
        <span>{display ? display : calc}</span>

        <div className="box-buttons">
          <button
            className="clear"
            onClick={() => {
              clear();
            }}
          >
            Clear
          </button>
          <button
            onClick={() => {
              remove();
            }}
          >
            DEL
          </button>
          <button
            onClick={() => {
              updateCalc("/");
            }}
          >
            ÷
          </button>
          <button
            className="key-buttons"
            key={1}
            onClick={() => {
              calculate("1");
            }}
          >
            1
          </button>
          <button
            className="key-buttons"
            key={2}
            onClick={() => {
              calculate("2");
            }}
          >
            2
          </button>
          <button
            className="key-buttons"
            key={3}
            onClick={() => {
              calculate("3");
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              updateCalc("*");
            }}
          >
            *
          </button>
          <button
            className="key-buttons"
            key={4}
            onClick={() => {
              calculate("4");
            }}
          >
            4
          </button>
          <button
            className="key-buttons"
            key={5}
            onClick={() => {
              calculate("5");
            }}
          >
            5
          </button>
          <button
            className="key-buttons"
            key={6}
            onClick={() => {
              calculate("6");
            }}
          >
            6
          </button>
          <button
            onClick={() => {
              updateCalc("+");
            }}
          >
            +
          </button>
          <button
            className="key-buttons"
            key={7}
            onClick={() => {
              calculate("7");
            }}
          >
            7
          </button>
          <button
            className="key-buttons"
            key={8}
            onClick={() => {
              calculate("8");
            }}
          >
            8
          </button>
          <button
            className="key-buttons"
            key={9}
            onClick={() => {
              calculate("9");
            }}
          >
            9
          </button>
          <button
            onClick={() => {
              updateCalc("-");
            }}
          >
            -
          </button>
          <button
            className="key-buttons"
            key={0}
            onClick={() => {
              calculate("0");
            }}
          >
            0
          </button>
          <button
            onClick={() => {
              calculate(".");
            }}
          >
            .
          </button>
          <button
            onClick={() => {
              answer();
            }}
            className="equal"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
