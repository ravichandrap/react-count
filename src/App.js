import React from "react";
import "./App.css";

import Result from "./Result";
import Reset from "./Reset";
import Action from "./Action";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 5,
      count: 1000
    };
  }

  increase() {
    let count = this.state.count;
    count += 5;
    this.setState({
      count
    });
  }

  decrease(e) {
    let count = this.state.count;
    count -= 5;
    this.setState({
      count
    });
  }

  reset(e) {
    this.setState({
      count: 0
    });
  }

  addToCount(e) {
    let count = this.state.count;
    const value = document.getElementById("increase").value;
    console.log(value);
    if (value !== undefined && value !== 0 && value !== "") {
      count += Number(value);
      this.setState({
        count
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Result count={this.state.count} />
        <Reset reset={e => this.reset(e)} />
        <Action
          increase={e => this.increase(e)}
          decrease={e => this.decrease(e)}
          addToCount={e => this.addToCount(e)}
        />
      </div>
    );
  }
}

export default App;
