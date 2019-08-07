import React from "react";

class Action extends React.Component {
  render() {
    return (
      <div>
        <p>
          <button onClick={this.props.increase}>Increase by: 5</button>
          <button onClick={this.props.decrease}>Decrease by: 5</button>
        </p>
        <p>
          <input type="test" id="increase" />
          <button onClick={this.props.addToCount}>Add to count</button>
        </p>
      </div>
    );
  }
}

export default Action;
