import { Component } from "react";
import "./styles.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      toggle: 0,
      password: ""
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Password Toggle</h1>
        <h2>It's gonna do stuff!</h2>
      </div>
    );
  }
}
