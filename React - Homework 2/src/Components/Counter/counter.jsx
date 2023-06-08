import "./counter.css";
import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count > 0 ? prevState.count - 1 : 0,
    }));
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  handleInputChange = (event) => {
    const newCount = parseInt(event.target.value);
    this.setState({ count: newCount >= 0 ? newCount : 0 });
  };

  render() {
    const { count } = this.state;
    const isEven = count % 2 === 0;
    const numberType = isEven ? "Even" : "Odd";

    return (
      <div className="counter-box">
        <p>Count: {count}</p>
        <span className={numberType}>{numberType}</span>
        <br />
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
        <button onClick={this.handleReset}>0</button>
        <br />
        <input type="number" value={count} onChange={this.handleInputChange} />
      </div>
    );
  }
}

export default Counter;
