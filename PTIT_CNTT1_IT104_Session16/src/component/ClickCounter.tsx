import { Component } from "react";
type State = {
  count: number;
};

class ClickCounter extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div style={{fontFamily: "sans-serif"}}>
        <h3>Số lần click: {this.state.count}</h3>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default ClickCounter;
