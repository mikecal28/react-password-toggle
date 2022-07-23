import { Component } from "react";
import "../styles.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      hide: false,
      password: "",
      mask: ""
    };
  }

  handleClick(e) {
    e.preventDefault();

    this.setState((state, props) => ({
      hide: !state.hide
    }));
  }

  handleKeyDown(e) {
    this.setState((state, props) => ({
      password:
        e.key !== "Backspace"
          ? state.password + e.key
          : state.password.slice(0, -1),
      mask: e.key !== "Backspace" ? state.mask + "*" : state.mask.slice(0, -1)
    }));
  }

  render() {
    return (
      <div className="app">
        <h1>Password Toggle</h1>
        <div className="input-and-button">
          <input
            id="password"
            type="text"
            placeholder="Password..."
            onKeyDown={(e) => this.handleKeyDown(e)}
            value={
              this.state.hide === false ? this.state.password : this.state.mask
            }
          />
          <button onClick={(e) => this.handleClick(e)}>
            {this.state.hide === true ? "Show" : "Hide"}
          </button>
        </div>
      </div>
    );
  }
}
