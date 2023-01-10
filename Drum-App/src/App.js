import "./App.css";
import React from "react";

function App() {
  return <Drums></Drums>;
}
class Drums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      audio: 100,
    };
    this.togglePower = this.togglePower.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
  }
  togglePower() {
    this.setState({ power: !this.state.power });
  }
  changeVolume(level) {
    this.setState({ audio: level.target.value });
  }

  render() {
    return (
      <div className="back">
        <div className="drum">
          <h1>Welcome to your Drum-App</h1>
          <button
            className="toggle-button"
            onClick={this.togglePower}
            style={
              this.state.power
                ? { backgroundColor: "green" }
                : { backgroundColor: "red" }
            }
          >
            {this.state.power ? "On" : "Off"}
          </button>
          <h3 className="volume-text">Volume:</h3>
          <input
            type="range"
            className="volume"
            id="vol"
            max="1"
            min="0"
            step="0.01"
            onChange={this.changeVolume}
            value={this.state.audio}
          />
          <button
            id="Q"
            className="drum-pad"
            onClick={this.state.power ? clickQ : click}
          >
            Q
          </button>
          <button
            id="W"
            className="drum-pad2"
            onClick={this.state.power ? clickW : click}
          >
            W
          </button>
          <button
            id="E"
            className="drum-pad3"
            onClick={this.state.power ? clickE : click}
          >
            E
          </button>
          <br />
          <button
            id="A"
            className="drum-pad"
            onClick={this.state.power ? clickA : click}
          >
            A
          </button>
          <button
            id="S"
            className="drum-pad2"
            onClick={this.state.power ? clickS : click}
          >
            S
          </button>
          <button
            id="D"
            className="drum-pad3"
            onClick={this.state.power ? clickD : click}
          >
            D
          </button>
          <br />
          <button
            id="Y"
            className="drum-pad"
            onClick={this.state.power ? clickY : click}
          >
            Y
          </button>
          <button
            id="X"
            className="drum-pad2"
            onClick={this.state.power ? clickX : click}
          >
            X
          </button>
          <button
            id="C"
            className="drum-pad3"
            onClick={this.state.power ? clickC : click}
          >
            C
          </button>
        </div>
      </div>
    );
  }
}
function playAudio(url) {
  new Audio(url).play();
}
function click() {
  return 0;
}
window.addEventListener("keydown", (event) => {
  if (event.key === "q") {
    clickQ();
  } else if (event.key === "w") {
    clickW();
  } else if (event.key === "e") {
    clickE();
  } else if (event.key === "a") {
    clickA();
  } else if (event.key === "s") {
    clickS();
  } else if (event.key === "d") {
    clickD();
  } else if (event.key === "y") {
    clickY();
  } else if (event.key === "x") {
    clickX();
  } else if (event.key === "c") {
    clickC();
  }
});

function clickQ() {
  playAudio("https://www.fesliyanstudios.com/play-mp3/6734");
}
function clickW() {
  playAudio("https://www.fesliyanstudios.com/play-mp3/6678");
}
function clickE() {
  playAudio("https://www.fesliyanstudios.com/play-mp3/6711");
}
function clickA() {
  playAudio("https://www.fesliyanstudios.com/play-mp3/6773");
}
function clickS() {
  playAudio("https://www.fesliyanstudios.com/play-mp3/6696");
}
function clickD() {
  playAudio("https://www.fesliyanstudios.com/play-mp3/6762");
}
function clickY() {
  playAudio("https://www.fesliyanstudios.com/play-mp3/6780");
}
function clickX() {
  playAudio("https://www.fesliyanstudios.com/play-mp3/6677");
}
function clickC() {
  playAudio("https://www.fesliyanstudios.com/play-mp3/6775");
}

export default App;
