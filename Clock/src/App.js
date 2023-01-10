import "./App.css";
import React from "react";
let j = new Date();
function App() {
  return <ClockApp />;
}
export default App;
function playAudio(link) {
  new Audio(link).play();
}
class ClockApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: j.getHours,
      minutes: j.getMinutes,
      seconds: j.getSeconds,
      unit: j.getHours > 12 ? "PM" : "AM",
      timer: 0,
    };
    this.updateHour = this.updateHour.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateHour() {
    setInterval(() => {
      let date = new Date();
      this.setState({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        unit: this.state.hours > 12 ? "PM" : "AM",
      });
    }, 1000);
  }
  componentDidMount() {
    this.updateHour();
  }
  handleChange(e) {
    this.setState({
      timer: e.target.value,
    });
  }
  handleSubmit(e) {
    const timer = setTimeout(
      () => playAudio("https://www.fesliyanstudios.com/play-mp3/6677"),
      this.state.timer * 1000
    );
    clearTimeout(timer);
    e.preventDefault();
  }

  render() {
    return (
      <div className="clock">
        <h2>Digital Clock</h2>
        <div className="k">
          <div>
            <span id="hour">{this.state.hours}</span>
            <span className="text">Hours</span>
          </div>

          <div>
            <span id="minutes">{this.state.minutes}</span>
            <span className="text">Minutes</span>
          </div>

          <div>
            <span id="seconds">{this.state.seconds}</span>
            <span className="text">Seconds</span>
          </div>

          <div>
            <span id="ampm">{this.state.unit}</span>
          </div>
        </div>
        <div>
          <input
            type="number"
            onChange={this.handleChange}
            value={this.state.timer}
          />
          <button onClick={this.handleSubmit}>submit</button>
        </div>
      </div>
    );
  }
}
